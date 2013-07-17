/*global module:false*/
module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        files: {
            'dist/ng-mobile-menu.min.js' : ['src/ng-mobile-menu.js'],
            'demo/ng-mobile-menu.min.js' : ['src/ng-mobile-menu.js']
        }
      }
    },
    less: {
      dist: {
          options: {
              compress: true,
              banner: '<%= banner %>'
          },
          files: {
              "dist/ng-mobile-menu.min.css" : "src/ng-mobile-menu.less",
              "demo/ng-mobile-menu.min.css" : "src/ng-mobile-menu.less"
          }
      }
    },
    connect: {
        all: {
            options: {
                port: 9005,
                hostname: "0.0.0.0",
                base: 'demo',
                middleware: function(connect, options){
                    return [
                        require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                        connect.static(options.base),
                        connect.static('dist')
                    ];
                }
            }
        }
    },
    open: {
        all: {
            path: 'http://localhost:<%= connect.all.options.port%>'
        }
    },
    regarde: {
        all: {
            files: [
                'demo/*.html',
                'demo/*.js',
                'src/*.js',
                'src/*.less'
            ],
            tasks: [
                'uglify',
                'less',
                'livereload'
            ]
        }
    }
  });

  // Server task
  grunt.registerTask('server', ['uglify', 'less', 'livereload-start', 'connect', 'open', 'regarde' ]);

  // Default task.
  grunt.registerTask('default', ['uglify', 'less']);

};
