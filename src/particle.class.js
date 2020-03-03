// @ts-check

const { RIGHT_PARTICLE, LEFT_PARTICLE } = require('../lib/constants');

class Particle {
  speed;
  type;
  previousPosition;
  currentPosition;
  
  /**
   * Initialize particles
   * @param {Number} speed
   * @param {Number} position 
   * @param {String} type 
   */
  constructor(speed = 1, position, type) {
    this.speed = speed;
    this.previousPosition = this.currentPosition = position;
    this.type = type;
  }

  /**
   * Get current position
   * @returns {Number}
   */
  get pos() {
    return this.currentPosition;
  }

  /**
   * Travel is the particle action
   * @returns {Boolean}
   */
  travel() {
    // grab the previous position
    this.previousPosition = this.currentPosition;

    // depending on the type, move at your speed little particle
    switch (this.type) {
      case LEFT_PARTICLE:
        this.currentPosition = this.currentPosition - this.speed;
        break;
        case RIGHT_PARTICLE:
          this.currentPosition = this.currentPosition + this.speed;
          break;
    }
    return true;
  }

}

module.exports = Particle;