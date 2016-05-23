'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            assets: {
                files: [
                    {
                        expand: true,
                        dest: 'dist/',
                        cwd: 'src',
                        src: ['assets/**']
                    },
                    {
                        expand: true,
                        dest: 'dist/assets/fonts/font-awesome',
                        cwd: 'node_modules/font-awesome/fonts',
                        filter: 'isFile',
                        src: ['*']
                    }
                ]
            },
            stylesheets: {
                files: [
                    {
                        expand: true,
                        dest: 'dist/',
                        cwd: 'src',
                        src: ['scss/**']
                    }
                ]
            }
        },
        clean: {
            dist: ['dist']
        },
        sass: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'dist/css/pefstrap.css': 'src/scss/*.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 2 version', 'ie >= 9']})
                ]
            },
            dist: {
                src: 'dist/css/pefstrap.css'
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    'dist/css/pefstrap.min.css' : ['dist/css/pefstrap.css']
                }]
            }
        },
        sasslint: {
            options: {
                configFile: '.sass-lint.yml',
                formatter: 'table'
            },
            target: [
                'src/scss/**/*.scss',
                '!src/scss/patterns/molecules/_loader.scss',
                '!src/scss/patterns/organisms/_footer.scss'
            ]
        },
        githooks: {
            all: {
                'pre-commit': 'warning'
            }
        }
    });

    // Load NPM tasks
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('warning', function() {
        require('./grunt-commit-warning.js')(grunt);
    });
    grunt.registerTask('build-css', ['sass:dist', 'postcss:dist', 'cssmin:dist']);
    grunt.registerTask('check', ['sasslint']);
    grunt.registerTask('build', ['githooks', 'check', 'clean:dist', 'copy:assets', 'copy:stylesheets', 'build-css']);

    grunt.registerTask('default', ['build']);
};
