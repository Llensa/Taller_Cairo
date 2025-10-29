package com.cairo.web;

import com.cairo.security.JwtTokenProvider;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authManager;
    private final JwtTokenProvider jwtProvider;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(auth);
        String token = jwtProvider.generateToken((UserDetails) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponse(token, req.getUsername()));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me() {
        Authentication a = SecurityContextHolder.getContext().getAuthentication();
        if (a == null || !a.isAuthenticated()) return ResponseEntity.status(401).build();
        return ResponseEntity.ok(a.getPrincipal());
    }

    @Data
    public static class LoginRequest { @NotBlank private String username; @NotBlank private String password; }
    public record LoginResponse(String token, String username) {}
}
