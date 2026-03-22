import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'num',
      type: 'text',
      required: true,
      label: 'Service Number (e.g., 01)',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true, // Enable translation for title
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
      localized: true, // Enable translation for description
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export const Portfolio: CollectionConfig = {
  slug: 'portfolio',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'img',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tag',
      type: 'text',
      required: true,
      label: 'Location/Tag',
    },
  ],
}

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      localized: true,
    },
  ],
}

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
