// Placeholder for the production connection.
// Install @supabase/supabase-js before enabling this client.
export function getSupabaseConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
  };
}
