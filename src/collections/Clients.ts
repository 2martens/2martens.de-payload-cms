import type { CollectionConfig } from 'payload'
import { username } from 'payload/shared'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'username',
  },
  auth: {
    useAPIKey: true,
    disableLocalStrategy: true,
  },
  fields: [
    // Email added by default
    {
      name: 'username',
      type: 'text',
      required: true
    },
    // Add more fields as needed
  ],
}
