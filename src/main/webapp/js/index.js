

$(document).ready(function(){
　　
	showGasConsumption();

});



var showGasConsumption = function() {
	$.getJSON("getRecordList",function(json){

		var arr = json.list;
		var astring = "<table class='table table-striped'>\
		<tr>\
			<th>时间</th>\
			<th>公里数</th>\
			<th>总油耗</th>\
			<th>平均油耗</th>\
			<th>每公里花费</th>\
			<th>总花费</th>\
		</tr>";
		for(var i=1,l=arr.length;i<l;i++){
			
			var sum_km = arr[i].current_km - arr[i-1].current_km ;
			var sum_gas = 0;
			var avg_gas = sum_gas / sum_km;
			var avg_cost = 0; 
			var sum_cost = 0;
			
			astring += "<tr>";

			astring += "<td id='ytime'>" + arr[i].ytime + "</td>";
			astring += "<td id='sum_km'>" + sum_km + "</td>";
			astring += "<td id='sum_gas'>" + sum_gas + "</td>";
			astring += "<td id='avg_gas'>" + avg_gas + "</td>";
			astring += "<td id='avg_cost'>" + avg_cost + "</td>";
			astring += "<td id='sum_cost'>" + sum_cost + "</td>";
			
			astring += "</tr>";
		}
		astring += "</table>";
		$("#data_table").html(astring);
	});
}