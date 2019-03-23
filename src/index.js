module.exports = function check(str, bracketsConfig) {
  const LENGTHBR = bracketsConfig.length;
  const arrstr = [];
  let prev = '';

  for(let i = 0; i < LENGTHBR; i++) {    
    arrstr.push(bracketsConfig[i][0].concat(bracketsConfig[i][1]));
  }

  while(prev !== str) {
    prev = str;
    for(let i = 0; i < LENGTHBR; i++) {    
      str = str.replace(arrstr[i], '');
    }
  }

  return str === '' ? true : false;
}
