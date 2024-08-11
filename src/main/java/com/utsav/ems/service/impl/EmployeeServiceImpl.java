package com.utsav.ems.service.impl;



import java.util.List;

import org.springframework.stereotype.Service;

import com.utsav.ems.exception.ResourceNotFoundException;
import com.utsav.ems.model_bean.Employee;
import com.utsav.ems.repository.EmployeeRepository;
import com.utsav.ems.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	private EmployeeRepository employeeRepository;
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		super();
		this.employeeRepository = employeeRepository;
	}



	@Override
	public Employee saveEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}



	@Override
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}



	@Override
	public Employee getEmployeeById(long id) {
		return employeeRepository.findById(id).orElseThrow(() ->
					new ResourceNotFoundException("Employee", "Id", id));
		
	}



	@Override
	public Employee updateEmployee(Employee employee, long id) {
		Employee existingEmployee = employeeRepository.findById(id).orElseThrow(() ->
					new ResourceNotFoundException("Employee", "Id", id));
		existingEmployee.setFname(employee.getFname());
		existingEmployee.setLname(employee.getLname());
		existingEmployee.setEmail(employee.getEmail());
		
		employeeRepository.save(existingEmployee);
		return existingEmployee;
	}



	@Override
	public void deleteEmployee(long id) {
		employeeRepository.findById(id).orElseThrow(() -> 
					new ResourceNotFoundException("Employee", "Id",	id));
		employeeRepository.deleteById(id);
		
	}

}
