import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseConfigured = Boolean(url && key && !url.includes('your-project') && !key.includes('your-public'))
export const supabase = supabaseConfigured ? createClient(url, key) : null
