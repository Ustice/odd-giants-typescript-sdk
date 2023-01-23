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

const generatedDir = resolve(projectRoot, 'generated', 'odd-giants-api')
const linkPath = resolve(projectRoot, 'node_modules', '@odd', 'api')
const openApiSpecPath = resolve('/out', 'api.yml')
// const templatesPath = resolve(projectRoot, 'templates', 'typescript')

await $`rm -rf ${generatedDir} && mkdir -p ${generatedDir}/*`
await $`docker run --rm openapitools/openapi-generator-cli version`
await $`
  docker run --rm \\
    -v "${projectRoot}":/in \\
    -v "${generatedDir}":/out \\
    openapitools/openapi-generator-cli generate \\
        -i /in/api.yml \\
        -g typescript-fetch \\
        -o /out \\
        -t /in/templates \\
        --enable-post-process-file \\
        --artifact-id ${tsName} \\
        --global-property apiDocs=true \\
        --global-property apiTests=true \\
        --global-property modelDocs=true \\
        --global-property modelTests=true \\
        --global-property platform=node \\
        --global-property generateAliasAsModel=true \\
        -p ensureUniqueParams=true \\
        -p withInterfaces=true \\
        -p classname=${tsName} \\
        -p framework=fetch-api \\
        -p generateAliasAsModel=true \\
        -p legacyDiscriminatorBehavior=true \\
        -p moduleName=${tsName} \\
        -p npmName="@odd/api" \\
        -p npmVersion=${pkg.version} \\
        -p projectName=${nameSlug} \\
        -p supportsES6=true \\
        -p useObjectParameters=true \\
      ;
`
await $`mkdir -p ${resolve(linkPath, '..')}`
await $`ln -s ${linkPath} ${generatedDir}`
await $`cd ${generatedDir} && npm install`
  .then(() => {
    console.log('✅  Odd Giants SDK generated!')
  })
  .catch((error) => {
    console.log('❌  Failed to generate Odd Giants SDK:', error)
    throw error
  })
