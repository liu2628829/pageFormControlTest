//页面初始化，给按钮绑定事件
$(function(){
	var btns = $("#btns button");
	$(btns[0]).bind("click",function(){
		$('#myRadio').checkRadio('initRadio',radioData);
		$('#myRadio').checkRadio('setRadioValue',0);
	});
	$(btns[1]).bind("click",function(){
		$('#myRadio').checkRadio('getRadioValue');
	});
	$(btns[2]).bind("click",function(){
		$('#myRadio').checkRadio('setRadioValue',1);
	});
   
  //下拉多选框按钮...
  
  
});