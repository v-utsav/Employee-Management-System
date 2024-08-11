package com.utsav.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utsav.ems.model_bean.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
