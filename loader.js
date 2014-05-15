require('espower-loader')({
  // directory where match starts with
  cwd: process.cwd(),
  // glob pattern using minimatch module
  pattern: 'test.js'
});

var PrettyError = require('pretty-error');
var pe = new PrettyError();

pe.skip(function(traceLine, lineNumber) {
  var what = traceLine.what;

  if(what === 'it' || what === 'Object.<anonymous>' || traceLine.addr === 'native') {
    return true;
  }
});

pe.alias(__dirname, '[examples]');
pe.skipPackage('mocha', 'espower-loader', 'power-assert');
pe.skipNodeFiles();
pe.start();

require('stack-displayname');
