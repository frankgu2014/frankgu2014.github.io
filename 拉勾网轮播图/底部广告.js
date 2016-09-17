window.onload=function(){
	var box1=document.getElementsByClassName('box1');
		// var box2=document.getElementById('box2');
		for(var i=0;i<box1.length;i++){
		box1[i].onmouseenter=function(e){
			var w=this.offsetWidth;
			var h=this.offsetHeight;
			var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);    
			var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);   
			var direction=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
			var position=["left:0px;top:-100px","left:100px;top:0px","left:0px;top:100px","left:-100px;top:0px"]; 
			var ttt=this.getElementsByClassName('box2')[0];
			ttt.style.cssText=position[direction];
			setTimeout(function(){
				ttt.style.cssText="left:0px;top:0px;";
			},1);
		}
		box1[i].onmouseleave=function(e){
			var w=this.offsetWidth;
			var h=this.offsetHeight;
			var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);    
			var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);   
			var direction=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
			var position=["left:0px;top:-100px;","left:100px;top:0px;","left:0px;top:100px;","left:-100px;top:0px;"]; 
			var ttt=this.getElementsByClassName('box2')[0];
			ttt.style.cssText="left:0px;top:0px;";
			setTimeout(function(){
				ttt.style.cssText=position[direction];
			},1);
		}	
		}
}