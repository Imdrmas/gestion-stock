package com.issamdrmas.gestion.stock.app;

import com.issamdrmas.gestion.stock.OrikaBeanMapper;
import com.issamdrmas.gestion.stock.domain.CommandService;
import com.issamdrmas.gestion.stock.dto.CommandDto;
import com.issamdrmas.gestion.stock.dto.ProductDto;
import com.issamdrmas.gestion.stock.model.Command;
import com.issamdrmas.gestion.stock.model.Product;
import com.issamdrmas.gestion.stock.model.User;
import com.issamdrmas.gestion.stock.repository.CommandRepository;
import com.issamdrmas.gestion.stock.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CommandManagerImpl implements CommandManager {

    private final CommandService commandService;

    private final OrikaBeanMapper orikaBeanMapper;

    private final CommandRepository commandRepository;

    private final UserRepository userRepository;

    @Autowired
    public CommandManagerImpl(CommandService commandService, OrikaBeanMapper orikaBeanMapper,
                              CommandRepository commandRepository, UserRepository userRepository) {
        this.commandService = commandService;
        this.orikaBeanMapper = orikaBeanMapper;
        this.commandRepository = commandRepository;
        this.userRepository = userRepository;
    }

    @Override
    public CommandDto findCommandById(Long id) {
        return orikaBeanMapper.convertDTO(commandRepository.getOne(id), CommandDto.class);
    }

    @Override
    public CommandDto saveCommand(CommandDto commandDto, Long idUser) {
        User user = userRepository.findById(idUser).orElse(null);
        Command command = orikaBeanMapper.map(commandDto, Command.class);
        return orikaBeanMapper.convertDTO(commandService.saveCommand(command, user), CommandDto.class);
    }

    @Override
    public CommandDto updateCommand(CommandDto commandDto, Long id) {
        Command commandExist = commandRepository.getOne(id);
        Command commandNew = orikaBeanMapper.map(commandDto, Command.class);
        return orikaBeanMapper.convertDTO(commandService.updateCommand(commandNew, commandExist), CommandDto.class);
    }

    @Override
    public void deleteCommand(Long id) {
       Command command = commandRepository.getOne(id);
       if (command!=null) {
           commandRepository.delete(command);
       }
    }

    @Override
    public ProductDto saveProduct(ProductDto productDto, Long idCommand) throws Exception {
        Command command = commandRepository.getOne(idCommand);
        Product product = orikaBeanMapper.map(productDto, Product.class);
        return orikaBeanMapper.convertDTO(commandService.saveProduct(product, command), ProductDto.class);
    }

    @Override
    public List<CommandDto> findAllCommandForUser(Long idUser) {
        List<Command> commands = userRepository.getOne(idUser)
        .getCommands().stream().sorted(Comparator.comparing(Command::getCreateAt)).collect(Collectors.toList());
        return orikaBeanMapper.convertListDTO(commands, CommandDto.class);
    }
}
