module.exports = function(grunt) {
    grunt.initConfig({

        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                            width: 100,
                            height: 50,
                            suffix: '_1x',
                            quality: 75
                        }, {
                            width: 200,
                            height: 100,
                            suffix: '_2x',
                            quality: 75
                        },
                        {
                            width: 140,
                            height: 100,
                            suffix: 'pizza',
                            quality: 75
                        }
                    ]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img-copy/',
                    dest: 'images/'
                }]
            }
        },

        clean: {
            dev: {
                src: ['images']
            }

        },

        mkdir: {
            dev: {
                options: {
                    create: ['images'],
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    //grunt.loadNpmTasks('grunt-resize-crop');
    grunt.loadNpmTasks('imagemagick');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};