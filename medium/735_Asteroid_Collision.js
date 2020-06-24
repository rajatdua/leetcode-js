const { Stack } = require('../utils');
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
  let stack = new Stack();
  for(let i = 0; i < asteroids.length; i++){
    if(stack.isEmpty() || asteroids[i] > 0){
      stack.push(asteroids[i]);
    }
    else{
      while(true){
        let peek = stack.peek();
        if(peek < 0){
          stack.push(asteroids[i]);
          break;
        }
        else if(peek === -asteroids[i]){
          stack.pop();
          break;
        }
        else if(peek > -asteroids[i]){
          break;
        }
        else{
          stack.pop();
          if(stack.isEmpty()){
            stack.push(asteroids[i]);
            break;
          }
        }
      }
    }
  }
  let result = [];
  for(let i = stack.size()-1; i >= 0; i--){
    result[i] = stack.pop();
  }
  return result;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
