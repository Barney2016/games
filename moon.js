function gravity(){
  setInterval(function fall(){
  if(document.getElementById('bluemoon').offsetTop<620){
  var g = document.getElementById('bluemoon').offsetTop;
  document.getElementById('bluemoon').style.top=g + 1 + "px";}
}, 10);

};

function up(){
  setInterval(function fall(){
  if(document.getElementById('bluemoon').offsetTop<650&&document.getElementById('bluemoon').offsetTop>110){
  var g = document.getElementById('bluemoon').offsetTop;
  document.getElementById('bluemoon').style.top=g - 1 + "px";
  if(document.getElementById('bluemoon').offsetTop<115){
    alert("leaving Moon!");
    location.reload();
  };
};
}, 10);

};

function down(){
  setInterval(function fall(){
  if(document.getElementById('bluemoon').offsetTop<619){
  var g = document.getElementById('bluemoon').offsetTop;
  document.getElementById('bluemoon').style.top=g + 1 + "px";
  if(document.getElementById('bluemoon').offsetTop>618){
    alert("succesfully landed!");
    location.reload();
  };
};
}, 10);
};

function left(){
  setInterval(function fall(){
  if(document.getElementById('bluemoon').offsetTop<619){
  var g = document.getElementById('bluemoon').offsetLeft;
  document.getElementById('bluemoon').style.left=g - 1 + "px";
  if(document.getElementById('bluemoon').offsetLeft<20){
    alert("leaving landing site!");
    location.reload();
  };
};
}, 10);
};

function right(){
  setInterval(function fall(){
  if(document.getElementById('bluemoon').offsetTop<619){
  var g = document.getElementById('bluemoon').offsetLeft;
  document.getElementById('bluemoon').style.left=g + 1 + "px";
  if(document.getElementById('bluemoon').offsetLeft>1705){
    alert("leaving landing site!");
    location.reload();
  };
};
}, 10);
};

function pause(){
location.reload();
};
