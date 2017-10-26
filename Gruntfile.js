module.exports = function(grunt) {
    grunt.initConfig({

        // responsive_images: {
        //     dev: {
        //         options: {
        //             engine: 'im',
        //             sizes: [{
        //                     width: 100,
        //                     height: 50,
        //                     suffix: '_1x',
        //                     quality: 75
        //                 }, {
        //                     width: 200,
        //                     height: 100,
        //                     suffix: '_2x',
        //                     quality: 75
        //                 },
        //                 {
        //                     width: 140,
        //                     height: 100,
        //                     suffix: 'pizza',
        //                     quality: 75
        //                 }
        //             ]
        //         },

        //         files: [{
        //             expand: true,
        //             src: ['*.{gif,jpg,png}'],
        //             cwd: 'img-copy/',
        //             dest: 'images/'
        //         }]
        //     }
        // },
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

    //grunt.loadNpmTasks('grunt-responsive-images');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-mkdir');
    //grunt.loadNpmTasks('grunt-resize-crop');
    //grunt.loadNpmTasks('imagemagick');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['cssmin', 'htmlmin']);

};