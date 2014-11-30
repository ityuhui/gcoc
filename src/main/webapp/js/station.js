var opstr = "add";

$(document).ready(function(){
　　
	$("#addBtn").bind("click",showAddDialog);
	$("#closeDialogBtn").bind("click",closeAddDialog);
	$("#okDialogBtn").bind("click",okAddDialog);
	
	$("#modifyBtn").bind("click",showModifyDialog);
	
	
	getStationList();
	
});
	
	
var showAddDialog = function() {
	opstr = 'add';
	$('.adTitle').text('新增加油站');
	$.fn.showWarningDialog($("#addDialog"));
}

var closeAddDialog = function() {
	$.fn.hideWarningDialog($("#addDialog"));
}

var showModifyDialog = function() {

	var selectObj = $("input[name='tdOptRadios']:checked");
	var selectId = selectObj.val();
	
	if(selectId){
		opstr = 'modify';
		$('.adTitle').text('修改加油站信息');
		var selectTr = selectObj.parent().parent();
		$('#mofifyid').html(selectId);
		$('#stationName').val(selectTr.find('td#name').text());
		
		$.fn.showWarningDialog($("#addDialog"));
	}else{
		alert("请选择一个加油站!");
	}
}


var okAddDialog = function() {
	if( 'add' == opstr){
		addTaskFunc();
	}else{
		modifyTaskFunc();
	}
}

var addTaskFunc = function() {
	var stationName = $('#stationName').val();
	
	if( "undefine" == typeof(stationName) || 0 == stationName.length){
		alert("请输入加油站名称");
	}else{
		$.post("addNewStation",
			{	"station.name":stationName
			},
			function(retvalue){
				var restr = retvalue['result'];
				var showMsg = "添加失败";
				if( restr!= null && 'success'== restr  ){
					showMsg = "添加成功";
				}
				else{
					showMsg = "添加失败";
				}
				alert(showMsg);
				closeAddDialog();
				getStationList();
			},
			"json"
		);
	}
}


var modifyTaskFunc = function(){

	var modifyid = $('#mofifyid').text();
	
	var stationName = $('#stationName').val();
	
	if( "undefine" == typeof(stationName) || 0 == stationName.length){
		alert("请输入加油站信息！");
	} else {
		$.post("updateStationInfo",
			{	"station.name":stationName,
				'station.sid':modifyid
			},
			function(retvalue){
				var restr = retvalue['result'];
				var showMsg = "修改失败";
				if( restr!= null && 'success'== restr  ){
					showMsg = "修改成功";
				}
				else{
					showMsg = "修改失败";
				}
				alert(showMsg);
				closeAddDialog();
				getStationList();
			},
			"json"
		);
	}
}

var getStationList = function() {
	$.getJSON("getStationList",function(json){

		var arr = json.list;
		var astring = "<table class='table table-striped'>\
		<tr>\
			<th>选择</th>\
			<th>加油站</th>\
		</tr>";
		for(var i=0,l=arr.length;i<l;i++){
			astring += "<tr>";
			
			astring += "<td><input type='radio' name='tdOptRadios' value='" + arr[i].sid + "'></td>";
			astring += "<td id='name'>" + arr[i].name + "</td>";
			
			astring += "</tr>";
		}
		astring += "</table>";
		$("#data_table").html(astring);
	});
}