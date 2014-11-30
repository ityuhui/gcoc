package com.yuhui.gcoc.service.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
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
				list.add(new Station((Integer)rs.getObject("id"),(String)rs.getObject("name")));
			}
			con.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
		}
		return list;
	}
	
	public boolean addNewStation(Station station){
		boolean ret = false;
		try {
			Connection conn = dataSource.getConnection();
			String sql = "insert into gcoc_gas_station (name) values ( ? ) ";
			PreparedStatement ps=conn.prepareStatement(sql);
			ps.setString(1, station.getName());
			
			int affectLine=ps.executeUpdate();
			if( affectLine>0 ){
				ret = true;
			}
			conn.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
		}		
		
		return ret;
	}
	
	public boolean updateStationInfo(Station station){
		boolean ret = false;
		try {
			Connection conn = dataSource.getConnection();
			String sql = "update gcoc_gas_station set name=? where id=?";
			PreparedStatement ps=conn.prepareStatement(sql);
			ps.setString(1, station.getName());
			ps.setInt(2, station.getSid());
			int affectLine=ps.executeUpdate();
			if( affectLine>0 ){
				ret = true;
			}
			conn.close();
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
		}	
		return ret;
	}
}
