package com.Hotel.Management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="feedback")
@Data
public class Feedback {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String guestName;
    private int rating;  // 1 to 5
    private String comment;
}