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
                        dest: 'css/',
                        ext: '.min.css'
                    },
                    {
                        expand: true,
                        cwd: './views/css/',
                        src: ['*.css', '!*.min.css'],
                        dest: './views/css/',
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
                    cwd: './',
                    src: ['*.html'],
                    dest: './',
                    exp: '.min.html'
                }, {
                    expand: true,
                    cwd: './views/',
                    src: ['*.html'],
                    dest: './views',
                    exp: '.min.html'
                }]
            }
        }

        // clean: {
        //     dev: {
        //         src: ['images']
        //     }

        // },

        // mkdir: {
        //     dev: {
        //         options: {
        //             create: ['images'],
        //         }
        //     }
        // },
    });

    //grunt.loadNpmTasks('grunt-responsive-images');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-mkdir');
    //grunt.loadNpmTasks('grunt-resize-crop');
    //grunt.loadNpmTasks('imagemagick');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['cssmin', ]);

};