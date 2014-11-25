package com.yuhui.gcoc.service.impl;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.apache.log4j.Logger;

import com.yuhui.gcoc.bean.Grecord;
import com.yuhui.gcoc.bean.Station;
import com.yuhui.gcoc.service.RecordServiceI;

public class RecordServiceImpl implements RecordServiceI {
	
	private static Logger logger = Logger.getLogger(RecordServiceImpl.class);  
	
	private DataSource dataSource ;

	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	@Override
	public List getRecordList() {
		List<Grecord> list = new ArrayList<Grecord>();
		
		try {
			Connection con = dataSource.getConnection();
			Statement stmt = con.createStatement();
			String query = "select r.id,r.ytime,r.current_km,r.gas_before,r.quantity,r.gas_label,r.total_price,s.name as station_str "
							+ "from gcoc_record r,gcoc_gas_station s where r.location_id = s.id order by ytime ";
			ResultSet rs=stmt.executeQuery(query);
			while(rs.next()){
				Grecord rcd = new Grecord(
						(int)rs.getObject("id"),
				  (Timestamp)rs.getObject("ytime"),
					 (String)rs.getObject("station_str"),
						(int)rs.getObject("current_km"),
						(int)rs.getObject("gas_before"),
						(int)rs.getObject("quantity"),
						(int)rs.getObject("gas_label"),
				 (BigDecimal)rs.getObject("total_price")
						);
				list.add(rcd);
			}
		} catch (SQLException e) {
			logger.error(e.getMessage());
			e.printStackTrace();
		}
		return list;
	}

}
