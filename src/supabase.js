import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const disabledResponse = { data: null, error: { message: "Supabase is not configured." } };
const disabledQuery = {
  select: () => disabledQuery,
  eq: () => disabledQuery,
  order: () => Promise.resolve({ data: [], error: null }),
  single: () => Promise.resolve(disabledResponse),
  insert: () => Promise.resolve(disabledResponse),
  update: () => disabledQuery,
  delete: () => disabledQuery,
};

const disabledSupabase = {
  from: () => disabledQuery,
  channel: () => ({
    on: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    subscribe: () => ({ unsubscribe: () => {} }),
  }),
  storage: {
    from: () => ({
      upload: () => Promise.resolve(disabledResponse),
      getPublicUrl: () => ({ data: { publicUrl: "" } }),
    }),
  },
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null }),
    signInWithPassword: () => Promise.resolve(disabledResponse),
    signOut: () => Promise.resolve({ error: null }),
  },
};

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : disabledSupabase;
