import { REST_GET as payloadGET, REST_POST as payloadPOST } from '@payloadcms/next/routes'
import config from '@/payload.config'

export const GET = payloadGET(config)
export const POST = payloadPOST(config)
