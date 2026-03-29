'use server'

import { handleServerFunctions } from '@payloadcms/next/layouts'

export const serverFunction = async (args: unknown) => handleServerFunctions(args as any)
