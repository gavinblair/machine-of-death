var countdown = function(from, updateCallback, finishedCallback){
  this.current = from;
  var t = this;
  t.interval = setInterval(function(){
    updateCallback(t.current);
    if(t.current <= 0){
      clearInterval(t.interval);
      finishedCallback();
    }
    t.current --;
  }, 1000);
};
