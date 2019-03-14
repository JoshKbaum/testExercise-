const wrap = (line, maxLen) => {
  let final = '';
  if (line === ''){
      return ''
  }
  for (let i = 0; i <= line.length; i++) {
    if (i % maxLen === 0 && i !== 0) {
      final += line[i] + '\n';
    } else {
      final += line[i];
    }
  }
  console.log('this is the result ');
  console.log(final);
  return final;
};
module.exports = wrap;
