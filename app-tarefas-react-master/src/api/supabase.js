// src/api/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wsgtrzkxpdgpemiuwolp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzZ3Ryemt4cGRncGVtaXV3b2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODU0MTgsImV4cCI6MjA2NTI2MTQxOH0.k1a7fj5LBSTF5ZTVl6ui5vmgsutNjVgF7pSkDLQYUi8'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
