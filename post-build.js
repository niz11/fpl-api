const { resolve } = require('path')
const { readFileSync, writeFileSync } = require('fs')
const typesPath = resolve(__dirname, 'src/types.d.ts')
const types = readFileSync(typesPath, 'utf8')

;[
  resolve(__dirname, 'node/index.d.ts'),
  resolve(__dirname, 'browser/index.d.ts'),
].forEach(path =>
  writeFileSync(
    path,
    readFileSync(path, 'utf8').replace(/import.*'..\/types';/, types),
  ),
)
