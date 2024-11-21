from supabase import create_client
import config

def connect_to_supabase():
    supabase = create_client(config.SUPABASE_URL, config.SUPABASE_KEY)
    return supabase

def insert():
    supabase = connect_to_supabase()
    data = {"name": "John Doe", "email": "john@example.com"}
    response = supabase.table("users").insert(data).execute()
    print(response)

def getAll():
    supabase = connect_to_supabase()
    response = supabase.table("users").select("*").execute()
    print(response.data)

def update(user_id):
    supabase = connect_to_supabase()
    response = supabase.table("users").update({"email": "new-email@example.com"}).eq("id", user_id).execute()
    print(response)

def delete(user_id):
    supabase = connect_to_supabase()
    response = supabase.table("users").delete().eq("id", user_id).execute()
    print(response)
