import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'

export const HeaderMenuItems: CollectionConfig = {
  slug: 'header-menu-items',
  admin: {
    defaultColumns: ['name', 'description'],
    useAsTitle: 'name',
    group: 'Navigation',
    components: {
      // Optional: Custom views for the collection
      // BeforeList: [],
      // AfterList: [],
    },
    listSearchableFields: ['name', 'description'],
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
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    }
  ],
}
