package com.issamdrmas.gestion.stock.domain;

import com.issamdrmas.gestion.stock.model.Product;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {
    Product updateProduct(Product newProduct, Product existProduct);

}
