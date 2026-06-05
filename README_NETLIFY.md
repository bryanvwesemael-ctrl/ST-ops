# StockTeam v6 — Netlify setup

## Netlify environment variables
Set these in Netlify:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

The build script also accepts these alternatives:

- `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Files to put in your GitHub repo

- `StockTeam_v6_netlify_template.html`
- `build.js`
- `netlify.toml`

Netlify will run `node build.js`, replace the placeholders with the environment variables, and publish `dist/index.html`.

## Important
The Supabase anon key is safe to use in the frontend only when Row Level Security and policies are correct. Never put the service role key in this app.
