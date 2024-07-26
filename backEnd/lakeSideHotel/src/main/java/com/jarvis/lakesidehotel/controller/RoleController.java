package com.jarvis.lakesidehotel.controller;

import com.jarvis.lakesidehotel.exception.InvalidBookingRequestException;
import com.jarvis.lakesidehotel.exception.RoleAlreadyExistException;
import com.jarvis.lakesidehotel.exception.RoleNotFoundException;
import com.jarvis.lakesidehotel.exception.UserAlreadyExistsException;
import com.jarvis.lakesidehotel.model.BookedRoom;
import com.jarvis.lakesidehotel.model.Role;
import com.jarvis.lakesidehotel.model.User;
import com.jarvis.lakesidehotel.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.FOUND;

@RestController
@RequestMapping("/roles")
@RequiredArgsConstructor
@CrossOrigin
public class RoleController {
    private final RoleService roleService;

    @GetMapping("/all-role")
    public ResponseEntity<List<Role>> getAllRoles() {
        return new ResponseEntity<>(roleService.getRoles(), FOUND);
    }

    @PostMapping("/create-new-role")
    public ResponseEntity<String> createRole(@RequestBody Role role) {
        try {
            roleService.createRole(role);
            return ResponseEntity.ok("New role created successfully");
        } catch (RoleAlreadyExistException exception) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(exception.getMessage());
        }
    }

    @DeleteMapping("/delete/{roleId}")
    public ResponseEntity<String> deleteRole(@PathVariable("roleId") Long roleId) {
        try {
            roleService.deleteRole(roleId);
            return ResponseEntity.ok("Role deleted successfully");
        } catch (RoleNotFoundException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @PostMapping("/remove-all-users-from-role/{roleId}")
    public ResponseEntity<String> removeAllUsersFromRole(@PathVariable("roleId") Long roleId) {
        try {
            roleService.removeAllUsersFromRole(roleId);
            return ResponseEntity.ok("All users removed!");
        } catch (RoleNotFoundException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @PostMapping("/remove-user-from-role")
    public User removeUserFromRole(@RequestParam Long userId, @RequestParam Long roleId) {
        return roleService.removeUserFromRole(userId, roleId);
    }

    @PostMapping("/assign-role-to-user")
    public ResponseEntity<String> assignRoleToUser(@RequestParam Long userId, @RequestParam Long roleId) {
        try {
            roleService.assignRoleToUser(userId, roleId);
            return ResponseEntity.ok("Role added successfully to user!");
        } catch (UserAlreadyExistsException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
