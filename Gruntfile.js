module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ['app/public/content/dist/css']
                },
                files: {
                    'app/public/content/dist/css/main.css': 'app/public/content/src/less/main.less'
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'watch']);

};