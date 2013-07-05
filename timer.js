var countdown = function(from, updateCallback, finishedCallback){
  this.current = from;
  this.interval = setInterval(function(){
    this.current --;
    updateCallback();
    if(this.current <= 0){
      clearInterval(this.interval);
      finishedCallback();
    }
  }, 1000);
};
