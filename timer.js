var countdown = function(from, updateCallback, finishedCallback){
  this.current = from;
  var t = this;
  this.resume();
  
  this.pause = function(){
    clearInterval(this.interval);
  };
  this.resume = function(){
    this.interval = setInterval(function(){
      updateCallback(t.current);
      if(t.current <= 0){
        clearInterval(t.interval);
        finishedCallback();
      }
      t.current --;
    }, 1000);
  };
};
