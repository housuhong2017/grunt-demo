module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      html: {
        options: {
          configFile:'conf/exlint.json'
                      
        },
          target: ['rectangle.js']
          
      }
                
    }
                
  });

    grunt.loadNpmTasks('grunt-eslint');

      grunt.registerTask('default', ['eslint']);

};

