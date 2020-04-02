package com.issamdrmas.gestion.stock.repository;

import com.issamdrmas.gestion.stock.model.Command;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommandRepository extends JpaRepository<Command, Long> {
}
