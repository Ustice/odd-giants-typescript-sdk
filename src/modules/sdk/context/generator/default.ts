import { createContextGenerator } from '@/modules/sdk/context/generator/function'
import * as dependencies from '@/modules/sdk/context/generator/dependencies'
export const generateContext = createContextGenerator(dependencies)
