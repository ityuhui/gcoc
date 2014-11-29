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

	public Map<String,List<Station>> dataMap = new HashMap<String,List<Station>>();
	
	public String getStationList(){
		List<Station> list = stationService.getStationList();
		dataMap.put("list", list);
		return "success";
	}
	
	public String addNewStation(){
		Station s = new Station("atest");
		stationService.addNewStation(s);
		return "success";
	}
}
