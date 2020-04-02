package com.issamdrmas.gestion.stock.domain;

import com.issamdrmas.gestion.stock.model.Command;
import com.issamdrmas.gestion.stock.model.Product;
import com.issamdrmas.gestion.stock.model.User;
import org.springframework.stereotype.Service;

@Service
public interface CommandService {
    Command saveCommand(Command command, User user);
    Command updateCommand(Command newCommand, Command existCommand);
    Product saveProduct(Product product, Command command) throws Exception;
}
