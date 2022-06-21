import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

export default {
    input: "lib/index.ts",
    output: {
        file: "public/build/bundle.js",
        format: "cjs"
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
            preventAssignment: true,
        }),
        nodeResolve(),
        commonjs(),
        typescript(),
    ]
};
