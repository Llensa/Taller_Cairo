package com.cairo.web;

import com.cairo.domain.Cliente;
import com.cairo.repo.ClienteRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
public class ClientesController {

    private final ClienteRepository repo;

    @GetMapping
    public List<Cliente> all() { return repo.findAll(); }

    @PostMapping
    public Cliente create(@Valid @RequestBody Cliente c) { return repo.save(c); }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> update(@PathVariable Long id, @Valid @RequestBody Cliente c) {
        return repo.findById(id).map(db -> {
            db.setNombre(c.getNombre());
            db.setTelefono(c.getTelefono());
            db.setEmail(c.getEmail());
            return ResponseEntity.ok(repo.save(db));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id); return ResponseEntity.noContent().build();
    }
}
