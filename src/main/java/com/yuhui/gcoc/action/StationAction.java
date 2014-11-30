package com.yuhui.gcoc.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yuhui.gcoc.bean.Station;
import com.yuhui.gcoc.service.StationServiceI;

public class StationAction {
	
	private StationServiceI stationService; 
	
	public StationServiceI getStationService() {
		return stationService;
	}

	public void setStationService(StationServiceI stationService) {
		this.stationService = stationService;
	}
	
	private Station station;

	public Station getStation() {
		return station;
	}

	public void setStation(Station station) {
		this.station = station;
	}

	public Map<String,List<Station>> dataMap = new HashMap<String,List<Station>>();
	
	public Map<String,String> resMap = new HashMap<String,String>();
	
	public String getStationList(){
		List<Station> list = stationService.getStationList();
		dataMap.put("list", list);
		return "success";
	}
	
	public String addNewStation(){

		boolean result = stationService.addNewStation(station);
		String res = "fail";
		if(result){
			res = "success";
		}
		resMap.put("result", res);
		return "success";
	}
}
