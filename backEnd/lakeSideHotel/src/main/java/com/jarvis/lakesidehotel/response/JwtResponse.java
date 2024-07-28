package com.jarvis.lakesidehotel.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
public class JwtResponse {
    private Long Id;
    private String email;
    private String token;
    private String type = "Bearer";
    private List<String> roles;

    
    public JwtResponse(Long id, String email, String token, List<String> roles) {
        Id = id;
        this.email = email;
        this.token = token;
        this.roles = roles;
    }

}
