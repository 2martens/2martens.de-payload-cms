import type { CollectionConfig } from 'payload'

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
        description: 'Use FontAwesome icon name (e.g., "phone", "life-ring"). Only brand icons are supported.',
      },
    },
    {
      name: 'link',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
    }
  ],
}
