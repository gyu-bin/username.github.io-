function LinksSetcolor(color){
    var alist= document.querySelectorAll('a');
      var i= 0;
        while(i<alist.length){
            alist[i].style.color=color;
              i=i+1;
  }
}
function BodySetcolor(color){
  document.querySelector('body').style.color=color;
}
function BodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor=color;
}

function nightdayHandler(self){
var target=document.querySelector('body')
if(self.value === 'night'){
 ('white');
  BodySetBackgroundColor('black');
  BodySetcolor('white');
  self.value = 'day';
 LinksSetcolor("white");
} else {
  BodySetBackgroundColor('white');
  BodySetcolor('black');
  self.value = 'night';
LinksSetcolor("black");

}
}
