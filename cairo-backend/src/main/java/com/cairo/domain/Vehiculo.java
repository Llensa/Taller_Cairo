package com.cairo.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "vehiculos")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Vehiculo {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @Column(nullable = false, length = 10, unique = true)
    private String patente;

    @Column(nullable = false, length = 60)
    private String marca;

    @Column(nullable = false, length = 60)
    private String modelo;

    private Short anio;
}
