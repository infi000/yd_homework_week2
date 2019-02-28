const gulp = require('gulp');
const babel = require("gulp-babel");
const watch = require("gulp-watch");
const rollup = require("gulp-rollup");
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');

const entry = "./src/server/**/*.js"
//env dev

function builddev() {
    return watch(entry, {
        ignoreInitial: false
    }, function () {
        gulp.src(entry)
            .pipe(babel({
                babelrc: false, //将.babelrc配置文件绕过，用当下的配置
                "plugins": [
                    ["transform-es2015-modules-commonjs"]
                ]

            }))
            .pipe(gulp.dest('dist'))
    })

}

//env prod
function buildprod() {
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false, //将.babelrc配置文件绕过，用当下的配置
            ignore: ["./src/server/config/*.js"],
            plugins: [
                ["transform-es2015-modules-commonjs"]
            ]

        }))
        .pipe(gulp.dest('dist'))

}

//env 清洗
function buildconfig() {
    return gulp.src(entry)
        // transform the files here.
        .pipe(rollup({
            // any option supported by Rollup can be set here.
            output: {
                format: "cjs"
            },
            input: './src/server/config/index.js',
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('dist'));
}

//对代码进行检查的环境
function buildlint() {
    return gulp.src(entry)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}


//serires序列化任务 
let build = gulp.series(builddev);
if (process.env.NODE_ENV == "production") {
    build = gulp.series(buildprod, buildconfig)
}

if (process.env.NODE_ENV == "lint") {
    build = gulp.series(buildlint, )
}

gulp.task("default", build)


// ceshi  vscode功能