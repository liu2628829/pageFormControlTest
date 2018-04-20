//页面初始化
$(function(){
	 var btns = $(".blueBtn");
   $(btns[0]).bind("click",initRadio);
   $(btns[1]).bind("click",getRadioValue);
   $(btns[2]).bind("click",setRadioValue);
   
   //其它按钮事件绑定...
});

//单选框按钮-初始化
function initRadio(){
	var node = $("#rads");
	//定义数组记录数据，js中建议用该方法拼接字符串
	var arry = [];	
	for (var i = 0;i<radioData.length;i++){
		var html = '<p><input type="radio" name="question" value="'+radioData[i].id+'"> '+radioData[i].name+'</p>';
		arry.push(html);
	}
	node.html(arry.join(" "));
	$('input:radio', node).jqTransRadio();
}

//单选框按钮-取值
function getRadioValue(){
	var str = "未选中！";
	var checkedObj = $('#rads input[name="question"]:checked');
	if(checkedObj.length > 0){
		str = checkedObj.val() + " : " + checkedObj.parent().parent().text();
	}
	alert(str);
}

//单选框按钮-设置值
function setRadioValue(){
	//清空所有选择项
	$("#rads input[name='question']").attr('checked', '');
	$("#rads .jqTransformRadioWrapper a").removeClass("jqTransformChecked");
	//设置选中项value
	$("#rads input[name='question']").eq(1).attr('checked', 'true');
	$("#rads .jqTransformRadioWrapper a").eq(1).addClass("jqTransformChecked");
}