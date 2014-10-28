'use strict';


module.exports = function uglify(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Options
    return {
        build: {
            files: [{
                expand: true,
                cwd: '.build',
                src: ['js/**/*.js'],
                dest: '.build'
            }]
        }
    };
};