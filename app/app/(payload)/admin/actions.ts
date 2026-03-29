'use server'

import { getPayload } from 'payload'
import config from '../../../payload.config'
import { revalidatePath } from 'next/cache'

export async function createService(formData: FormData) {
  const payload = await getPayload({ config })
  
  const title = formData.get('title') as string
  const num = formData.get('num') as string
  const desc = formData.get('desc') as string
  const img = formData.get('img') as string

  const data: any = {
    title,
    num,
    desc,
  }

  if (img) {
    data.img = img
  }

  await payload.create({
    collection: 'services',
    data,
  })

  revalidatePath('/admin')
}

export async function deleteService(id: string) {
  const payload = await getPayload({ config })
  await payload.delete({
    collection: 'services',
    id,
  })
  revalidatePath('/admin')
}
