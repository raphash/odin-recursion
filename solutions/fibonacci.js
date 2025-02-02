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