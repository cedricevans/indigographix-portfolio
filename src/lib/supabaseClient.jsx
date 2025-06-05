import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bnpezptpvslpqacpixhc.supabase.co'; // replace
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJucGV6cHRwdnNscHFhY3BpeGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTA4MzcsImV4cCI6MjA2NDYyNjgzN30.ON5KW3oFQxKkB5_niiFbWRQeskUhYYKq4AqQgb7m4Xo';
export const supabase = createClient(supabaseUrl, supabaseKey);



