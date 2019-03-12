module.exports = function(grunt) {
  grunt.initConfig({
    sprite: {
      all: {
                src: './images/*.png',
                dest: '.images/all.png',
                destCss: 'destination/of/sprites.css'
                                                                  
      }   
      }  

                
  });

      grunt.loadNpmTasks('grunt-spritesmith');

            grunt.registerTask('default', ['spritesmith']);


};
