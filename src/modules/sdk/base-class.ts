// TODO: Turn this into a module, and separate dependencies from the base class

import {
  type OddGiantsSDKModuleInstances,
  OddGiantsSDKModule,
  OddGiantsSDKModuleConstructors,
} from '@/modules/sdk/module'
import * as Dependencies from '@/modules/sdk/dependencies'

type ModuleGetters = {
  readonly [K in keyof OddGiantsSDKModuleInstances]: OddGiantsSDKModuleInstances[K]
}

export interface OddGiantsSDK extends ModuleGetters {
  new (): void
}

export class OddGiantsSDK extends Dependencies.OddGiantsSDKModule {
  #modules: Partial<OddGiantsSDKModuleInstances> = {}

  constructor({ OddGiantsSDKModuleConstructors }: typeof Dependencies) {
    super()

    // Add getters dynamically.
    Object.keys(OddGiantsSDKModuleConstructors).forEach((name) => {
      Object.defineProperty(this, name, {
        get: () =>
          this.getModule(name as keyof typeof OddGiantsSDKModuleConstructors),
      })
    })
  }

  private getModule<
    ModuleName extends keyof typeof OddGiantsSDKModuleConstructors = keyof typeof OddGiantsSDKModuleConstructors,
    Module extends OddGiantsSDKModuleInstances[ModuleName] = OddGiantsSDKModuleInstances[ModuleName],
  >(name: ModuleName): OddGiantsSDKModuleInstances[ModuleName] {
    if (this.#modules[name]) {
      return this.#modules[name] as Module
    }

    this.#modules[name] = new this.context.moduleConstructors[name]() as Module
    ;(this.#modules[name] as OddGiantsSDKModule).injectContext(this.context)

    return this.#modules[name] as Module
  }

  public search(searchText: string) {
    return this.context.api.search({ q: searchText })
  }
}
