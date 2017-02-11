console.log('Loaded!');


var txt=document.getElementById('main');
txt.innerHTML="new alue ";

var img1=document.getElementById('img');

var move=0;
function moveleft()
{
    move=move+10;
    img1.style.marginLeft=move+'px';
}
img1.OnClick=function()
{
  var interval=setInterval(moveLeft,100);  
};