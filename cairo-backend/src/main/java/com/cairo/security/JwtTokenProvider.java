package com.cairo.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class JwtTokenProvider {

    private final JwtProperties props;

    public JwtTokenProvider(JwtProperties props) {
        this.props = props;
    }

    private Key key() { return Keys.hmacShaKeyFor(props.getSecret().getBytes()); }

    public String generateToken(UserDetails user) {
        String roles = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
        Date now = new Date();
        Date exp = new Date(now.getTime() + props.getExpiration());
        return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("roles", roles)
                .setIssuedAt(now)
                .setExpiration(exp)
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token).getBody().getSubject();
    }
}
