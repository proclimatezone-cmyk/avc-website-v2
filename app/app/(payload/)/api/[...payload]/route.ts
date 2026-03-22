import { GET as payloadGET, POST as payloadPOST } from '@payloadcms/next/routes'
import { config } from '../../../payload.config'

export const GET = (req: Request) => payloadGET(req, { config })
export const POST = (req: Request) => payloadPOST(req, { config })
