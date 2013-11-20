module.exports = function(grunt) {

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'src',
          keepalive: true,
          hostname: '*'
        }
      }
    },

    s3: {
      options: {
        debug: true,
        bucket: 'gdn-stage',
        access: 'public-read',
        gzip: true,
        gzipExclude: ['.jpg', '.jpeg', '.png', 'gif'],
        headers: {
          'Cache-Control': 'max-age=10, public'
        }
      },
      src: {
        upload: [
          {
            src: 'src/**/*',
            rel: 'src',
            dest: 'test/'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-s3');

  grunt.registerTask('default', ['connect']);
  grunt.registerTask('deploy', ['s3']);
};