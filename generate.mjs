#!/usr/bin/env zx

// Developer note: This script is run with zx. Because this generates the SDK,
// before dependencies can be installed, it can not use any dependencies.
import { resolve } from 'node:path'

import pkg from './package.json' assert { type: 'json' }

const nameSlug = 'odd-giants'
const tsName = nameSlug
  .split('-')
  .map(([cap, ...rest]) => [cap.toUpperCase(), ...rest].join(''))
  .join('')

const projectRoot = resolve(__dirname)

const linkPath = resolve(projectRoot, 'node_modules', '@odd/api')
// const generatedDir = resolve(projectRoot, 'generated', 'odd-giants-api')
const generatedDir = linkPath
const openApiSpecPath = resolve('/out', 'api.yml')
// const templatesPath = resolve(projectRoot, 'templates', 'typescript')

await $`rm -rf ${generatedDir} && mkdir -p ${generatedDir}`
await $`docker run --rm openapitools/openapi-generator-cli version`
await $`
  docker run --rm \\
    -v ${projectRoot}:/in \\
    -v ${generatedDir}:/out \\
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
const [generated] = await Promise.allSettled([
  $`cd ${generatedDir} && npm install`,
])

if (generated.status === 'rejected') {
  console.log('❌  Failed to generate Odd Giants SDK:', generated.reason)
  throw generated.reason
}

console.log('✅  Odd Giants SDK generated!')

// await $`mkdir -p ${resolve(linkPath, '..')}`
// await $`ln -s ${generatedDir} ${linkPath}`
