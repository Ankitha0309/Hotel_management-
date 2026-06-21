package com.Hotel.Management.Repos;

import com.Hotel.Management.entity.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BillRepository extends JpaRepository<Bill, Long> {
}