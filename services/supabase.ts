
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://klhhgcjqrjazmajborps.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
if (!supabaseKey) {
  throw new Error('Missing SUPABASE_KEY environment variable')
}
const supabase = createClient(supabaseUrl, supabaseKey)