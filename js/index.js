
maxName = ('alex', 'George', 'Michael' )

function findLongestWord(maxName) {
    return maxName.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  };
  console.log(maxName);
///
let min = function(a, ...b) {
    if (typeof(a) === 'number') {
        console.log(Math.min(a, ...b))
    } else if (Array.isArray(a)) {
        console.log(Math.min(...a, b))
    } else if (typeof(a) === 'object') {
        console.log(Math.min(Object.values(min)))
    }
}
min(1, 2,) 
min([1, 2]) 
min({a: 1, b: 2})
///
let n = prompt(); 
let fibonacci = [0, 1]; 

for (i = 2; i < n; i ++) {
  
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

console.log(fibonacci.slice(0,n));