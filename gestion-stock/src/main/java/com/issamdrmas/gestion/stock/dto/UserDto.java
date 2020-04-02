package com.issamdrmas.gestion.stock.dto;

import java.util.List;

public class UserDto {

    private Long id;

    private String name;

    private String username;

    private String email;

    private String password;

    private List<CommandDto> commands;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<CommandDto> getCommands() {
        return commands;
    }

    public void setCommands(List<CommandDto> commands) {
        this.commands = commands;
    }
}
