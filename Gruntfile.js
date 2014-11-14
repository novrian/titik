module.exports = function(grunt) {
  "use strict";

  // Init Grunt Tasks
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js'
      ]
    },
    symlink: {
      options: {
        overwrite: true
      },
      link: {
        expand: true,
        files: [
          { src: ".editorconfig", dest: "../.editorconfig" },
          { src: ".gitignore", dest: "../.gitignore" },
          { src: ".gitconfig", dest: "../.gitconfig" }
        ]
      }
    }
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-symlink');

  // Register Tasks
  grunt.registerTask('default', [ 'jshint', 'symlink' ]);
  grunt.registerTask('build', [ 'jshint', 'symlink' ]);
};
