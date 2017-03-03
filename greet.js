var text = document.querySelector('.text');
var greeting = document.querySelector(".greeting");
var sub = document.querySelector(".button");
var namesGreeted = {};
var counter = document.querySelector(".counter");
if(typeof(localStorage.count) === 'undefined'){
  localStorage.setItem("count",0);
}
counter.innerHTML = localStorage.count;
var rst = document.querySelector(".reset");
rst.addEventListener('click',function(){
  localStorage.count = 0;
  namesGreeted = {};
  counter.innerHTML = localStorage.count;
});
sub.addEventListener('click', function() {
  if(namesGreeted[text.value] !== undefined){
    greeting.innerHTML = "Nice to see you again "+text.value+"!";
    return;
  }
  namesGreeted[text.value] = 1;
  localStorage.count++;
  counter.innerHTML = localStorage.count;
  var radios = document.getElementsByName("lang");
  for(var i=0; i < 3; i++){
    if(radios[i].checked){
      switch (i) {
        case 0:
          greeting.innerHTML = "Molo, "+text.value+"!";
          break;
        case 1:
          greeting.innerHTML = "Hello, "+text.value+"!";
          break;
        case 2:
          greeting.innerHTML = "Dumela, "+text.value+"!";
      } // switch
      break;
    } // end of if
  } // end of for
});// End event listener
