function fib(n) {

    const result = [0, 1];
    for (var i = 2; i < n; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    x = result.toString();
    return x;
  
  }
  
  console.log(fib(6)); 