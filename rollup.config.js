import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-seesaw',
                exports: 'auto'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
                exports: 'auto'
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
                babelHelpers: 'bundled'
            }),
            external({
                includeDependencies: true
            }),
            resolve(),
            commonjs(),
            postcss(),
            terser()
        ],
    },
]
