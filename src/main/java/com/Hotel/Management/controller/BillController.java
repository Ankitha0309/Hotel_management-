package com.Hotel.Management.controller;

import com.Hotel.Management.entity.Bill;
import com.Hotel.Management.Repos.BillRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bills")
public class BillController {

    @Autowired
    private BillRepository billRepository;

    @GetMapping
    public List<Bill> getAllBills() {
        return billRepository.findAll();
    }

    @PostMapping
    public Bill addBill(@RequestBody Bill bill) {
        return billRepository.save(bill);
    }

    @PutMapping("/{id}")
    public Bill updateBill(@PathVariable Long id, @RequestBody Bill updatedBill) {
        updatedBill.setId(id);
        return billRepository.save(updatedBill);
    }

    @DeleteMapping("/{id}")
    public void deleteBill(@PathVariable Long id) {
        billRepository.deleteById(id);
    }
}