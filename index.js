// @ts-check

const Jasmine = require('jasmine');
const Animation = require('./src/animation.class');

const jasmine = new Jasmine({});
jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();

jasmine.onComplete(function(passed) {
  if(passed) {
    const animation = new Animation();
    const test = animation.animate(1,  "LRRL.LR.LRR.R.LRRL.");
    console.log(test);
  }
  else {
    console.log('At least one spec has failed');
  }
});
