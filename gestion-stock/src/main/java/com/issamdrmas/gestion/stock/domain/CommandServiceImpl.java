package com.issamdrmas.gestion.stock.domain;

import com.issamdrmas.gestion.stock.model.Command;
import com.issamdrmas.gestion.stock.model.Product;
import com.issamdrmas.gestion.stock.model.User;
import com.issamdrmas.gestion.stock.repository.CommandRepository;
import com.issamdrmas.gestion.stock.repository.ProductRepository;
import com.issamdrmas.gestion.stock.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class CommandServiceImpl implements CommandService {

    private final CommandRepository commandRepository;

    private final ProductRepository productRepository;

    @Autowired
    public CommandServiceImpl(CommandRepository commandRepository, ProductRepository productRepository) {
        this.commandRepository = commandRepository;
        this.productRepository = productRepository;
    }

    @Override
    public Command saveCommand(Command command, User user) {
        user.addCommand(command);
        return commandRepository.save(command);
    }

    @Override
    public Command updateCommand(Command newCommand, Command existCommand) {
       if (newCommand!=null && existCommand!=null) {
           existCommand.setCreateAt(newCommand.getCreateAt());
           existCommand.setComment(newCommand.getComment());
           return commandRepository.save(existCommand);
       }
       return null;
    }

    @Override
    public Product saveProduct(Product product, Command command) throws Exception {
        if (command.hasProduct(product.getName())){
           throw new Exception("Project name exist");
        }
        command.addProduct(product);
        return productRepository.save(product);
    }
}
