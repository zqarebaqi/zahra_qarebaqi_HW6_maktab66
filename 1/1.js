function countMatch(s1, s2) {
  var count = 0;
  while (s1.length && s2.length) {
    if (s2.includes(s1.charAt(0))) {
      count++;
      s2 = s2.replace(s1.charAt(0), "");
      s1 = s1.slice(1);
    } else {
      s1 = s1.slice(1);
    }
  }
  return count;
}

console.log(countMatch("aabcc", "adcaa"));
