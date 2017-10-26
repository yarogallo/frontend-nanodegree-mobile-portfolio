module.exports = function(grunt) {
    grunt.initConfig({

        cssmin: {
            options: {},
            target: {
                files: [{
                        expand: true,
                        cwd: 'css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/css/',
                        ext: '.min.css'
                    },
                    {
                        expand: true,
                        cwd: './views/css/',
                        src: ['*.css', '!*.min.css'],
                        dest: 'dist/views/',
                        ext: '.min.css'
                    }
                ]
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            target: {
                files: [{
                    expand: true,
                    src: ['*.html', 'views/pizza.html'],
                    dest: 'dist/',
                    exp: '.min.html'
                }]
            }
        },

        clean: {
            dev: {
                src: ['dist', 'dist/css']
            }

        },

        mkdir: {
            dev: {
                options: {
                    create: ['dist', 'dist/css'],
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['cssmin', 'htmlmin']);

};