import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '@/access/anyone'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: false,
      index: true,
      hasMany: false,
      options: [
        { label: 'Politics', value: 'politics' },
        { label: 'G20', value: 'G20' },
        { label: 'Blog', value: 'blog' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
