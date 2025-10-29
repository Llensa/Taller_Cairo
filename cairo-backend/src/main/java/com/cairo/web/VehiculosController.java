package com.cairo.web;

import com.cairo.domain.Cliente;
import com.cairo.domain.Vehiculo;
import com.cairo.repo.ClienteRepository;
import com.cairo.repo.VehiculoRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehiculos")
@RequiredArgsConstructor
public class VehiculosController {

    private final VehiculoRepository repo;
    private final ClienteRepository clientes;

    @GetMapping
    public List<Vehiculo> all() { return repo.findAll(); }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody VehiculoRequest v) {
        if (repo.existsByPatente(v.patente())) return ResponseEntity.badRequest().body("Patente ya existe");
        Cliente c = clientes.findById(v.clienteId()).orElse(null);
        if (c == null) return ResponseEntity.badRequest().body("Cliente inexistente");
        Vehiculo nv = Vehiculo.builder()
                .cliente(c).patente(v.patente()).marca(v.marca()).modelo(v.modelo()).anio(v.anio())
                .build();
        return ResponseEntity.ok(repo.save(nv));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody VehiculoRequest v) {
        return repo.findById(id).map(db -> {
            Cliente c = clientes.findById(v.clienteId()).orElse(null);
            if (c == null) return ResponseEntity.badRequest().body("Cliente inexistente");
            db.setCliente(c); db.setPatente(v.patente()); db.setMarca(v.marca()); db.setModelo(v.modelo()); db.setAnio(v.anio());
            return ResponseEntity.ok(repo.save(db));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) return ResponseEntity.notFound().build();
        repo.deleteById(id); return ResponseEntity.noContent().build();
    }

    public record VehiculoRequest(Long clienteId, String patente, String marca, String modelo, Short anio) {}
}
