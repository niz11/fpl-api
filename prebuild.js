const fs = require('fs')
const path = require('path')

const nodeFetch = `import fetch, { RequestInfo, RequestInit } from 'node-fetch'`
const api = fs.readFileSync(path.resolve(__dirname, 'src/index.ts'), 'utf8')

fs.writeFileSync(
  path.resolve(__dirname, 'src/node/index.ts'),
  `${nodeFetch}\n\n${api}`,
)
