import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * Validates the Supabase URL and Key to prevent build crashes.
 * returns true if the URL starts with http:// or https:// and both values are present.
 */
const isValidSupabaseConfig = (url, key) => {
    if (!url || !key) return false;
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
    } catch (e) {
        return false;
    }
};

// Initialize the client only if the configuration is valid.
// Otherwise, we export a null client to avoid throwing errors during static generation.
export const supabase = isValidSupabaseConfig(supabaseUrl, supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

if (!supabase) {
    console.warn('Supabase credentials missing or invalid. Check .env.local and public environment variables.');
}
