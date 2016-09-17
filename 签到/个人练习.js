$(function(){

	var dateArray=[2,4,5,8,9],//已经签到的日期
		dateList=$("#qd-list"),//获取时间列表
		currentDate=$(".qd-time"),//获取当前时间
		qdBtn=$("#qdBtn");
		console.log(qdBtn);
		// console.log(currentDate.length);
		myDate=new Date(),
		_html = '',
		_handle = true;
	currentDate.text(myDate.getFullYear() + '年' + (myDate.getMonth() + 1) + '月' + myDate.getDate() + '日');//定义当前时间
	// myDate.getMonth()输出的结果是当前月份-1，所以实际使用时需要+1
	var monthFirst = new Date(myDate.getFullYear(), (myDate.getMonth()), 1).getDay();
	// 这里计算当前月份的第一天是星期几，不需要在getMonth上+1
	// var time1=new Date(2016,9,1).getDay();
	// console.log(time1);//显示是6，即10月的第一天是礼拜六，所以我们要获取9月1日是礼拜几，需要的是2016,8,1这个日期，直接调用getMonth()即可。
	var d = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0);
	var totalDay = d.getDate(); //获取当前月的天数
	for(var i=0;i<42;i++){
		_html+='<li><div class="qd-icon"></div></li>'
	}
	dateList.html(_html);
	var dateLi=dateList.find('li');
	for(var i=0;i<totalDay;i++){
		dateLi.eq(i+monthFirst).addClass('date'+(i+1));//从当前月份的第一天开始添加class
           for (var j = 0; j < dateArray.length; j++) {
                if (i == dateArray[j]) {
                    dateLi.eq(i-1 + monthFirst).addClass("qd");
                }
            }
	}
	$(".date"+myDate.getDate()).addClass('able-qd');//定义当前日期可以被点击签到
	dateList.on('click','li',function(){
		if($(this).hasClass('able-qd')&&_handle){
			$(this).addClass('qd');
			qiandaoFun();//调用签到函数
		}
	})
	qdBtn.on('click',function(){
		if(_handle){
			qiandaoFun();
		}
	})
	function qiandaoFun(){
		qdBtn.addClass("actived");
        openLayer("qiandao-active", qianDao);
		_handle=false;
	}
    function qianDao() {
        $(".date" + myDate.getDate()).addClass('qd');
    }
    
    function openLayer(a, Fun) {
        $('.' + a).fadeIn(Fun)
    } //打开弹窗

    var closeLayer = function() {
            $("body").on("click", ".close-qiandao-layer", function() {
                $(this).parents(".qiandao-layer").fadeOut()
            })
        }() //关闭弹窗

    $("#js-qiandao-history").on("click", function() {
        openLayer("qiandao-history-layer", myFun);

        function myFun() {
            console.log(1)
        } //打开弹窗返回函数
    })    



})