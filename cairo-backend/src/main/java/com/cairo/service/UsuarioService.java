package com.cairo.service;

import com.cairo.domain.Usuario;
import com.cairo.repo.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioService implements UserDetailsService {

    private final UsuarioRepository usuarios;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario u = usuarios.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("No existe usuario: " + username));
        // Mapeo de rol DB -> ROLE_*
        String role = "ROLE_" + ("administrador".equalsIgnoreCase(u.getRol()) ? "ADMIN" : "TRABAJADOR");
        return new User(u.getUsername(), u.getPasswordHash(), List.of(new SimpleGrantedAuthority(role)));
    }
}
