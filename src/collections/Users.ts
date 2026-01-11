import type { CollectionConfig } from 'payload'
import { env } from 'node:process';

let isDevelopment = false
if (process != null && process.env != null) {
  isDevelopment = env.PAYLOAD_PUBLIC_IS_DEVELOPMENT === 'true' || false
}
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
