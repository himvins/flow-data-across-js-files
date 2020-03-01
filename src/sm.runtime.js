this.sys = new sm();

this.sys.getObservable().subscribe(function(data){
  // this is the callback function - whenever button is being clicked 
  // obervable is going to send us the data here.   
  document.getElementById('myText').value = data.startDate;
});

