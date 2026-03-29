import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { Collections } from './collections'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Collections Schema (Simplified and inlined to avoid ESM issues)
const Services = {
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
      required: false,
    },
  ],
}

const Portfolio = {
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

const Reviews = {
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

const Media = {
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

const config = buildConfig({
  admin: {
    user: 'users',
    autoLogin: {
      email: 'odmen@avc.uz',
      password: '10092002Mn',
      prefillOnly: true,
    },
  },
  collections: [
    Services as any,
    Portfolio as any,
    Reviews as any,
    Media as any,
    {
      slug: 'users',
      auth: true,
      admin: {
        useAsTitle: 'email',
      },
      fields: [],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'avc-ultra-secret-key-2026',
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  localization: {
    locales: [
      {
        label: 'Russian',
        code: 'ru',
      },
      {
        label: 'Uzbek',
        code: 'uz',
      },
      {
        label: 'English',
        code: 'en',
      },
    ],
    defaultLocale: 'ru',
    fallback: true,
  },
})

export default config
export { config }
