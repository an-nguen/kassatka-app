import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";

export default [
  {
    input: './src/index.ts',
    plugins: [esbuild()],
    output: [
      { file: 'dist/core.js', format: 'cjs' },
      { file: 'dist/core.mjs', format: 'es' },
    ],
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: { file: 'dist/core.d.ts', format: 'es' },
  },
]
