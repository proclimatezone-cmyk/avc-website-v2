import { Page as PayloadPage, generateMetadata } from '@payloadcms/next/views'
import { config } from '../../../payload.config'

type Args = {
  params: {
    segments: string[]
  }
}

export const metadata = ({ params }: Args) => generateMetadata({ config, ...params })

const Page = ({ params }: Args) => (
  <PayloadPage config={config} {...params} />
)

export default Page
