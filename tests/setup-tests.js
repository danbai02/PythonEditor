// Hook for pre-test initialization.
// See https://jestjs.io/docs/en/configuration.html#setupfiles-array

// Import ACE
process.chdir('..')
require('../ace/ace.js');
global.ace.edit = window.ace.edit;
global.ace.require = window.ace.require;

//window.ace.config.set('basePath', '~/workspace/microbit-foundation/python-editor/PythonEditor-upstream/');
//window.ace.config.set('modePath', '~/workspace/microbit-foundation/python-editor/PythonEditor-upstream/ace/');
//window.ace.config.set('themePath', '~/workspace/microbit-foundation/python-editor/PythonEditor-upstream/ace/');
require('../ace/ext-language_tools.js');

// Import the rest of the static libraries
global.$ = global.jQuery = require('../static/js/jquery-2.1.4.min.js');
global.MemoryMap = require('../static/js/intel-hex.browser.js');
// Had issues running the forge version included in the editor repo
global.forge = require('node-forge');

// Import our source code under test
require('../hexlify.js');
global.upyhex = window.upyhex;
require('../python-main.js');
