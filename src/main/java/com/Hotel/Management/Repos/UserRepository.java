package com.Hotel.Management.Repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Hotel.Management.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
Optional<User> findByUsername(String username);
}
