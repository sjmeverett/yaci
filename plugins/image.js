
var docker = require('dockerhash');
var Promise = require('bluebird');


module.exports = function (yaci) {
  var images = [];

  yaci.define('images', function (cfg) {
    images = cfg;
    yaci.emit('images:init', images
  });


  yaci.on('beginning', function () {
    var dockerfiles = images.map(docker.dockerfile);
  });
};
