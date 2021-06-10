
function doSomething(random) {
  var firstLike = document.querySelector('section.ltpMr.Slqrh > span.fr66n > button > div > span > svg[aria-label="Like"]');
  if(firstLike){
    firstLike.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    var closestElement = firstLike.closest('button');
      console.log('clicked...\n');
      closestElement.click();
  }
  console.log('waiting for '+random+' miliseconds\n');
}

(function loop() {
  var min = 10000; // min 10 seconds
  var max = 20000; // max 20 seconds
  var random = Math.floor(Math.random() * (+max - +min)) + +min;
  var today = new Date().getHours();
  console.log('current hour: '+today+'\n');
  var start = 10; // start liking after this hour
  var end = 11; // stop liking after this hour
  if (today >= start && today <= end) { // Between
    // On
    setTimeout(function() {
      doSomething(random);  
      loop();  
    }, random);
  } else {
    // Off      
    if (start < today) {
       var diff = start - today;
    }else{
      var diff = today - start;
    } 
    console.log("diff*3600000: "+Math.abs(diff)*3600000+'\n');
    console.log('waiting for '+Math.abs(diff)+' hours until '+start+'\n');
    setTimeout(function() {        
      loop();
    }, Math.abs(diff)*3600000);
  }
}());