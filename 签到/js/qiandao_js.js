$(function() {
    var signFun = function() {

        var dateArray = [1,,5,7] // 假设已经签到的
        
        var $dateBox = $("#js-qiandao-list"), //获取ul列表
            $currentDate = $(".current-date"), //当天日期
            $qiandaoBnt = $("#js-just-qiandao"), //获取右上侧签到按钮
            _html = '',
            _handle = true,
            localstorage=window.localstorage,
            myDate = new Date();
        $currentDate.text(myDate.getFullYear() + '年' + (myDate.getMonth() + 1) + '月' + myDate.getDate() + '日');

        var monthFirst = new Date(myDate.getFullYear(), (myDate.getMonth()), 1).getDay();

        var d = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0);
        var totalDay = d.getDate(); //获取当前月的天数

        for (var i = 0; i < 42; i++) {
            _html += ' <li><div class="qiandao-icon"></div></li>'
        }
        $dateBox.html(_html) //生成日历网格

        var $dateLi = $dateBox.find("li");
        for (var i = 0; i < totalDay; i++) {
            $dateLi.eq(i + monthFirst).addClass("date" + (i + 1));
            for (var j = 0; j < dateArray.length; j++) {
                if (i == dateArray[j]) {
                    $dateLi.eq(i-1 + monthFirst).addClass("qiandao");
                }
            }
        } //生成当月的日历且含已签到

        $(".date" + myDate.getDate()).addClass('able-qiandao');

        $dateBox.on("click", "li", function() {
                if ($(this).hasClass('able-qiandao') && _handle) {
                    $(this).addClass('qiandao');
                    qiandaoFun();
                }
            }) //签到

        $qiandaoBnt.on("click", function() {
            if (_handle) {
                qiandaoFun();
            }
        }); //签到

        function qiandaoFun() {
            $qiandaoBnt.addClass('actived');
            openLayer("qiandao-active", qianDao);
            _handle = false;
        }

        function qianDao() {
            $(".date" + myDate.getDate()).addClass('qiandao');
        }
    }();

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
