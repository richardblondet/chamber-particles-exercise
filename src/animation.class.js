// @ts-check

const Chamber = require('./chamber.class');
const Frame = require('./frame.class');
const { EMPTY_POSITION } = require("../lib/constants");

class Animation {
  chamber;
  speed;
  result = [];
  timeInterval = 28;
  snapshots = [];

  /**
   * Animate
   * 
   * This method is given an Int speed and a String init giving the initial 
   * conditions. The speed is the number of positions each particle moves in one time unit.
   * 
   * @param {Number} speed
   * @param {String} init
   * 
   * @returns {Array}
   */
  animate(speed = 1, init) {
    // Check the chamber
    this.chamber = new Chamber(speed, init);
    
    // Simply return [init] if no particles exists in provided chamber
    if (this.chamber.isEmpty || !this.chamber.get()) {
      return [".".repeat(init.length)];
    }

    // Get existing particles in chamber
    const particles = this.chamber.getParticles();
    
    // Take a snapshot of the current particles position
    let snapshot = this.takeSnapshot(particles);

    while (!/^[.]{1,}$/g.test(snapshot)) {
      
      // Make particles travel
      particles.forEach((particle) => {
        particle.travel( this.chamber.length - 1 );
      });
      
      // Keep watching particles until condition is met
      snapshot = this.takeSnapshot(particles);
    }

    // Return expected result
    return this.getFrames();
  }

  /**
   * Take a snap and save it in a frame
   *  
   * @param {Array} particles
   * 
   * @returns {String}
   */
  takeSnapshot(particles) {
    // create a frame with the id of the length
    let frame = new Frame(this.snapshots.length);
    frame.content = {...this.chamber.toArray()};
    
    // observe positions of particles and save positions in frame content
    [...this.chamber.toArray()].forEach((element, position) => {
      let particlesPassingThrough = particles.filter(particles => particles.pos === position);
      if (particlesPassingThrough.length > 0) {
        frame.content[position] = particlesPassingThrough.map(p => p.type);
      } else {
        frame.content[position] = EMPTY_POSITION;
      }
    });

    // Save snapshot in collection
    this.snapshots.push(frame);
    
    // return frame string
    return frame.string;
  }

  /**
   * get the snapshots taken formatted
   * @returns {Array}
   */
  getFrames() {
    return this.snapshots.map(frame => frame.string);
  }
}

module.exports = Animation;