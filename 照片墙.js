window.onload=function(){
	var container=document.getElementById('container');
	var image=container.getElementsByTagName('img');
	// console.log(image.length);

	for(var i=0;i<image.length;i++){
		var x=Math.random();
		var y=Math.random();
		var x1=x*100;
		if(i<5){
			x2=i*150+30;
			y2=150;
		}else{
			x2=(i-5)*150+30;
			y2=350;
		}
		image[i].style.left=x2+"px";
		image[i].style.top=y2+"px";
		image[i].style.transform="rotate("+x1+"deg)";
	}	 
}