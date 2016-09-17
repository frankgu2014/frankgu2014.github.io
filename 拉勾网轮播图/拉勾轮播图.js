window.onload=function(){
	function $(id){return typeof id==='string'?document.getElementById(id):id;} 
	var control=$('control');
	var lis=control.getElementsByTagName('li');
	var span=$('bg-1');
	var content=$('content');
	var banner=$('banner');
	var imgs=banner.getElementsByTagName('img');
	var info=document.getElementsByClassName('hot-info');
	var timer=null;
	var index=0;
	// 自定义一个定时器timer
	// 自定义一个标签index用于控制自动播放：
	timer=setInterval(autoPlay,5000);
	// 初始化定时器timer
		content.onmouseover= control.onmouseover=function(){
			clearInterval(timer);
			change();
		}
		control.onmouseout=function(){
			timer=setInterval(autoPlay,5000);
		}
	function autoPlay(){
		index++;
		if(index>=lis.length){
			index=0;
		}
		span.style.marginTop=index*55+'px';
		content.style.marginTop=-index*160+'px';
	}
	function change(){
		for (var i=0;i<lis.length;i++){
			lis[i].onmouseover=function(i){
			return function(){
				span.style.marginTop=i*55+"px";
				content.style.marginTop=-i*160+"px";
				index=i;
				}
			}(i);
		}
	}
}


