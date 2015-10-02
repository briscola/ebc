module.exports = function(grunt) {
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	browserify: {
	    control: {
		src: ['src/ebc.js'],
		dest: 'dist/ebc.js'
	    }
	},
        uglify: {
	    options: {
		banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		    '<%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
	    },
	    build: {
		src: 'dist/ebc.js',
		dest: 'dist/ebc.min.js'
	    }
	},
	release: {
	    email: 'info@sonrisa.co.jp',
	    name: 'Risa Co., Ltd.',
	    tasks: ['default']
	},
	'gh-pages': {
	    options: {
		base: '.'
	    },
	    src: ['**/*','**/.*']
	}
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.registerTask('default', ['browserify', 'uglify']);
};
