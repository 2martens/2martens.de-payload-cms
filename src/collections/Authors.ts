import type { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      label: 'Author Link',
      admin: {
        description: 'Only add the path component, starting with the root slash (/)',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Role of the author',
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: false,
      label: 'Image of the author',
    },
  ],
}
