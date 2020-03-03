// @ts-check

const Particle = require('./particle.class');
const { RIGHT_PARTICLE, LEFT_PARTICLE } = require('../lib/constants');

class Chamber {
  state = '';
  _isEmpty = true;
  particles = [];
  
  /**
   * Initializer takes the chamber init
   * @param {String} chamberState
   */
  constructor(particlesSpeed, chamberState) {
    this.state = chamberState;
    this.setParticles(particlesSpeed);
  }

  /**
   * @returns {String}
   */
  get() {
    return this.state;
  }
  
  /**
   * Sets the state
   * @param {String} state 
   */
  set(state) {
    this.state = state;
  }

  /**
   * Custom length
   * @returns {Number}
   */
  get length() {
    return this.state.length;
  }

  /**
   * Check if the chamber has R or L particles
   * 
   * @returns {Boolean}
   */
  get isEmpty() {
    this._isEmpty = /^[.]{1,}$/g.test( this.state );
    return !!this._isEmpty;
  }

  /**
   * Custom method
   * @returns {Array}
   */
  toArray() {
    return this.state.split('');
  }

  /**
   * 
   * @param {*} speed 
   */
  setParticles(speed) {
    this.toArray().forEach((element, index ) => {
      if (RIGHT_PARTICLE === element || LEFT_PARTICLE === element) {
        this.particles.push(new Particle(speed, index, element));
      }
    });
    return this;
  }

  /**
   * Get particles
   * Optional param to return by type
   * 
   * @param {Boolean | String} byTpe 
   * 
   * @returns {Array}
   */
  getParticles(byTpe = false) {
    return byTpe ? this.particles.filter(particle => particle.type === byTpe) : this.particles;
  }

}

module.exports = Chamber;