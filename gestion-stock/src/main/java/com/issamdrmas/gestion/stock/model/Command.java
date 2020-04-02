package com.issamdrmas.gestion.stock.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "command")
public class Command {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createAt;

    private String comment;

    @JsonBackReference
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "command")
    private List<Product> products;

    @JsonManagedReference
    @ManyToOne
    private User user;

    public Command() {
    }

    public Command(Date createAt, String comment, List<Product> products, User user) {
        this.createAt = createAt;
        this.products = products;
        this.comment = comment;
        this.user = user;
    }

    public Command(Date createAt, String comment, User user) {
        this.createAt = createAt;
        this.comment = comment;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    public void addProduct(Product product) {
        if (getProducts()==null) {
            this.products = new ArrayList<>();
        }
        getProducts().add(product);
        product.setCommand(this);
    }
    public void removeProduct(Product product) {
        if (getProducts()!=null) {
            getProducts().remove(product);
        }
    }
    public boolean hasProduct(String name) {
        if (getProducts()!=null) {
            return getProducts().stream()
                    .filter(p -> p.getName().toLowerCase().equals(name.toLowerCase()))
                    .findAny().orElse(null)!=null;
        } else {
            return false;
        }
    }
}
