window.onload=function(){
	function $(id){return typeof id==='string'?document.getElementById(id):id;}
	var head=$('head');
	var list=head.getElementsByTagName('li');
	var content=$('content');
	var intro=content.getElementsByClassName('introduction');
	var index=0;
	var timer=null;
	var contentList=content.getElementsByTagName('li');
	// console.log(contentList.length);
// 隐藏每一个内容页,这个i要从1开始，也就是从第二页开始，内容要被隐藏，保留第一页的内容
	for(var i=1;i<list.length;i++){
		intro[i].style.display="none";
	} 
// 移动到列表上时清除定时器，移开后开启定时器
	for(var i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			clearInterval(timer);
			change();
		}
		list[i].onmouseout=function(){
			timer=setInterval(autoPlay,2000);
		}
	}
// 使用定时器完成自动播放
timer=setInterval(autoPlay,2000);
// 定义一个hidden函数来隐藏无关的选项
function hidden(){
	for(var i=0;i<list.length;i++){
			list[i].className="";
			intro[i].style.display="none";
		}
}
function autoPlay(){
		index++;
		if(index>=list.length){
			index=0;
		}
		hidden();
		list[index].className="select";
		intro[index].style.display="block";
	}
	// 点击显示高亮以及内容区域

function change(){
		for(var i=0;i<list.length;i++){
		list[i].onclick=function(i){
			return function(){
				hidden();
				list[i].className='select';	
				intro[i].style.display='block';
				index=i;
// change()函数调用的参数是i，而autoPlay()的参数是index，
// 为了让光标移开头部区域后能继续执行autoPlay，
// 并且按照 change()函数给定的那个页签向下播放，所以需要把参数i赋值给index;
			}
		}(i);
	}
}
change(); 

}
