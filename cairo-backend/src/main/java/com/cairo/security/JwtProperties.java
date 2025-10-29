package com.cairo.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtProperties {
    @Value("${cairo.jwt.secret:dev-secret}")
    private String secret;
    @Value("${cairo.jwt.expiration:604800000}")
    private long expiration;

    public String getSecret() { return secret; }
    public long getExpiration() { return expiration; }
}
