package com.jarvis.lakesidehotel.service;

import com.jarvis.lakesidehotel.exception.RoleAlreadyExistException;
import com.jarvis.lakesidehotel.exception.RoleNotFoundException;
import com.jarvis.lakesidehotel.exception.UserAlreadyExistsException;
import com.jarvis.lakesidehotel.exception.UserNotFoundException;
import com.jarvis.lakesidehotel.model.Role;
import com.jarvis.lakesidehotel.model.User;
import com.jarvis.lakesidehotel.repository.RoleRepository;
import com.jarvis.lakesidehotel.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

//import javax.management.relation.RoleNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService implements IRoleService {
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public Role createRole(Role theRole) {
        String roleName = "ROLE_" + theRole.getName().toUpperCase();
        Role role = new Role(roleName);

        if (roleRepository.existsByName(roleName)) {
            throw new RoleAlreadyExistException(theRole.getName() + " role already exists!");
        }
        return roleRepository.save(role);
    }

    @Override
    public void deleteRole(Long roleId) {
        this.removeAllUsersFromRole(roleId);
        roleRepository.deleteById(roleId);
    }

    @Override
    public Role findByName(String name) {
        return roleRepository.findByName(name).get();
    }

    @Override
    public User assignRoleToUser(Long userId, Long roleId) {
        Optional<User> user = userRepository.findById(userId);
        Optional<Role> role = roleRepository.findById(roleId);
        if (user.isPresent() && user.get().getRoles().contains(role.get())) {
            throw new UserAlreadyExistsException(user.get().getFirstName() + " is already assigned to the " + role.get().getName() + " role");
        }
        if (role.isPresent()) {
            role.get().assignRoleToUser(user.get());
            roleRepository.save(role.get());
        }
        return user.get();
    }

    @Override
    public User removeUserFromRole(Long userId, Long roleId) {
        Optional<User> user = userRepository.findById(userId);
        Optional<Role> role = roleRepository.findById(roleId);

        if (user.isEmpty()) {
            throw new UserNotFoundException("User not found!");
        }
        if (role.isEmpty()) {
            throw new RoleNotFoundException("Role not found!");
        }

        if (role.get().getUsers().contains(user.get())) {

            role.get().removeAllRolesFromUser(user.get());
            roleRepository.save(role.get());
        }
        return user.get();
    }


    @Override
    public Role removeAllUsersFromRole(Long roleId) {
        Optional<Role> role = roleRepository.findById(roleId);
        List<User> users = userRepository.findAll();

        if (role.isPresent()) {
            users.stream().forEach(user -> removeUserFromRole(user.getId(), roleId));
        } else {
            throw new RoleNotFoundException("Role not found!");
        }
        return null;
    }
}
