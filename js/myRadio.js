//单选框对象化封装，创建匿名对象，一开始就执行
(function($){
    //method用于区分方法，options为参数
	$.fn.checkRadio= function(method, options) {
		if(typeof(method)=='object'){
			create(this, method);
		}else if(method=='initRadio'){
			return initRadio(this,options);
		}else if(method=='getRadioValue'){
			return getRadioValue(this);
		}else if(method=='setRadioValue'){
			return setRadioValue(this,options);
		}
	};
	
	function initRadio(obj, data){
		//定义数组记录数据，js中建议用该方法拼接字符串
		var arry = [];
		arry.push('<div  class="formStyle selectOrder">');
		for (var i = 0;i<data.length;i++){
			var html = '<p><input type="radio" name="question" value="'+data[i].id+'"> '+data[i].name+'</p>';
			arry.push(html);
		}
		arry.push('</div>');
		obj.html(arry.join(" "));
		$('input:radio', obj).jqTransRadio();	
	}
	
	function getRadioValue(obj){	
		var str = "未选中！";
		var checkedObj = $('input[name="question"]:checked', obj);
		if(checkedObj.length > 0){
			str = checkedObj.val() + " : " + checkedObj.parent().parent().text();
		}
		alert(str);	
	}
	
	function setRadioValue(obj, setNum){
		//清空所有选择项
		$("input[name='question']", obj).attr('checked', '');
		$(".jqTransformRadioWrapper a", obj).removeClass("jqTransformChecked");
		//设置选中项value
		$("input[name='question']", obj).eq(setNum).attr('checked', 'true');
		$(".jqTransformRadioWrapper a", obj).eq(setNum).addClass("jqTransformChecked");
	}
	
})(jQuery);