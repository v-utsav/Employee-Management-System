package com.utsav.ems.model_bean;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name="employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long Id;
	
	@Column(name = "first_name", nullable = false)
	private String fname;
	
	@Column(name = "last_name", nullable = false)
	private String lname;
	
	@Column(name = "email", nullable = false)
	private String email;

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	
}
