package com.jarvis.lakesidehotel.service;

import com.jarvis.lakesidehotel.model.User;


import java.util.List;

public interface IUserService {
    User registerUser(User user);

    List<User> getAllUsers();

    void deleteUser(String email);

    User getUser(String email);
}
