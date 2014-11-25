

$(document).ready(function(){
　　
	showGasConsumption();

});



var showGasConsumption = function() {
	$.getJSON("getRecordList",function(json){

		var arr = json.list;
		var astring = "<table class='table table-striped'>\
		<tr>\
			<th>时间</th>\
			<th>总里程(km)</th>\
			<th>总油耗(L)</th>\
			<th>平均油耗(L/km)</th>\
			<th>油价(RMB Yuan/L)</th>\
			<th>每公里花费(RMB Yuan/KM)</th>\
			<th>总花费(RMB Yuan)</th>\
		</tr>";
		for(var i=1,l=arr.length;i<l;i++){
			
			var sum_km = arr[i].current_km - arr[i-1].current_km ;
			var sum_gas = arr[i-1].gas_before + arr[i-1].quantity - arr[i].gas_before;
			var avg_gas = sum_gas / sum_km;
			var sum_cost = arr[i-1].total_price;
			var avg_cost = sum_cost / sum_km; 
			var unit_gas = arr[i-1].total_price / arr[i-1].quantity;
			
			astring += "<tr>";

			astring += "<td id='ytime'>" + arr[i].ytime + "</td>";
			astring += "<td id='sum_km'>" + sum_km + "</td>";
			astring += "<td id='sum_gas'>" + sum_gas + "</td>";
			astring += "<td id='avg_gas'>" + avg_gas + "</td>";
			astring += "<td id='unit_gas'>" + unit_gas + "</td>";
			astring += "<td id='avg_cost'>" + avg_cost + "</td>";
			astring += "<td id='sum_cost'>" + sum_cost + "</td>";
			
			astring += "</tr>";
		}
		astring += "</table>";
		$("#data_table").html(astring);
	});
}