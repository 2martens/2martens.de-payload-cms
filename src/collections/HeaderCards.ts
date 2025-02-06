import type { CollectionConfig } from 'payload'

export const HeaderCards: CollectionConfig = {
  slug: 'header-cards',
  admin: {
    defaultColumns: ['name', 'icon', 'description'],
    useAsTitle: 'name',
    group: 'Navigation',
    components: {
      // Optional: Custom views for the collection
      // BeforeList: [],
      // AfterList: [],
    },
    listSearchableFields: ['name', 'description'],
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
