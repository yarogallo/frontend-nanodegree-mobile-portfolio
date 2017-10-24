/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {
    const mozjpeg = require('imagemin-mozjpeg');
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
                        }

                    ]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img/',
                    dest: 'images/'
                }]
            }
        },

        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()] // Example plugin usage
                },
                files: {
                    'dist/img.png': 'src/img.png',
                    'dist/img.jpg': 'src/img.jpg',
                    'dist/img.gif': 'src/img.gif'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        }

        // resize_crop: {
        //     images_group: {
        //         options: {
        //             format: 'jpg',
        //             gravity: 'center',
        //             suffix: '_small',
        //             width: 300
        //         },
        //         src: 'images_src/*',
        //         dest: 'images_small/'
        //     },
        //     another_images: {
        //         options: {
        //             format: 'jpg',
        //             gravity: 'center',
        //             suffix: '_med',
        //             width: 500
        //         },
        //         src: 'images_src/*',
        //         dest: 'images_med/'
        //     }

        // },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images']
            }

        },

        /* Generate the images directory if it is missing */
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'imagemin']);

};