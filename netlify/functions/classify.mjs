// RADIOPAGANDA — persistenza contatori di classificazione.
// Deciso: Netlify Blobs (contro JSON statico, che si perde ad ogni deploy, e
// contro Supabase, per restare nello stack Netlify esistente). Il sito è
// generato staticamente (`nuxt generate`); questa function gira indipendente
// dallo static build, chiamata dal client via fetch('/api/classify').
import { getStore } from '@netlify/blobs'

export default async (req) => {
  // GET: solo lettura, usato dal contatore live nel burger menu — non deve
  // mai incrementare il conteggio, altrimenti aprire il menu falserebbe i dati.
  if (req.method === 'GET') {
    const store = getStore({ name: 'radiopaganda-classifications', consistency: 'strong' })
    const currentGlobal = (await store.get('global', { type: 'json' })) || { count: 0 }
    return Response.json({ total: currentGlobal.count })
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response('Bad Request', { status: 400 })
  }

  const { orderSlug, speciesSlug } = body || {}
  if (!orderSlug || !speciesSlug) {
    return new Response('Bad Request', { status: 400 })
  }

  const store = getStore({ name: 'radiopaganda-classifications', consistency: 'strong' })
  const speciesKey = `species/${orderSlug}--${speciesSlug}`

  const currentSpecies = (await store.get(speciesKey, { type: 'json' })) || { count: 0 }
  const speciesCount = currentSpecies.count + 1
  await store.setJSON(speciesKey, { count: speciesCount })

  const currentGlobal = (await store.get('global', { type: 'json' })) || { count: 0 }
  const ejemplarNumber = currentGlobal.count + 1
  await store.setJSON('global', { count: ejemplarNumber })

  return Response.json({ speciesCount, ejemplarNumber })
}

export const config = {
  path: '/api/classify',
  method: ['GET', 'POST'],
}
