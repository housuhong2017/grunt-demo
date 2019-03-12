module.exports=function(grunt){
  grunt.initConfig({

    cssmin: {
      options: {
            mergeIntoShorthands: false,
      roundingPrecision: -1
      
      },
  target: {
    files: {
            'output.css': ['foo.css', 'bar.css']
        
    }
             
  }

    }
  })

}

grunt.loadNpmTasks('grunt-contrib-cssmin');
