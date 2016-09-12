module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-react-templates');

	grunt.initConfig({
		reactTemplates: {
			dist: {
				src: ['**/*.rt'], //glob patterns of files to be processed
				options: {
					modules: 'none',  //possible values: (amd|commonjs|es6|typescript|none)
					format: 'stylish' //possible values: (stylish|json)
				}
			}
		}
	});

  grunt.registerTask('default', ['react-templates']);
};
