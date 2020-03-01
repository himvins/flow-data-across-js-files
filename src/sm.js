function sm(el) {
  sub = new rxjs.Subject();
}
//Get observable instance; The same subject will be used in both sm.js and runtime.js
sm.prototype.getObservable = function(){
 return sub;
}  

//NOTE: worked fine in ie as well. 
//We are going to pass these dates to sm.js to sm.runtime.js 
document.addEventListener("DOMContentLoaded", function(event) { 

 document.getElementById('myBtn').addEventListener("click", function(){
   // Mocked data. 
    var obj = {
      startDate: new Date(),
      endDate: '07/09/2015'
    }
    // data is sent to all the subscriber from here. 
    sub.next(obj);
})
});
