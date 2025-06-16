import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ygrwfbubjwuvmlnxulko.supabase.co";
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncndmYnViand1dm1sbnh1bGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NjIwNTEsImV4cCI6MjA2MjQzODA1MX0.wGbaACQ7mYiFRJmTRHKgoRTRJzJj5D8ECmIouuPXiiI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
