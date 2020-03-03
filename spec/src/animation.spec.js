describe("Animation", function() {
  var Animation = require('../../src/animation.class');
  var animation;
  var animated;
  
  beforeEach(function() {
    animation = new Animation();
    animated = animation.animate(3, 'RR..LRL');
  });

  describe('when animate', function() {
    var particle;
    beforeEach(function() {
      particle = animation.chamber.getParticles().shift();
    });
    it('should return an array', function() {
      expect(animated).toBeInstanceOf(Array);
    });
  
    it('should expect chamber to be a string', function() {
      expect(typeof animation.chamber.get()).toEqual('string');
    });
  
    it('should expect chamber to be a string of length equal or greater than 1', function() {
      expect(animation.chamber.length).toBeGreaterThanOrEqual(1);
    });
    
    it('should expect chamber to be a string of length equal or less than 50', function() {
      expect(animation.chamber.length).toBeLessThanOrEqual(50);
    });
  
    it('should expect chamber to contain the characters "R", "L" and/or "." only', function() {
      expect(/^[RL.]{1,}$/g.test(animation.chamber.get())).toBe(true);
    });
  
    it('should expect particles speed to be a number', function() {
      expect(typeof particle.speed).toEqual('number');
    });
  
    it('should expect speed to be equal or greater than 1', function() {
      expect(particle.speed).toBeGreaterThanOrEqual(1);
    });
  
    it('should expect speed to be equal or less than 10', function() {
      expect(particle.speed).toBeLessThanOrEqual(10);
    });
  });
  
});
