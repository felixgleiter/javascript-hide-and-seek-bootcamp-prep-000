function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget() {
  return getFirstSelector('div div div div div');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTMl = parseInt(lis[i].innerHTMl);
    
  }
  console.log(lis);
}

function deepestChild() {
  return document.getElementById('app').querySelectorAll('div div div div div')[1];
}