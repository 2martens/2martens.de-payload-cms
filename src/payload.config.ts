// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Clients } from './collections/Clients'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { HeaderCards } from './collections/HeaderCards'
import { HeaderMenuItems } from './collections/HeaderMenuItems'
import { FooterSocialMediaIcons } from './collections/FooterSocialMediaIcons'
import { FooterMenuItems } from './collections/FooterMenuItems'
import { Categories } from './collections/Categories'
import { Authors } from './collections/Authors'
import { Speeches } from './collections/Speeches'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    dateFormat: 'yyyy-MM-dd',
  },
  csrf: [
    'https://cms.2martens.de',
    'http://localhost:3000',
  ],
  collections: [Users, Clients, Media, Posts, HeaderCards, HeaderMenuItems, FooterMenuItems, FooterSocialMediaIcons, Categories, Authors, Speeches],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
