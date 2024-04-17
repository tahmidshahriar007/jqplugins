$.ripple('.rippleit', {
  on:'mouseenter',
  opacity: 0.4,
  color:"auto",
  multi:false,
  duration: 0.7,
  rate:function(pxPerSecond) {
    return pxPerSecond;// animation speed
  },
  easing:'linear'
});

