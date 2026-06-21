package com.Hotel.Management.controller;

import com.Hotel.Management.Repos.RoomRepository;
import com.Hotel.Management.Repos.BookingRepository;
import com.Hotel.Management.Repos.BillRepository;
import com.Hotel.Management.entity.Room;
import com.Hotel.Management.entity.Bill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private BillRepository billRepository;

    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();

        List<Room> rooms = roomRepository.findAll();
        long totalRooms = rooms.size();
        long availableRooms = rooms.stream()
                .filter(r -> "AVAILABLE".equalsIgnoreCase(r.getStatus()))
                .count();
        long occupiedRooms = totalRooms - availableRooms;

        long totalBookings = bookingRepository.count();

        List<Bill> bills = billRepository.findAll();
        double totalRevenue = bills.stream()
                .filter(b -> "PAID".equalsIgnoreCase(b.getPaymentStatus()))
                .mapToDouble(Bill::getAmount)
                .sum();
        double pendingRevenue = bills.stream()
                .filter(b -> "PENDING".equalsIgnoreCase(b.getPaymentStatus()))
                .mapToDouble(Bill::getAmount)
                .sum();

        stats.put("totalRooms", totalRooms);
        stats.put("availableRooms", availableRooms);
        stats.put("occupiedRooms", occupiedRooms);
        stats.put("totalBookings", totalBookings);
        stats.put("totalRevenue", totalRevenue);
        stats.put("pendingRevenue", pendingRevenue);

        return stats;
    }
}