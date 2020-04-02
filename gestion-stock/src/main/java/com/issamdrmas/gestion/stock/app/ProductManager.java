package com.issamdrmas.gestion.stock.app;

import com.issamdrmas.gestion.stock.dto.ProductDto;
import org.springframework.stereotype.Service;

@Service
public interface ProductManager {

    ProductDto findProductById(Long id);

    ProductDto updateProduct(ProductDto productDto, Long id);

    void deleteProduct(Long id);

    boolean productNameExist(Long idCommand, String checkedName);
}
