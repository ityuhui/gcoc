package com.yuhui.gcoc.bean;

public class Station {
	private int sid;
	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	private String name;
	
	public Station(){
		
	}
	
	public Station(int sid,String name){
		setSid(sid);
		setName(name);
	}
	
	public Station(String name){
		setSid(-1);
		setName(name);
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
