function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget() {
  return getFirstSelector('div div div div div');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTMl = (lis[i].innerHTML + n).toString();
  }
  console.log(lis[0].innerHTML);
  console.log(lis[1].innerHTML);
  console.log(lis[2].innerHTML);
  console.log(lis[3].innerHTML);
  console.log(lis[4].innerHTML);
}

function deepestChild() {
  return document.getElementById('app').querySelectorAll('div div div div div')[1];
}