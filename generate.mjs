#!/usr/bin/env zx

import { resolve } from 'path'
import { $ } from 'zx'

import pkg from './package.json' assert { type: 'json' }

const nameSlug = 'odd-giants'
const tsName = nameSlug
  .split('-')
  .map(([cap, ...rest]) => [cap.toUpperCase(), ...rest].join(''))
  .join('')

const projectRoot = resolve(__dirname)

const generatedDir = resolve(projectRoot, 'client')
const openApiSpecPath = resolve('/out', 'api.yml')
// const templatesPath = resolve(projectRoot, 'templates', 'typescript')

await $`mkdir -p ${generatedDir} && rm -rf ${generatedDir}/*`
await $`
  docker run --rm -v "${ projectRoot }":/out \\
    openapitools/openapi-generator-cli generate \\
        -i /out/api.yml \\
        -g typescript \\
        -o /out/src/client \\
        -t /out/templates \\
        --artifact-id ${ tsName } \\
        --global-property apiDocs=true \\
        --global-property modelDocs=true \\
        --global-property apiTests=true \\
        --global-property modelTests=true \\
        --global-property platform=node \\
        -p generateAliasAsModel=true \\
        -p projectName=${ nameSlug } \\
        -p moduleName=${ tsName } \\
        -p classname=${ tsName } \\
        -p framework=fetch-api \\
        -p supportsES6=true \\
        -p useObjectParameters=true \\
        -p npmName=odd-giants-sdk \\
        -p npmVersion=${ pkg.version } \\
        -p legacyDiscriminatorBehavior=true \\
      ;
`
  .then(() => { console.log('✅  Odd Giants SDK generated!') })
  .catch((error) => { console.log('❌  Failed to generate Odd Giants SDK:', error); throw error })

