

$(document).ready(function(){
　　
	getRecordList();

});



var getRecordList = function() {
	$.getJSON("getRecordList",function(json){

		var arr = json.list;
		var astring = "<table class='table table-striped'>\
		<tr>\
			<th>选择</th>\
			<th>时间</th>\
			<th>加油站</th>\
			<th>当前公里表数</th>\
			<th>加油前油表数</th>\
			<th>加油数量</th>\
			<th>汽油标号</th>\
			<th>总价</th>\
		</tr>";
		for(var i=0,l=arr.length;i<l;i++){
			astring += "<tr>";
			
			astring += "<td><input type='radio' name='tdOptRadios' value='" + arr[i].rid + "'></td>";
			astring += "<td id='ytime'>" + arr[i].ytime + "</td>";
			astring += "<td id='location_str'>" + arr[i].location_str + "</td>";
			astring += "<td id='current_km'>" + arr[i].current_km + "</td>";
			astring += "<td id='gas_before'>" + arr[i].gas_before + "</td>";
			astring += "<td id='quantity'>" + arr[i].quantity + "</td>";
			astring += "<td id='gas_label'>" + arr[i].gas_label + "</td>";
			astring += "<td id='total_price'>" + arr[i].total_price + "</td>";
			
			astring += "</tr>";
		}
		astring += "</table>";
		$("#data_table").html(astring);
	});
}