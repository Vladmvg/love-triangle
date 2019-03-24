/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var sum = 0;  
  for (var i = 0; i < preferences.length; i++) { 
      var fir = preferences[i] - 1;
      if (fir == i) continue;
      var sec = preferences[fir] - 1;
      if (fir == sec) continue;
      var th = preferences[sec] - 1;
      if (th == sec) continue;
      if (th == i) {
          sum++;
      }
   }
   return sum / 3;
};
