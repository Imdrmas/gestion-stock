package com.issamdrmas.gestion.stock.controller;

import com.issamdrmas.gestion.stock.app.CommandManager;
import com.issamdrmas.gestion.stock.app.ProductManager;
import com.issamdrmas.gestion.stock.dto.CommandDto;
import com.issamdrmas.gestion.stock.dto.ProductDto;
import com.issamdrmas.gestion.stock.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CommandController {

    private final CommandManager commandManager;

    @Autowired
    public CommandController(CommandManager commandManager) {
        this.commandManager = commandManager;
    }
    @GetMapping("/findCommandById/{id}")
    CommandDto findCommandById(@PathVariable("id") Long id) {
        return commandManager.findCommandById(id);
    }

    @PostMapping("/saveCommand/{idUser}")
    CommandDto saveCommand(@RequestBody CommandDto commandDto, @PathVariable("idUser") Long idUser) {
        return commandManager.saveCommand(commandDto, idUser);
    }
    @PutMapping("/updateCommand/{id}")
    CommandDto updateCommand(@RequestBody CommandDto commandDto, @PathVariable Long id) {
        return commandManager.updateCommand(commandDto, id);
    }
    @DeleteMapping("/deleteCommand/{id}")
    void deleteCommand(@PathVariable Long id) {
        commandManager.deleteCommand(id);
    }
    @PostMapping("/saveProduct/{idCommand}")
    ProductDto saveProduct(@RequestBody ProductDto productDto, @PathVariable("idCommand") Long idCommand) throws Exception {
        return commandManager.saveProduct(productDto, idCommand);
    }
    @GetMapping("/findAllCommandForUser/{idUser}")
    List<CommandDto> findAllCommandForUser(@PathVariable Long idUser) {
        return commandManager.findAllCommandForUser(idUser);
    }
}
