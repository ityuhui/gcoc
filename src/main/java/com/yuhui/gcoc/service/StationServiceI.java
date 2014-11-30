package com.yuhui.gcoc.service;

import java.util.List;

import com.yuhui.gcoc.bean.Station;

public interface StationServiceI {
	public List<Station> getStationList();
	public boolean addNewStation(Station s);
	public boolean updateStationInfo(Station s);
}
