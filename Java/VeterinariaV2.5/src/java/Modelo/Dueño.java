/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelo;

/**
 *
 * @author Zenith
 */
public class Dueño {

    private int idDueño;
    private String correo;
    private String nom;
    private String appat;
    private String apmat;
    private String dir;
    private String password;
    private int idMascota;

    public Dueño() {
    }

    public Dueño(int idDueño, String correo, String nom, String appat, String apmat, String dir, String password, int idMascota) {
        this.idDueño = idDueño;
        this.correo = correo;
        this.nom = nom;
        this.appat = appat;
        this.apmat = apmat;
        this.dir = dir;
        this.password = password;
        this.idMascota = idMascota;
    }

    public int getIdDueño() {
        return idDueño;
    }

    public void setIdDueño(int idDueño) {
        this.idDueño = idDueño;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAppat() {
        return appat;
    }

    public void setAppat(String appat) {
        this.appat = appat;
    }

    public String getApmat() {
        return apmat;
    }

    public void setApmat(String apmat) {
        this.apmat = apmat;
    }

    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getIdMascota() {
        return idMascota;
    }

    public void setIdMascota(int idMascota) {
        this.idMascota = idMascota;
    }

}
