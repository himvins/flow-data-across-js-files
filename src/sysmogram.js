// function sysmogram(el) {
//   let sub = new rxjx.Subject();
// }
// //Get observable instance; This will be used in both sysmogram.js and runtime.js
// sysmogram.prototype.getObservable = function(){
//   return sub;
// }  
// document.getElementById('myBtn').on('click', function(){
//    var me = this;
//     var obj = {
//       startDate: '07/09/1993',
//       endDate: '07/09/2015'
//     }
//     me.getObservable.next(obj);
// })



function sysmogram(el) {
  sub = new rxjs.Subject();
}
//Get observable instance; The same subject will be used in both sysmogram.js and runtime.js
sysmogram.prototype.getObservable = function(){
 return sub;
}  

//NOTE: worked fine in ie as well. 
//We are going to pass these dates to sysmogram.js to sysmogram.runtime.js 
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
