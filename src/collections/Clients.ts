import type { CollectionConfig } from 'payload'
import { env } from 'node:process';

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'username',
  },
  auth: {
    useAPIKey: true,
    loginWithUsername: true
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
