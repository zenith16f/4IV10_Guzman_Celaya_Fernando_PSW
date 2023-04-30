/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;

/**
 *
 * @author Zenith
 */
public class Mascota {

    private int idMascota;
    private String nombre;
    private int idRaza;
    private int idEspecie;
    private String sexo;
    private String fecha_nac;
    private String pelaje;
    private String señas;
    private String tipo_raza;
    private String tipo_especie;

    public Mascota() {
    }

    public Mascota(int idMascota, String nombre, int idRaza, int idEspecie,
            String sexo, String fecha_nac, String pelaje, String señas,
            String tipo_raza, String tipo_especie) {
        this.idMascota = idMascota;
        this.nombre = nombre;
        this.idRaza = idRaza;
        this.idEspecie = idEspecie;
        this.sexo = sexo;
        this.fecha_nac = fecha_nac;
        this.pelaje = pelaje;
        this.señas = señas;
        this.tipo_raza = tipo_raza;
        this.tipo_especie = tipo_especie;
    }

    public String getTipo_raza() {
        return tipo_raza;
    }

    public void setTipo_raza(String tipo_raza) {
        this.tipo_raza = tipo_raza;
    }

    public String getTipo_especie() {
        return tipo_especie;
    }

    public void setTipo_especie(String tipo_especie) {
        this.tipo_especie = tipo_especie;
    }

    public int getIdMascota() {
        return idMascota;
    }

    public void setIdMascota(int idMascota) {
        this.idMascota = idMascota;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getIdRaza() {
        return idRaza;
    }

    public void setIdRaza(int idRaza) {
        this.idRaza = idRaza;
    }

    public int getIdEspecie() {
        return idEspecie;
    }

    public void setIdEspecie(int idEspecie) {
        this.idEspecie = idEspecie;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getFecha_nac() {
        return fecha_nac;
    }

    public void setFecha_nac(String fecha_nac) {
        this.fecha_nac = fecha_nac;
    }

    public String getPelaje() {
        return pelaje;
    }

    public void setPelaje(String pelaje) {
        this.pelaje = pelaje;
    }

    public String getSeñas() {
        return señas;
    }

    public void setSeñas(String señas) {
        this.señas = señas;
    }

}
