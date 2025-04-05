window.intervalIds = [];

//origianl interval function
const originalIntervalFn = window.setInterval;

//overriding the origianl
window.setInterval = function(fn, delay){
  const id = originalIntervalFn(fn, delay);
  //storing the id of each interval
  intervalIds.push(id);
  return id;
}

//clear all interval
window.clearAllInterval = function(){
  while(intervalIds.length){
    clearInterval(intervalIds.pop());
  }
}
Copy
Input:
setInterval(() => {
  console.log("Hello");
}, 2000);


setInterval(() => {
  console.log("Hello2");
}, 500);

clearAllInterval();

setInterval(() => {
  console.log("Hello3");
}, 1000)

Output:
"Hello3" // after every ~1 sec 