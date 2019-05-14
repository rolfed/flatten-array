const app = (function() {

  const myArray =  [[1,2,[3]],4];

  function flattenArray(array) {
    return array.reduce(function(a, b) {
      if (Array.isArray(b)) {
        return a.concat(flattenArray(b))
      }
      return a.concat(b)
    }, [])
  }

  const init = function() {
     console.log('INITIAL', myArray);
     console.log('RESULT: ', flattenArray(myArray));
  }


  return init();
})();
