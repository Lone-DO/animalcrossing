module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        buildTimestamp: (new Date()).toISOString().slice(0,10).replace(/-/g,"") + '.' + (new Date()).toISOString().slice(11,16).replace(/:/g,""),
       
        meta: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
        },

        ember_handlebars: {
            compile: {
                options: {
                    processName: function(filePath) {
                        return filePath.replace('src/templates/', '').split('.')[0];
                    }
                },
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'src/templates/',      // Src matches are relative to this path.
                        src: ['**/*.hbs'], // Actual pattern(s) to match.
                        dest: 'src/build/handlebars/',   // Destination path prefix.
                        ext: '.js'   // Dest filepaths will have this extension.
                    }
                ]
            }
        },

        concat: {
            library:{
                src:[
                    'src/libs/<%= grunt.config("lib_jquery") %>',
                    'src/libs/<%= grunt.config("lib_hbs") %>',
                    'src/libs/<%= grunt.config("lib_ember") %>' 
                    ],
                dest:'public/src/scripts/libs.js'
            },
            application: {
                src: [
                    'src/build/handlebars/**/*.js',
                    'src/scripts/app/app.js',
                    'src/scripts/app/components/*.js',
                    'src/scripts/modules/**/*.js'
                ],
                dest:'public/src/scripts/app.js'
            },
			  //Plugin Loader
			  pluginScript: {
                src: [
                    'src/scripts/plugins/**/*.js'
                ],
                dest:'public/src/scripts/plugin.js'
            },
			  pluginCss: {
                src: [
                    'src/scripts/plugins/.css'
                ],
                dest:'public/src/scripts/plugin.js'
            },
            cssOutput: {
                src: [
                    'src/build/css/*.css'
                ],
                dest: 'public/src/stylesheets/styles.css'
            }
        },

        compass: {
            prod: {
                options: {
                    config: 'config.rb'
                }
            }
        },
      
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            'package.json',
                            'Procfile'
                        ],
                        dest: 'public/'
                    },
                    {
                        expand: true,
                        cwd: 'server',
                        src: [
                            'server.js'
                        ],
                        dest: 'public'
                    },
                    {
                        expand: true,
                        cwd: 'server/config',
                        src: ['**'],
                        dest: 'public/config'
                    },
                    {
                        expand: true,
                        cwd: 'server/constants',
                        src: ['**'],
                        dest: 'public/constants'
                    },
                    {
                        expand: true,
                        cwd: 'server/controllers',
                        src: ['**'],
                        dest: 'public/controllers'
                    },
                    {
                        expand: true,
                        cwd: 'server/routes',
                        src: ['**'],
                        dest: 'public/routes'
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**', '!libs/**', '!scripts/**', '!stylesheets/**', '!templates/**'],
                        dest: 'public/src'
                    }
                ]
            }
        },
        clean: {
            removepublic: ["public/"],
            removebuild: ["src/build"],
            removescss: ["src/stylesheets/css", "public/src/stylesheets/*.scss"],
            removehbs: ["src/templates/js", "public/src/templates/html"],
            removebuildfiles: ['public/*', '!public/*.zip']
        },

        replace: {
            common: {
                options: {
                    variables: {
                        'buildTimestamp' : '<%= buildTimestamp %>'
                    },
                    prefix: '@@'
                },
                files : {
                    'public/constants/index.js' : [ 'public/constants/index.js' ]
                }
            },
            dev: {
                options: {
                    variables: {
                        'activeConfig': 'dev'
                    },
                    prefix: '@@'
                },
                files : {
                    'public/config/index.js' : [ 'public/config/index.js' ]
                }
            },
            prod: {
                options: {
                    variables: {
                        'activeConfig': 'prod'
                    },
                    prefix: '@@'
                },
                files : {
                    'public/config/index.js' : [ 'public/config/index.js' ]
                }
            }
        },

        jslint: { 
          server: {
            src: [ // some example files
              'server/server.js',
              'server/constants/index.js',
              'server/config/index.js',
              'server/controllers/**/*.js',
              'server/routes/**/*.js'
            ],
            exclude: [
            ],
            directives: { // example directives
              node: true,
              todo: true,
              white: true,  //do not care about whitespace
              sloppy: true, //do not require 'use strict'
              nomen: true //do not care about leading/trailing _
            },
            options: {
              junit: 'lint/server-junit.xml', 
              jslintXml: 'lint/server-jslint.xml',
              failOnError: false, 
              checkstyle: 'lint/server-checkstyle.xml' 
            }
          },
          // lint your project's client code
          client: {
            src: [
              'src/scripts/app/app.js',
              'src/scripts/app/**/*.js',
              'src/scripts/modules/**/*.js'
            ],
            directives: {
              browser: true,
              predef: [
                'jQuery',
                'Ember',
                'Em',
                'Handlebars',
                'App',
                'console'
              ],
              white: true,  //do not care about whitespace
              sloppy: true, //do not require 'use strict'
              nomen: true //do not care about leading/trailing _
            },
            options: {
              junit: 'lint/client-junit.xml',
              jslintXml: 'lint/client-jslint.xml',
              failOnError: false,
              checkstyle: 'lint/client-checkstyle.xml' 
            }
          }
			  
        },

        uglify: {
            options: {
              mangle: {
                except: ['jQuery', 'Ember', 'Handlebars']
              },
              compress: {
                drop_console: true
              }
            },
            prod_src: {
              files: {
                'public/src/scripts/app.js': ['public/src/scripts/app.js']
              }
            }
        },

        shell: {
            runNodeServer: {
                command: 'node server.js',
                options: {                      // Options
                    stdout: true,
                    execOptions: {
                        'cwd': 'public'
                    }
                },
            }
        },

        imagemin: {
            public: {
                options: { optimizationLevel: 4 },
                files: [{
                    expand: true,
                    cwd: 'public/src/assets/img',
                    src: [
                        '*.{png,jpg}'
                    ],
                    dest: 'public/src/assets/img'
                }]
            }
        },

        htmlmin: {
            public: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/src/index.html': 'public/src/index.html'
                }
            }
        },

        karma: {
            frontend_unit: {
              configFile: 'fe.karma.conf.js'
            }
        },

        zip: {
            'public/<%= pkg.name %>.zip': ['public/**']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('set_conf', 'Set a config property.', function(name, val) {
        console.log('Setting ' + name + ' to ' + val);
        grunt.config.set(name, val);
    });

    grunt.registerTask('common', [
        'clean:removepublic',
        'copy:build',
        'ember_handlebars',
        'concat',
        'compass',
        'concat:cssOutput',
        'replace:common',
        'jslint',
        // 'clean:removescss',
        // 'clean:removehbs'
    ]);

    grunt.registerTask('default', [
        'set_conf:lib_ember:ember-1.7.js',
        'set_conf:lib_jquery:jquery-2.1.1.js',
        'set_conf:lib_hbs:handlebars-v1.3.0.js',
        'common',
        'replace:dev',
        'shell:runNodeServer'
    ]);

    grunt.registerTask('prod', [
        'set_conf:lib_ember:ember-1.7.min.js',
        'set_conf:lib_jquery:jquery-2.1.1.min.js',
        'set_conf:lib_hbs:handlebars.runtime-v1.3.0.js',
        'common',
        'replace:prod',
        'uglify',
        'imagemin',
        'htmlmin',
        'karma'
    ]);

    grunt.registerTask('package', [
        'prod',
        'zip',
        'clean:removebuildfiles'
    ]);
};