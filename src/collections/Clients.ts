import type { CollectionConfig } from 'payload'

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
