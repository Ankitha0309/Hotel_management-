package com.Hotel.Management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="staff")
@Data
public class Staff {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;     // RECEPTIONIST, MANAGER, HOUSEKEEPING, etc.
    private String shift;    // MORNING, EVENING, NIGHT
    private String phone;
}