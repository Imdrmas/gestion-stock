package com.issamdrmas.gestion.stock.app;

import com.issamdrmas.gestion.stock.OrikaBeanMapper;
import com.issamdrmas.gestion.stock.domain.ProductService;
import com.issamdrmas.gestion.stock.dto.ProductDto;
import com.issamdrmas.gestion.stock.model.Command;
import com.issamdrmas.gestion.stock.model.Product;
import com.issamdrmas.gestion.stock.repository.CommandRepository;
import com.issamdrmas.gestion.stock.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProductManagerImpl implements ProductManager {

    private final ProductRepository productRepository;

    private final OrikaBeanMapper orikaBeanMapper;

    private final ProductService productService;

    private final CommandRepository commandRepository;

    @Autowired
    public ProductManagerImpl(ProductRepository productRepository, OrikaBeanMapper orikaBeanMapper,
                              ProductService productService, CommandRepository commandRepository) {
        this.productRepository = productRepository;
        this.orikaBeanMapper = orikaBeanMapper;
        this.productService = productService;
        this.commandRepository = commandRepository;
    }

    @Override
    public ProductDto findProductById(Long id) {
        return orikaBeanMapper.convertDTO(productRepository.getOne(id), ProductDto.class);
    }

    @Override
    public ProductDto updateProduct(ProductDto productDto, Long id) {
        Product productExist = productRepository.getOne(id);
        Product productNew = orikaBeanMapper.map(productDto, Product.class);
        return orikaBeanMapper.convertDTO(productService.updateProduct(productNew, productExist), ProductDto.class);
    }

    @Override
    public void deleteProduct(Long id) {
        Product productExist = productRepository.getOne(id);
        if (productExist!=null) {
            productRepository.delete(productExist);
        }
    }

    @Override
    public boolean productNameExist(Long idCommand, String checkedName) {
        Command command = commandRepository.getOne(idCommand);
        return command.getProducts().stream().anyMatch(product -> product.getName().toLowerCase()
                .equals(checkedName.toLowerCase()));
    }
}
