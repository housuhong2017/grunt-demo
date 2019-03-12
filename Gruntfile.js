module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {                                
        removeComments: true,
              collapseWhitespace: true
            },
        files: {                                   
              
                'dist/contact.html': 'src/contact.html'
              }
      },
      dev: {                                       
        files: {
                  'dist/index.html': 'src/index.html',
          'dist/contact.html': 'src/contact.html'
          
        }
          }
        files: {                                   
          });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

      grunt.registerTask('default', ['htmlmin']);

};

