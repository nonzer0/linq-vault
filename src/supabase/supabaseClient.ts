import { createClient } from "@supabase/supabase-js";

function getSupabaseCreds() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
  return { supabaseUrl, supabaseAnonKey };
}

export const supabase = createClient(
  getSupabaseCreds().supabaseUrl,
  getSupabaseCreds().supabaseAnonKey
);
