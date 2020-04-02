package com.issamdrmas.gestion.stock.controller;

import com.issamdrmas.gestion.stock.app.ProductManager;
import com.issamdrmas.gestion.stock.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProductController {
    private final ProductManager productManager;

    @Autowired
    public ProductController(ProductManager productManager) {
        this.productManager = productManager;
    }

    @GetMapping("/findProductById/{id}")
    ProductDto findProductById(@PathVariable("id") Long id){
        return productManager.findProductById(id);
    }

    @PutMapping("/updateProduct/{id}")
    ProductDto updateProduct(@RequestBody ProductDto productDto, @PathVariable("id") Long id){
        return productManager.updateProduct(productDto, id);
    }

    @DeleteMapping("/deleteProduct/{id}")
    void deleteProduct(@PathVariable("id") Long id) {
        productManager.deleteProduct(id);
    }

    @GetMapping("/productNameExist/{idCommand}/name/{checkedName}")
    boolean productNameExist(@PathVariable("idCommand") Long idCommand, @PathVariable("checkedName") String checkedName) {
        return productManager.productNameExist(idCommand, checkedName);
    }
}
