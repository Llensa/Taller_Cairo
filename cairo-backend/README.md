# Cairo Backend (ajustado al esquema SQL)

Se conecta a las tablas existentes: `clientes`, `vehiculos`, `empleados`, `usuarios`.
- **Auth** lee `usuarios.username`, `usuarios.password_hash`, `usuarios.rol`.
- Para probar rápido, podés poner `{noop}admin123` en `usuarios.password_hash`.

## Configuración
Edita `src/main/resources/application.yml` con tu usuario/clave MySQL.

## Correr
```bash
mvn spring-boot:run
```

## Endpoints
- `POST /auth/login` → `{ username, password }` → `{ token, username, role }`
- `GET /auth/me`
- `GET/POST/PUT/DELETE /api/clientes`
- `GET/POST/PUT/DELETE /api/vehiculos`

Autorización: `Authorization: Bearer <token>`.
