function fibs(n) {
  const f = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      f.push(i);
    }
    else {
      f.push(f[i-1] + f[i-2]);
    }
  }

  return f;
}

function fibsRec(n, f=0, fibs=[0,1]) {
  if (n == 2) return fibs;
  if (n == 0) return [];
  if (n == 1) return [0]
  
  return fibsRec(n-1, f+1, fibs.concat([fibs[f] + fibs[f+1]]));
}

