// utils/auth.ts

const supabaseUrl = "https://ygrwfbubjwuvmlnxulko.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncndmYnViand1dm1sbnh1bGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NjIwNTEsImV4cCI6MjA2MjQzODA1MX0.wGbaACQ7mYiFRJmTRHKgoRTRJzJj5D8ECmIouuPXiiI"

const authUrl = `${supabaseUrl}/auth/v1`;

export async function signUp(email: string, password: string) {
  const res = await fetch(`${authUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Sign up failed");
  return data;
}

export async function signIn(email: string, password: string) {
  const res = await fetch(`${authUrl}/token?grant_type=password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Sign in failed");
  return data;
}

export async function signOut(accessToken: string) {
  const res = await fetch(`${authUrl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!res.ok) throw new Error("Sign out failed");
  return true;
}
