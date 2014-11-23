package com.yuhui.gcoc.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yuhui.gcoc.service.StationServiceI;

public class StationAction {
	
	private StationServiceI stationService; 
	
	public StationServiceI getStationService() {
		return stationService;
	}

	public void setStationService(StationServiceI stationService) {
		this.stationService = stationService;
	}

	public Map<String,List> dataMap = new HashMap<String,List>();
	
	public String getStationList(){
		List list = stationService.getStationList();
		dataMap.put("list", list);
		return "success";
	}
}
