package com.fullstack.repository;

import com.fullstack.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Employee findByEmpEmailIdAndEmpPassword(String empEmailId, String empPassword);
}
