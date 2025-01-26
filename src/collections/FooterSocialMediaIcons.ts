import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'

export const FooterSocialMediaIcons: CollectionConfig = {
  slug: 'footer-social-media-icons',
  admin: {
    defaultColumns: ['name', 'icon', 'link'],
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
      name: 'icon',
      type: 'text',
      required: true,
      admin: {
        description: 'Use FontAwesome icon name (e.g., "phone", "life-ring")',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    }
  ],
}
