package com.yuhui.gcoc.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.yuhui.gcoc.service.RecordServiceI;

public class RecordAction {
	
	private RecordServiceI recordService; 
	
	public RecordServiceI getRecordService() {
		return recordService;
	}

	public void setRecordService(RecordServiceI recordService) {
		this.recordService = recordService;
	}

	public Map<String,List> dataMap = new HashMap<String,List>();
	
	public String getRecordList(){
		List list = recordService.getRecordList();
		dataMap.put("list", list);
		return "success";
	}

}
