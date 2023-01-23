import { type Context } from '@/modules/sdk/context'

export class OddGiantsSDKModule<T extends object = object> {
  #context?: Context
  #current?: Promise<T>
  protected get context(): Context {
    if (!this.#context) {
      throw new Error('Context not yet injected')
    }
    return this.#context
  }
  injectContext(context: Context) {
    this.#context = context
  }

  get current(): Promise<T> | undefined {
    return this.#current?.then((current) => ({ ...current }))
  }

  set current(current: Promise<T> | undefined) {
    this.#current = current?.then((current) => ({ ...current }))
  }
}
