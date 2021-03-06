const ArrayUtils = {
  /**
   * Returns an average of the array of numbers
   *
   * @param {Array} array - array of numbers
   * @returns {Array}
   */
  average: function(array) {
    return this.sum(array) / array.length;
  },

  /**
   * Returns an array of arrays of size n
   *
   * @param {Array} array - array to operate on
   * @param {Number} n - size of chunks
   * @returns {Array[Array]}
   */
  chunk: function(array, n) {
    return array.length
      ? [array.slice(0, n), ...this.chunk(array.slice(n), n)]
      : [];
  },

  /**
   * Flattens an array by 1 level
   *
   * @param {Array} array - Array to flatten
   * @returns {Array}
   */
  flatten: function(array) {
    return [].concat.apply([], array);
  },
  /**
   * Takes an array of objects and returns an array of the values from a property name
   *
   * @param {string} prop - string name for property
   * @param {Array[Object]} array - array of objects
   * @returns {Array}
   */
  getProp: function(prop, array) {
    return array.map(item => item[prop]);
  },

  /**
   * Returns the sum of an array of numbers
   *
   * @param {Array} array - array of numbers
   * @returns {Number}
   */
  sum: function(array) {
    return array.reduce((total, item) => (total += item), 0);
  },

  /**
   * Returns the median of an array of numbers
   *
   * @param {Array} array - array of numbers
   * @returns {Number}
   */
  median: function(array) { 
    const sorted = array.sort((a, b) => a - b);
    let median = (sorted[(sorted.length - 1) >> 1] + sorted[sorted.length >> 1]) / 2
    return median;
  },

  /**
   * Returns the std of an array of numbers
   *
   * @param {Array} array - array of numbers
   * @returns {Number}
   */ 
  stdDev: function(array) { 
    const avg = this.sum(array) / array.length;
  
    const squareDiffs = array.map(function(value){
      const diff = value - avg;
      const sqrDiff = diff * diff;
      return sqrDiff;
    });
    
    const avgSquareDiff = this.sum(squareDiffs) / squareDiffs.length;
  
    const stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  },

  /**
   * Returns an array with arrays of the given size.
   *
   * @param myArray {Array} Array to split
   * @param chunkSize {Integer} Size of every group
   */
  chunkArray: function (myArray, chunk_size){
  var results = [];

  while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
  }

  return results;
  }
};

module.exports = ArrayUtils;
