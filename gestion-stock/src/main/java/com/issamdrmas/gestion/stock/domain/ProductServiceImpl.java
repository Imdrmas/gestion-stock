package com.issamdrmas.gestion.stock.domain;

import com.issamdrmas.gestion.stock.model.Product;
import com.issamdrmas.gestion.stock.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product updateProduct(Product newProduct, Product existProduct) {
        if (newProduct!=null && existProduct!=null) {
            existProduct.setName(newProduct.getName());
            existProduct.setDescription(newProduct.getDescription());
            existProduct.setPhoto(newProduct.getPhoto());
            existProduct.setPrice(newProduct.getPrice());
            existProduct.setQuantity(newProduct.getQuantity());
            return productRepository.save(existProduct);
        }
        return null;
    }
}
