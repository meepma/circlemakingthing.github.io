var mouseevent="empty";
var lastx,lasty;
Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}
Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
   currentx=e.clientX-Canvas.offsetLeft;
   currenty=e.clientY-Canvas.offsetTop;
   if(mouseevent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle="cyan";
       ctx.lineWidth=6;
      ctx.arc(currentx,currenty,30,0,2*Math.PI);
       ctx.stroke();
   }lastx=currentx;
   lasty=currenty;

}