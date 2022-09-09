let toTopDiv = document.querySelector('.toTop');

window.addEventListener('scroll', function(){
  let pxWind = window.pageYOffset;
  if(pxWind>150){
    toTopDiv.style.display = 'block';
  }
  else{
    toTopDiv.style.display = 'none';
  }
});

window.addEventListener('load', function(){
  toTopDiv.style.display = 'none';
})


function passvalue(){
  var bag1 = document.querySelector('#n').value
  localStorage.setItem('bag1',bag1);
  return false;
}






let btn1 = document.querySelector('.button1');

btn1.addEventListener('click', function(){
  alert('Add to Bag');
});
btn1.addEventListener('click', click1);

function click1(){

}

let btn2 = document.querySelector('.button2');

btn2.addEventListener('click', function(){
  alert('Add to Bag');
});
btn2.addEventListener('click', click1);

function click1(){

}
let btn3 = document.querySelector('.button3');

btn3.addEventListener('click', function(){
  alert('Add to Bag');
});
btn3.addEventListener('click', click1);

function click1(){

}
let btn4 = document.querySelector('.button4');

btn4.addEventListener('click', function(){
  alert('Add to Bag');
});
btn4.addEventListener('click', click1);

function click1(){
}
