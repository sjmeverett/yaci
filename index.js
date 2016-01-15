
var fs = require('fs');
var path = require('path');
var util = require('util');
var YamlRunner = require('yaml-runner');


function Yaci(config, allowedKeys, cwd) {
  YamlRunner.call(this, config, allowedKeys, cwd);

  var pluginsPath = path.join(__dirname, 'plugins');

  var plugins = fs
    .readdirSync(pluginsPath)
    .map(function (p) { return path.join(pluginsPath, p); });

  [].push.apply(this.config.plugins, plugins);
}

util.inherits(Yaci, YamlRunner);

module.exports = Yaci;
