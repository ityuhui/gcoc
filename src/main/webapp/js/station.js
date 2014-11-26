

$(document).ready(function(){
　　
	getStationList();

	$("#addBtn").bind("click",showAddDialog);
	$("#closeDialogBtn").bind("click",closeAddDialog);
});


var showAddDialog = function() {
	$.fn.showWarningDialog($("#addDialog"));
}

var closeAddDialog = function() {
	$.fn.hideWarningDialog($("#addDialog"));
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