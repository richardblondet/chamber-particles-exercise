// @ts-check

class Frame {
  id;
  content;
  
  /**
   * Construct the frame with an identifier
   * @param {Number} id 
   */
  constructor(id){
    this.id = id;
  }

  /**
   * Get the frame in string format
   * @returns {String}
   */
  get string() {
    let result = [];
    for (const key in this.content) {
      if (this.content.hasOwnProperty(key)) {
        const element = this.content[key];
        if (element instanceof Array) {
          result.push("X");
        } else {
          result.push(element);
        }
      }
    }
    return result.join('');
  }
}

module.exports = Frame;