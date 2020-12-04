import type { ServerPlugin } from 'vite'
import { VitePWAOptions } from './types'

export const createServerPlugin = (options: VitePWAOptions): ServerPlugin => {
  return ({ app }) => {
    app.use(async(ctx, next) => {
      if (
        ctx.path === '/manifest.webmanifest'
      ) {
        ctx.body = options.manifest
        ctx.type = 'json'
        ctx.status = 200
        return
      }

      await next()
    })
  }
}
