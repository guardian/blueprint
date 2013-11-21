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
        bucket: 'gdn-cdn',
        access: 'public-read',
        gzip: true,
        gzipExclude: ['.jpg', '.jpeg', '.png', 'gif'],
        headers: {
          'Cache-Control': 'max-age=10, public'
        }
      },

      prod: {
        upload: [
          {
            src: 'src/**/*',
            rel: 'src',
            dest: 'next-gen/sport/ng-interactive/2013/nov/20/1/'
          }
        ]
      },

      dev: {
          options: {
              debug: true
          },
          upload: [{
              src: 'src/**/*',
              rel: 'src',
              dest: 'next-gen/sport/ng-interactive/2013/nov/20/1/'
          }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-s3');

  grunt.registerTask('default', ['connect']);
  grunt.registerTask('deploy', ['s3:prod']);
  grunt.registerTask('test-deploy', ['s3:dev']);

};
