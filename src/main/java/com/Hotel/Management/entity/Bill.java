package com.Hotel.Management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="bills")
@Data
public class Bill {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="booking_id")
    private Booking booking;

    private double roomCharges;
    private double extraCharges;
    private double amount;
    private String paymentStatus; // PENDING, PAID
}