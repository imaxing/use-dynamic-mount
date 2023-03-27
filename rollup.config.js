import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: { name: 'useDynamicMount', file: pkg.browser, format: 'umd' },
    plugins: [typescript(), terser()]
  },
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [typescript(), resolve(), commonjs(), terser()]
  }
]
