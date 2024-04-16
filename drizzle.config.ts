import 'dotenv/config'
import { join } from 'pathe'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/database/schema/index.ts',
  out: './server/database/migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: join(__dirname, process.env.DATABASE || 'server/database/db.sqlite'),
  },
  verbose: true,
  strict: true,
})