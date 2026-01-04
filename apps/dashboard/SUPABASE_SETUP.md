# Supabase Setup

This project uses Supabase as the database. To get started, you need to configure your Supabase credentials.

## Environment Variables

Create a `.env.local` file in the `apps/dashboard` directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Getting Your Supabase Credentials

1. Go to your Supabase project: https://app.supabase.com
2. Navigate to **Settings** → **API**
3. Copy the following:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Usage

### Server Components / Server Actions

```typescript
import { createServerClient } from "@/lib/supabase";

const supabase = createServerClient();
const { data, error } = await supabase.from("your_table").select("*");
```

### Client Components

```typescript
"use client";

import { createBrowserClient } from "@/lib/supabase";

const supabase = createBrowserClient();
const { data, error } = await supabase.from("your_table").select("*");
```

