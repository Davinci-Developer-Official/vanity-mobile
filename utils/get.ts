const supabaseUrl = "https://ygrwfbubjwuvmlnxulko.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncndmYnViand1dm1sbnh1bGtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NjIwNTEsImV4cCI6MjA2MjQzODA1MX0.wGbaACQ7mYiFRJmTRHKgoRTRJzJj5D8ECmIouuPXiiI"

export async function getSupabase(table:string,filters?:string) {
    const url_filtered = `${supabaseUrl}/rest/v1/${table}${filters ? `?{filters}`:""}`
    const url_unfiltered =`${supabaseUrl}/rest/v1/${table}`
    const url = filters ? url_filtered:url_unfiltered;
    const res = await fetch(url,{
        headers:{
            apikey:supabaseAnonKey,
            Authorization:`Bearer ${supabaseAnonKey}`
        },
        method:"GET"
    });

    const data = await res.json();
    if(!res.ok) throw new Error(data.message||"")
        console.log(`working @1`)
    return data
}
export async function postSupabase(table:string,filters?:string) {
    const url_filtered  = `${supabaseUrl}/v1/${table}${filters?`?${filters}`:""}`    
    const url_unfiltered =` ${supabaseUrl}/v1/${table}`

    const url = filters ? url_filtered : url_unfiltered
    const res = await fetch(url,{
        method:"POST",
        headers:{
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`
        }
        })
    const data = await res.json();
    if(!res.ok) throw new Error(data.message||"")
        console.log(`working @1`)
    return data
}

