describe('Animation', function() {
  var Animation = require('../../src/animation.class');
  var animation;
  var animated;
  var particle;

  describe('when animating', function() {
    
    beforeEach(function() {
      animation = new Animation();
      animated = animation.animate(3, 'RR..LRL');
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

  describe('when testing library', function() {

    beforeEach(function() {
      animation = new Animation();
    });

    it('should expect frames of (2, "..R....") to have the expected result', function() {
      let expected = ["..X....", "....X..", "......X", "......."];
      let result = animation.animate(2, "..R....");
      expect(result).toEqual(expected);
    });

    it('should expect frames of (3, "RR..LRL") to have the expected result', function() {
      let expected = ["XX..XXX", ".X.XX..", "X.....X", "......."];
      let result = animation.animate(3, "RR..LRL");
      expect(result).toEqual(expected);
    });
    
    it('should expect frames of (2, "LRLR.LRLR") to have the expected result', function() {
      let expected = ["XXXX.XXXX", "X..X.X..X", ".X.X.X.X.", ".X.....X.", "........."];
      let result = animation.animate(2, "LRLR.LRLR");
      expect(result).toEqual(expected);
    });
    
    it('should expect frames of (10, "RLRLRLRLRL") to have the expected result', function() {
      let expected = [ "XXXXXXXXXX", ".........." ];
      let result = animation.animate(10, "RLRLRLRLRL");
      expect(result).toEqual(expected);
    });
    
    it('should expect frames of (1, "...") to have the expected result', function() {
      let expected = ["..."];
      let result = animation.animate(1, "...");
      expect(result).toEqual(expected);
    });
    
    it('should expect frames of (1, "LRRL.LR.LRR.R.LRRL.") to have the expected result', function() {
      let expected = [ "XXXX.XX.XXX.X.XXXX.", "..XXX..X..XX.X..XX.", ".X.XX.X.X..XX.XX.XX", "X.X.XX...X.XXXXX..X", ".X..XXX...X..XX.X..", "X..X..XX.X.XX.XX.X.", "..X....XX..XX..XX.X", ".X.....XXXX..X..XX.", "X.....X..XX...X..XX", ".....X..X.XX...X..X", "....X..X...XX...X..", "...X..X.....XX...X.", "..X..X.......XX...X", ".X..X.........XX...", "X..X...........XX..", "..X.............XX.", ".X...............XX", "X.................X", "..................." ];
      let result = animation.animate(1, "LRRL.LR.LRR.R.LRRL.");
      expect(result).toEqual(expected);
    });

  });
  
});
