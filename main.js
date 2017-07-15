var number = document.querySelector('#num');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var counter = 0;

plus.addEventListener('click', function() {
  counter++;
  number.innerHTML = counter;
})

minus.addEventListener('click', function() {
  if(counter >= 1){
    counter --;
  };
  number.innerHTML = counter;
})
