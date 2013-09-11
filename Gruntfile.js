module.exports = function(grunt){
	var timestamp = grunt.template.today("yyyymmddhMMss");
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
			},
			build: {
				src: ['lib/*.js', '*.js'],
				dest: 'publish/mod.min.js'
			}
		},
		cssmin: {
			combine: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today() %> */\n'
				},
				files: {
					'publish/style.min.css': ['style.css']
				}
			}
		},
		jshint: {
			files: '*.js',
			options: {
            	ignores: ['Gruntfile.js'],
				// Define globals exposed by modern browsers.
				"browser": true,
				"devel": true,
				// Define globals exposed by jQuery.
				"jquery": true,
				// Define globals exposed by Node.js.
				"node": true,
				// Force all variable names to use either camelCase style or UPPER_CASE
				// with underscores.
				"camelcase": false,
				// Prohibit use of == and != in favor of === and !==.
				"eqeqeq": false,
				// Suppress warnings about == null comparisons.
				"eqnull": true,
				// Prohibit use of a variable before it is defined.
				"latedef": true,
				// Require capitalized names for constructor functions.
				"newcap": true,
				// Enforce use of single quotation marks for strings.
				"quotmark": "single",
				// Prohibit trailing whitespace.
				"trailing": true,
				// Prohibit use of explicitly undeclared variables.
				"undef": true,
				// Warn when variables are defined but never used.
				"unused": false,
				"force": true
			}
		},
		targethtml: {
			dist: {
				options: {
					curlyTags: {
						rlsdate: timestamp
					}
				},
				files: {
					'publish/index.html': 'index.html'
				}
			},
			test: {
				files: {
					'test/test.html': 'index.html'
				}
			}
		},
		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					cwd: 'img/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'publish/img/'
				}]
			}
		},
		htmlmin: { //one day this will support minifying <script type="text/html"> templates.
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'publish/index.html': 'index.html', //but this is not that day.
				}
			}
		},
		clean: {
			build: {
				src: ["publish.zip"]
			}
		},
		compress: {
			main: {
				options: {
					archive: 'publish.zip'
				},
				files: [
					{expand: true, cwd: 'publish', src: ['**'], dest: '/'}, // includes files in path and its subdirs
				]
			}
		},
		qunit: {
			all: ['test/test.html']
		},
		watch: {
			files: ['libs/*.js', '*.js', 'test/tests.js', '*.css', 'index.html'],
			tasks: ['jshint', 'targethtml:test', 'qunit', 'cssmin:combine', 'uglify:build', 'targethtml:dist', 'htmlmin:dist', 'imagemin:dynamic', 'clean:build', 'compress:main']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-manifest');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['watch']);
};
