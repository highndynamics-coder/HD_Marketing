import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jmborfiygiznaauuromw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYm9yZml5Z2l6bmFhdXVyb213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NzY0NjIsImV4cCI6MjA3ODA1MjQ2Mn0.VWDTU2G8YrkTnyD4-q-En2mWq9bNYKwG-HvdLg9qpgA";

export const supabase = createClient(
  supabaseUrl ?? "https://jmborfiygiznaauuromw.supabase.co",
  supabaseAnonKey ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYm9yZml5Z2l6bmFhdXVyb213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NzY0NjIsImV4cCI6MjA3ODA1MjQ2Mn0.VWDTU2G8YrkTnyD4-q-En2mWq9bNYKwG-HvdLg9qpgA"
);
