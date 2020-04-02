package com.issamdrmas.gestion.stock;

import com.issamdrmas.gestion.stock.model.*;
import com.issamdrmas.gestion.stock.repository.CommandRepository;
import com.issamdrmas.gestion.stock.repository.ProductRepository;
import com.issamdrmas.gestion.stock.repository.RoleRepository;
import com.issamdrmas.gestion.stock.repository.UserRepository;
import com.issamdrmas.gestion.stock.security.WebSecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ContextConfiguration;

import java.util.Date;

@EnableEurekaClient
@SpringBootApplication
public class GestionStockApplication {
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    CommandRepository commandRepository;
    @Autowired
    ProductRepository productRepository;

    public static void main(String[] args) {
        SpringApplication.run(GestionStockApplication.class, args);

        System.out.println("Started.....");
    }
    @Bean
    CommandLineRunner runner() {
        return args -> {
            //  roleRepository.deleteAll();
            Role adminRole = new Role(RoleName.ROLE_ADMIN);
            Role useRole = new Role(RoleName.ROLE_USER);
           // roleRepository.save(adminRole);
           // roleRepository.save(useRole);

            User user = new User("Marow", "marow123", "marow@gmail.com",
                    "$2a$10$3yuW5Kj7uUUp6cBzd6b53eQ.VaafoGPjk9D1JzLrdCkoEIJVqwcO2");
            Command command = new Command(new Date(), "Some Comments", user);
            Product product = new Product("Mobile",
                    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567812929188",
                    2,334.5, "Product description", command);

            command.addProduct(product);
            user.addCommand(command);
         //   userRepository.save(user);

        };
    }
}
