//页面初始化
$(function(){
	 var btns = $(".blueBtn");
	 //单选
   $(btns[0]).bind("click",initRadio);
   $(btns[1]).bind("click",getRadioValue);
   $(btns[2]).bind("click",setRadioValue);
    //多选
    $(btns[3]).bind("click",initRadioMultipleChoice);
    $(btns[4]).bind("click",getRadioValueMultipleChoice);
  //  $(btns[5]).bind("click",setRadioValueMultipleChoice);
    $(btns[5]).bind("click",setRadioValueMultipleChoice2);
    //下拉
    $(btns[6]).bind("click",initRadioPullDown);
    $(btns[7]).bind("click",getRadioValuePullDown);
    $(btns[8]).bind("click",setRadioValuePullDown);
    // //文本框
    // $(btns[0]).bind("click",initRadio);
    // $(btns[1]).bind("click",getRadioValue);
    // $(btns[2]).bind("click",setRadioValue);
    // //列表
    // $(btns[0]).bind("click",initRadio);
    // $(btns[1]).bind("click",getRadioValue);
    // $(btns[2]).bind("click",setRadioValue);

   
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
    //获取已勾选的元素checkedObj
	var checkedObj = $('#rads input[name="question"]:checked');
	if(checkedObj.length > 0){
	    //用parent定位到父节点
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


//多选框按钮-初始化
function initRadioMultipleChoice(){
    var node = $("#chks");
    //定义数组记录数据，js中建议用该方法拼接字符串
    var arry = [];
    for (var i = 0;i<checkboxData.length;i++){
        var html = '<p><input type="checkbox" name="chbox" value="'+checkboxData[i].id+'"> '+checkboxData[i].name+'</p>';
        arry.push(html);
    }
    node.html(arry.join(" "));
    //转换
    $('input:checkbox', node).jqTransCheckBox();
}

//多选框按钮-取值
function getRadioValueMultipleChoice(){
    var str = "未选中！";
    var checkedObj = $('#chks input[name="chbox"]:checked');
    if(checkedObj.length > 0){
        str = checkedObj.val() + " : " + checkedObj.parent().parent().text();
    }
    alert(str);
}

//多选框按钮-设置值
function setRadioValueMultipleChoice(){
    //清空所有选择项
    $("#chks input[name='chbox']").attr('checked', '');
    $("#chks .jqTransformCheckboxWrapper a").removeClass("jqTransformCheckbox");
    //设置选中项value
    // $("#chks input[name='chbox']").eq(0).attr('checked', 'true');
    // $("#chks .jqTransformCheckboxWrapper a").eq(0).addClass("jqTransformCheckbox");
    $("#chks input[name='chbox']").eq(1).attr('checked', 'true');
    $("#chks .jqTransformCheckboxWrapper a").eq(1).addClass("jqTransformCheckbox");
}

//多选框按钮-设置值1，把单选框设置值复制过来
function setRadioValueMultipleChoice1(){
    //清空所有选择项
    $("#chks input[name='chbox']").attr('checked', '');
    $("#chks .jqTransformRadioWrapper a").removeClass("jqTransformChecked");
    //设置选中项value
    $("#chks input[name='chbox']").eq(1).attr('checked', 'true');
    $("#chks .jqTransformRadioWrapper a").eq(1).addClass("jqTransformChecked");
}

//多选框按钮-设置值2，昨晚上成功的
function setRadioValueMultipleChoice2(){
    //清空所有选择项
    $("#chks input[name='chbox']").attr('checked', '');
    $("#chks .jqTransformCheckboxWrapper a").removeClass("jqTransformChecked");
    //设置选中项value
    $("#chks input[name='chbox']").eq(0).attr('checked', 'true');
    $("#chks .jqTransformCheckboxWrapper a").eq(0).addClass("jqTransformChecked");
    $("#chks input[name='chbox']").eq(1).attr('checked', 'true');
    $("#chks .jqTransformCheckboxWrapper a").eq(1).addClass("jqTransformChecked");
}



//下拉框按钮-初始化
function initRadioPullDown(){
    var node = $("#pullDown");
    //定义数组记录数据，js中建议用该方法拼接字符串
    var arry = [];
    for (var i = 0;i<mutialCheckboxData.length;i++){
        var html = '<p><input type="radio" name="question" value="'+mutialCheckboxData[i].id+'"> '+mutialCheckboxData[i].name+'</p>';
        arry.push(html);
    }
    node.html(arry.join(" "));
    $('input:radio', node).jqTransRadio();
}

//下拉选框按钮-取值
function getRadioValuePullDown(){
    var str = "未选中！";
    var checkedObj = $('#chks input[name="question"]:checked');
    if(checkedObj.length > 0){
        str = checkedObj.val() + " : " + checkedObj.parent().parent().text();
    }
    alert(str);
}

//下拉框按钮-设置值
function setRadioValuePullDown(){
    //清空所有选择项
    $("#chks input[name='question']").attr('checked', '');
    $("#chks .jqTransformRadioWrapper a").removeClass("jqTransformChecked");
    //设置选中项value
    $("#chks input[name='question']").eq(0).attr('checked', 'true');
    $("#chks .jqTransformRadioWrapper a").eq(0).addClass("jqTransformChecked");
    $("#chks input[name='question']").eq(1).attr('checked', 'true');
    $("#chks .jqTransformRadioWrapper a").eq(1).addClass("jqTransformChecked");
}