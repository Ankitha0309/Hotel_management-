package com.Hotel.Management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="guests")
@Data
public class Guest {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String address;
    private String idProof;  // Aadhar, Passport, etc.
    private String idNumber;
}