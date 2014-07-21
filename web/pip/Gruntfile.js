module.exports = function(grunt) {
  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 8000,
          base: path.join(__dirname, 'www-root'),
          livereload: true
        }
      }
    },
    watch: {
      code: {
        files: [
          'www-root/elements/**',
          'www-root/scripts/**',
          'www-root/index.html'
        ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('devServer', ['connect', 'watch']);
  grunt.registerTask('default', ['devServer']);
};
