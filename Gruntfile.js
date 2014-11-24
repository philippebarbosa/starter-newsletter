module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


        // Clean build folder, remove previous generated files
        clean: {
          build: [
            'build/*',
          ],
          html: [
            'build/index.html',
          ]
        },

        // Inline html
        emailBuilder: {
          build :{
            files : {
              'build/index.html' : 'index.html'
            }
          }
        },

        image: {
          build: {
            options: {
              pngquant: true,
              optipng: true,
              advpng: true,
              zopflipng: true,
              pngcrush: true,
              pngout: true,
              mozjpeg: true,
              jpegRecompress: true,
              jpegoptim: true,
              gifsicle: true,
            },
            files: [{
              expand: true,
              // cwd: 'src/',
              src: ['images/*.{png,jpg,gif}'],
              dest: 'build/'
            }]
          }
        }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-email-builder');
  grunt.loadNpmTasks('grunt-image');

  // Default task(s).
  grunt.registerTask('default', ['clean:build', 'emailBuilder:build', 'image:build']);
  // If you only change html, do that :
  grunt.registerTask('html', ['clean:html', 'emailBuilder:build']);

};