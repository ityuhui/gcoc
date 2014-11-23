package com.yuhui.gcoc.bean;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class Grecord {
	private int rid;
	private Timestamp ytime;
	private String location_str;
	public String getLocation_str() {
		return location_str;
	}


	public void setLocation_str(String location_str) {
		this.location_str = location_str;
	}
	private int current_km;
	private int gas_before;
	private int quantity;
	private int gas_label;
	private BigDecimal total_price;
	
	public Grecord(int rid,Timestamp ytime,String location_str,int current_km,int gas_before,int quantity,int gas_label,BigDecimal total_price){

	}
	
	
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public Timestamp getYtime() {
		return ytime;
	}
	public void setYtime(Timestamp ytime) {
		this.ytime = ytime;
	}
	public int getCurrent_km() {
		return current_km;
	}
	public void setCurrent_km(int current_km) {
		this.current_km = current_km;
	}
	public int getGas_before() {
		return gas_before;
	}
	public void setGas_before(int gas_before) {
		this.gas_before = gas_before;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getGas_label() {
		return gas_label;
	}
	public void setGas_label(int gas_label) {
		this.gas_label = gas_label;
	}
	public BigDecimal getTotal_price() {
		return total_price;
	}
	public void setTotal_price(BigDecimal total_price) {
		this.total_price = total_price;
	}

}
