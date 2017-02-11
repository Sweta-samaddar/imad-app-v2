console.log('Loaded!');


var txt=document.getElementById('main');
txt.innerHTML="new alue ";

var img=document.getElementById('img');

var move=0;
moveleft()
{
    move=move+10;
    img.style.marginLeft=move+'px';
}
img.OnClick=function()
{
  var int=setInterval(moveLeft,100);  
};