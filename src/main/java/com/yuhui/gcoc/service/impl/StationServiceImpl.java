package com.yuhui.gcoc.service.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.apache.log4j.Logger;

import com.yuhui.gcoc.bean.Station;
import com.yuhui.gcoc.service.StationServiceI;

public class StationServiceImpl implements StationServiceI {
	
	private static Logger logger = Logger.getLogger(StationServiceImpl.class);  
	
	private DataSource dataSource ;

	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public List<Station> getStationList(){
		
		List<Station> list = new ArrayList<Station>();
		
		try {
			Connection con = dataSource.getConnection();
			Statement stmt = con.createStatement();
			String query = "select * from gcoc_gas_station";
			ResultSet rs=stmt.executeQuery(query);
			while(rs.next()){
				list.add(new Station((String)rs.getObject("name")));
			}
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
		}
		return list;
	}
}
