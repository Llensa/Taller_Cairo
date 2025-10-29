package com.cairo.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "empleados")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Empleado {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120)
    private String nombre;

    @Column(nullable = false, length = 20)
    private String rol; // 'mecanico','admin','recepcion'

    @Column(nullable = false)
    private Boolean activo = true;
}
