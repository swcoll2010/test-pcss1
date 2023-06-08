const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const postcssimport = require('postcss-import');

module.exports = (ctx) => ({
    map: ctx.options.map,
    plugins: [
        postcssimport({
            root: ctx.file.dirname
        }),
        postcssPresetEnv({
            stage: 1,
            browsers: 'last 2 versions, not dead, > 0.2%',
            debug: false,
        }),
        cssnano({
            preset: 'default',
        }),
    ]
})
