// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vibubywbiwsfnakdxbpa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYnVieXdiaXdzZm5ha2R4YnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODA5NTAsImV4cCI6MjA2MzI1Njk1MH0.PjUZKH6-sUJiRfsAjc0l4lsD55jTalJQ1W-Ed-NZ2F8';
export const supabase = createClient(supabaseUrl, supabaseKey);