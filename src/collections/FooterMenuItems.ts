import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'

export const FooterMenuItems: CollectionConfig = {
  slug: 'footer-menu-items',
  admin: {
    defaultColumns: ['name', 'link'],
    useAsTitle: 'name',
    group: 'Navigation',
    components: {
      // Optional: Custom views for the collection
      // BeforeList: [],
      // AfterList: [],
    },
    listSearchableFields: ['name'],
  },
  access: {
    create: authenticated,
    read: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      admin: {
        description: 'Only add the path component, starting with the root slash (/)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    }
  ],
}
