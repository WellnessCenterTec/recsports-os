const PHYSICAL_TESTS = [
  { key: "cooper_12m", name: "Prueba de Cooper", detail: "Distancia recorrida en 12 minutos", unit: "km", step: "0.001", min: 0.001, max: 10, hint: "Captura kilómetros, por ejemplo 1.620" },
  { key: "abdominales", name: "Abdominales", detail: "Total de repeticiones", unit: "repeticiones", step: "1", min: 0, max: 1000, integer: true },
  { key: "lagartijas", name: "Lagartijas", detail: "Total de repeticiones", unit: "repeticiones", step: "1", min: 0, max: 1000, integer: true },
  { key: "saltos_cuerda", name: "Saltos con cuerda", detail: "Total de repeticiones", unit: "repeticiones", step: "1", min: 0, max: 5000, integer: true },
  { key: "wall_ball", name: "Wall Ball Shots", detail: "Sentadilla con lanzamiento", unit: "repeticiones", step: "1", min: 0, max: 1000, integer: true },
  { key: "remo_distancia", name: "Remo con máquina", detail: "Distancia recorrida", unit: "metros", step: "0.001", min: 0, max: 20000, hint: "Captura la distancia en metros" },
  { key: "remo_suspendido", name: "Remo suspendido", detail: "Total de repeticiones", unit: "repeticiones", step: "1", min: 0, max: 1000, integer: true }
];

const PHYSICAL_EVALUATION_UPDATE_KEY = "wellsync_physical_evaluation_updated_at";

const env = window.RECSPORTS_ENV || {};
const client = window.supabase && env.SUPABASE_URL && env.SUPABASE_ANON_KEY
  ? window.supabase.createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
  : null;

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderTests() {
  $("#physicalTests").innerHTML = PHYSICAL_TESTS.map((test, index) => `
    <article class="physical-test-card" data-test="${test.key}">
      <div class="physical-test-number">${index + 1}</div>
      <div class="physical-test-copy">
        <h3>${test.name}</h3>
        <p>${test.detail}</p>
      </div>
      <label>
        Estado
        <select class="test-status">
          <option value="realizada">Realizada</option>
          <option value="lesion">Lesión</option>
          <option value="contraindicacion">Contraindicación</option>
          <option value="otro">Otro motivo</option>
        </select>
      </label>
      <label class="test-value-field">
        Resultado
        <span class="input-with-unit">
          <input class="test-value" type="number" min="${test.min}" max="${test.max}" step="${test.step}" inputmode="decimal" />
          <span>${test.unit}</span>
        </span>
        ${test.hint ? `<small>${test.hint}</small>` : ""}
      </label>
      <label class="test-note-field" hidden>
        Motivo u observación
        <input class="test-note" type="text" maxlength="160" placeholder="Describe brevemente" />
      </label>
    </article>
  `).join("");

  document.querySelectorAll(".test-status").forEach((select) => {
    select.addEventListener("change", () => {
      const card = select.closest(".physical-test-card");
      const completed = select.value === "realizada";
      card.querySelector(".test-value-field").hidden = !completed;
      card.querySelector(".test-note-field").hidden = completed;
      if (completed) card.querySelector(".test-note").value = "";
      else card.querySelector(".test-value").value = "";
    });
  });
}

async function validateAccessAndLoadCollaborators() {
  const select = $("#physicalCollaborator");
  const button = $("#validatePhysicalAccess");
  const accessCode = $("#physicalAccessCode").value.trim();
  const message = $("#physicalAccessMessage");
  if (!accessCode) {
    message.textContent = "Escribe el código general.";
    return;
  }
  if (!client) {
    select.innerHTML = '<option value="">Servicio no disponible</option>';
    message.textContent = "No fue posible conectar con WellSync.";
    return;
  }
  button.disabled = true;
  button.textContent = "Validando...";
  message.textContent = "";
  const { data, error } = await client.rpc("list_public_evaluation_collaborators", {
    access_code: accessCode
  });
  button.disabled = false;
  button.textContent = "Continuar";
  if (error) {
    select.innerHTML = '<option value="">No se pudo cargar la lista</option>';
    message.textContent = error.message.includes("Código")
      ? "El código no es correcto. Verifícalo con Dirección."
      : "El módulo aún no está activado en Supabase.";
    return;
  }
  select.innerHTML = '<option value="">Selecciona tu nombre</option>' +
    (data || []).map((row) => `<option value="${escapeHtml(row.nomina)}">${escapeHtml(row.full_name)}</option>`).join("");
  $("#physicalCaptureSections").hidden = false;
  $("#physicalAccessSection").classList.add("is-validated");
  $("#physicalAccessCode").readOnly = true;
  button.hidden = true;
  message.textContent = "Código validado. Ya puedes seleccionar tu nombre.";
  $("#physicalCollaborator").focus();
}

function collectPayload() {
  const collaborator = $("#physicalCollaborator");
  const results = PHYSICAL_TESTS.map((test) => {
    const card = document.querySelector(`[data-test="${test.key}"]`);
    const status = card.querySelector(".test-status").value;
    return {
      test_key: test.key,
      status,
      value: status === "realizada" ? card.querySelector(".test-value").value : "",
      notes: status === "realizada" ? "" : card.querySelector(".test-note").value.trim()
    };
  });
  return {
    access_code: $("#physicalAccessCode").value.trim(),
    collaborator_nomina: collaborator.value,
    collaborator_name: collaborator.selectedOptions[0]?.textContent || "",
    period_key: $("#physicalPeriod").value,
    semester_label: $("#physicalPeriod").value,
    evaluation_stage: $("#physicalStage").value,
    discipline: $("#physicalDiscipline").value.trim(),
    evaluated_at: new Date().toISOString(),
    general_notes: $("#physicalNotes").value.trim(),
    results
  };
}

function validatePayload(payload) {
  if (!payload.collaborator_nomina) return "Selecciona tu nombre.";
  if (!payload.period_key) return "Selecciona el periodo.";
  if (!payload.discipline) return "Escribe la disciplina o clase.";
  for (const result of payload.results) {
    const test = PHYSICAL_TESTS.find((item) => item.key === result.test_key);
    if (result.status === "realizada") {
      const value = Number(String(result.value).replace(",", "."));
      if (result.value === "" || !Number.isFinite(value)) return `Captura un resultado numérico para ${test.name}.`;
      if (value < test.min || value > test.max) {
        return `${test.name} debe estar entre ${test.min} y ${test.max} ${test.unit}.`;
      }
      if (test.integer && !Number.isInteger(value)) return `${test.name} debe registrarse con repeticiones enteras.`;
    }
    if (result.status !== "realizada" && !result.notes) {
      return `Describe el motivo para ${test.name}.`;
    }
  }
  return "";
}

function showReview() {
  const payload = collectPayload();
  const error = validatePayload(payload);
  if (error) {
    $("#physicalFormMessage").textContent = error;
    return;
  }
  const stageLabel = $("#physicalStage").selectedOptions[0].textContent;
  $("#physicalReviewContent").innerHTML = `
    <p class="eyebrow">Confirmación</p>
    <h2>Revisa antes de guardar</h2>
    <div class="physical-review-summary">
      <div><span>Colaborador</span><strong>${escapeHtml(payload.collaborator_name)}</strong></div>
      <div><span>Periodo</span><strong>${escapeHtml(payload.period_key)}</strong></div>
      <div><span>Evaluación</span><strong>${escapeHtml(stageLabel)}</strong></div>
      <div><span>Disciplina</span><strong>${escapeHtml(payload.discipline)}</strong></div>
    </div>
    <div class="physical-review-results">
      ${payload.results.map((result) => {
        const test = PHYSICAL_TESTS.find((item) => item.key === result.test_key);
        return `<div><span>${test.name}</span><strong>${result.status === "realizada" ? `${escapeHtml(result.value)} ${test.unit}` : escapeHtml(result.notes)}</strong></div>`;
      }).join("")}
    </div>
  `;
  $("#physicalReviewDialog").showModal();
}

async function saveEvaluation() {
  const button = $("#savePhysicalEvaluation");
  const payload = collectPayload();
  const error = validatePayload(payload);
  if (error || !client) return;
  button.disabled = true;
  button.textContent = "Guardando...";
  const response = await client.rpc("submit_public_physical_evaluation", { payload });
  if (response.error) {
    button.disabled = false;
    button.textContent = "Guardar evaluación";
    $("#physicalReviewDialog").close();
    $("#physicalFormMessage").textContent = `No se pudo guardar: ${response.error.message}`;
    return;
  }
  try {
    localStorage.setItem(PHYSICAL_EVALUATION_UPDATE_KEY, new Date().toISOString());
  } catch (error) {
    console.warn("No se pudo notificar la actualización de evaluaciones", error);
  }
  $("#physicalReviewContent").innerHTML = `
    <div class="physical-success">
      <div class="physical-success-mark">✓</div>
      <h2>Evaluación guardada</h2>
      <p>La información ya se encuentra en WellSync. Si el tablero está abierto en otra pestaña, se actualizará automáticamente.</p>
    </div>
  `;
  $(".physical-review-actions").innerHTML = '<button class="primary-btn" type="button" onclick="window.location.reload()">Capturar otra evaluación</button>';
}

renderTests();
$("#validatePhysicalAccess").addEventListener("click", validateAccessAndLoadCollaborators);
$("#physicalAccessCode").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    validateAccessAndLoadCollaborators();
  }
});
$("#reviewPhysicalEvaluation").addEventListener("click", showReview);
$("#editPhysicalEvaluation").addEventListener("click", () => $("#physicalReviewDialog").close());
$("#savePhysicalEvaluation").addEventListener("click", saveEvaluation);
