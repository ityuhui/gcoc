

$(document).ready(function(){
　　
	getStationList();
	
	$("#addBtn").bind("click",showAddDialog);
	$("#closeDialogBtn").bind("click",closeAddDialog);
	$("#okDialogBtn").bind("click",okAddDialog);

});


	
	
var showAddDialog = function() {
	$.fn.showWarningDialog($("#addDialog"));
}

var closeAddDialog = function() {
	$.fn.hideWarningDialog($("#addDialog"));
}

var okAddDialog = function() {
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