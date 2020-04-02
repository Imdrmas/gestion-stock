package com.issamdrmas.gestion.stock.app;

import com.issamdrmas.gestion.stock.dto.CommandDto;
import com.issamdrmas.gestion.stock.dto.ProductDto;
import com.issamdrmas.gestion.stock.model.Command;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public interface CommandManager {
    CommandDto findCommandById(Long id);
    CommandDto saveCommand(CommandDto commandDto, Long idUser);
    CommandDto updateCommand(CommandDto commandDto, Long id);
    void deleteCommand(Long id);
    ProductDto saveProduct(ProductDto productDto, Long idCommand) throws Exception;
    List<CommandDto> findAllCommandForUser(Long idUser);
}





















