module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coveralls: {
                src: ['test/unit', 'test/route'], // the folder, not the files
                options: {
                    check: {
                        lines: 75,
                        statements: 75
                    },
                    root: '.', // define where the cover task should consider the root of libraries that are covered by tests
                    reportFormats: ['html'],
                    coverageFolder: 'coverage'
                }
            }
        },

         jshint: {
            target: ['public/javascripts/**/*.js', 'routes/**/*.js', 'test/**/*.js'],
          },

        clean: ["coverage"],

        watch: {
          //only routes for the moment
          //only watch unit and route tests for server app coverage
          files: ['routes/**/*.js', 'test/unit/**/*.js', 'test/route/**/*.js'],
          tasks: ['clean', 'mocha_istanbul:coveralls'/*, 'jshint'*/]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('coveralls', ['mocha_istanbul:coveralls']);
    grunt.registerTask('default', ['watch']);
};
