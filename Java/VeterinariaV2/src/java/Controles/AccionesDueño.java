/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controles;

// Imports
import Modelo.Dueño;
import Modelo.Mascota;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Zenith
 */
public class AccionesDueño {

    /*
    The actions of the owner are:
    Todo: vinculate pet and owner
    Register himsel / owner --> Dueño e
    Edit / update pet information and owner information --> int id mascota/ dueño
    Search pet / owner by id --> int id mascota / dueño
    Verify user (Owner user) --> String correo & password del Dueño
     */
    // Register Owner
    public static int registrarDueño(Dueño e) {
        int status = 0;
        try {

            Connection con = Conexion.getConnection();
            String q = "insert into dueño(correo, nom, appat, apmat, dir, password) "
                    + "values(?,?,?,?,?,?)";

            PreparedStatement ps = con.prepareStatement(q);

            //Use getters and setters
            ps.setString(1, e.getCorreo());
            ps.setString(2, e.getNom());
            ps.setString(3, e.getAppat());
            ps.setString(4, e.getApmat());
            ps.setString(5, e.getDir());
            ps.setString(6, e.getPassword());

            status = ps.executeUpdate();

            System.out.println("Registro Exitoso del Dueno");

            con.close();

        } catch (Exception ed) {

            System.out.println("Error al registrar al dueño");
            System.out.println("Error:" + ed.getMessage());

        }
        return status;
    }

    // Getting the owners
    public static List<Dueño> consultaDueño() {
        List<Dueño> dueños = new ArrayList<Dueño>();

        try {

            Connection con = Conexion.getConnection();

            String q = "select * from dueño";

            PreparedStatement ps = con.prepareStatement(q);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Dueño e = new Dueño();
                e.setIdDueño(rs.getInt(1));
                e.setCorreo(rs.getString(2));
                e.setNom(rs.getString(3));
                e.setAppat(rs.getString(4));
                e.setApmat(rs.getString(5));
                e.setDir(rs.getString(6));
                e.setPassword(rs.getString(7));
                e.setIdMascota(rs.getInt(8));

                dueños.add(e);

            }
            System.out.println("Dueños obtenidos y agregados a la tabla");
            con.close();

        } catch (Exception ed) {
            System.out.println("Error al obtener las razas");
            System.out.println("ERROR: " + ed.getMessage());
        }
        return dueños;
    }

    // Editing owner information
    public static int editarDueño(Dueño e) {
        int status = 0;
        try {

            Connection con = Conexion.getConnection();
            String q = "update dueño set correo = ?, nom = ?,"
                    + "appat = ?,apmat = ?,dir = ?,password = ?"
                    + " where idDueño = ?";

            PreparedStatement ps = con.prepareStatement(q);

            //Use getters and setters
            ps.setString(1, e.getCorreo());
            ps.setString(2, e.getNom());
            ps.setString(3, e.getAppat());
            ps.setString(4, e.getApmat());
            ps.setString(5, e.getDir());
            ps.setString(6, e.getPassword());
            ps.setInt(7, e.getIdDueño());

            status = ps.executeUpdate();

            System.out.println("Datos del dueño cambiados");

            con.close();

        } catch (Exception ed) {

            System.out.println("Error al cambiar los datos del dueño");
            System.out.println("Error:" + ed.getMessage());

        }
        return status;
    }

    // Deleting Owner
    public static int eliminarDueño(int id) {
        int status = 0;
        try {
            Connection con = Conexion.getConnection();

            String q = "delete from dueño where idDueño = ?";

            PreparedStatement ps = con.prepareStatement(q);

            ps.setInt(1, id);

            status = ps.executeUpdate();

            System.out.println("Dueño eliminado");
            con.close();

        } catch (Exception ed) {
            System.out.println("Error al eliminar al Dueño");
            System.out.println("ERROR:" + ed.getMessage());
        }
        return status;
    }

    // Searching an specific owner
    public static Dueño buscarDueño(int id) {
        Dueño e = new Dueño();
        try {

            Connection con = Conexion.getConnection();
            String q = "select * from dueño where idDueño = ?";

            PreparedStatement ps = con.prepareStatement(q);

            //Use getters and setters
            ps.setInt(1, id);

            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                e.setIdDueño(rs.getInt(1));
                e.setCorreo(rs.getString(2));
                e.setNom(rs.getString(3));
                e.setAppat(rs.getString(4));
                e.setApmat(rs.getString(5));
                e.setDir(rs.getString(6));
                e.setPassword(rs.getString(7));
                e.setIdMascota(rs.getInt(8));

            }

            System.out.println("Se encontro al dueño");

            con.close();

        } catch (Exception ed) {

            System.out.println("Error al buscar al dueño");
            System.out.println("ERROR:" + ed.getMessage());

        }
        return e;
    }

    // Getting razas table
    public static List<Mascota> obtenerRazas() {
        List<Mascota> razas = new ArrayList<Mascota>();
        try {

            Connection con = Conexion.getConnection();

            String q = "select * from raza";

            PreparedStatement ps = con.prepareStatement(q);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Mascota e = new Mascota();
                e.setIdRaza(rs.getInt(1));
                e.setTipo_raza(rs.getString(2));

                razas.add(e);

            }

            System.out.println("Razas agregadas a la lista");
            con.close();

        } catch (Exception ed) {
            System.out.println("Error al obtener las razas");
            System.out.println("ERROR: " + ed.getMessage());
        }

        return razas;
    }

    // Getting especies table
    public static List<Mascota> obtenerEspecies() {
        List<Mascota> especies = new ArrayList<Mascota>();
        try {

            Connection con = Conexion.getConnection();

            String q = "select * from especie";

            PreparedStatement ps = con.prepareStatement(q);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Mascota e = new Mascota();
                e.setIdEspecie(rs.getInt(1));
                e.setTipo_especie(rs.getString(2));

                especies.add(e);

            }

            System.out.println("Especies agregadas a la lista");
            con.close();

        } catch (Exception ed) {
            System.out.println("Error al obtener las especies");
            System.out.println("ERROR: " + ed.getMessage());
        }

        return especies;
    }

    // Registing a new pet
    public static int nuevaMascota(Mascota e) {
        int status = 0;
        try {

            Connection con = Conexion.getConnection();
            String q = "insert into mascota(nombre, id_raza, id_especie, sexo, fecha_nac, pelaje, señas)"
                    + "values(?,?,?,?,?,?,?)";

            // Preparing the statements
            PreparedStatement ps = con.prepareStatement(q);

            //Setters and getters
            ps.setString(1, e.getNombre());
            ps.setInt(2, e.getIdRaza());
            ps.setInt(3, e.getIdEspecie());
            ps.setString(4, e.getSexo());
            ps.setString(5, e.getFecha_nac());
            ps.setString(6, e.getPelaje());
            ps.setString(7, e.getSeñas());

            // Sending to the status
            status = ps.executeUpdate();
            System.out.println("Registro de Mascota exitoso");

            /*// Updating the owner
            Dueño ed = new Dueño();
            String up = "update dueño set idMascota = last_insert_id()"
                    + " where nom=? and appat=? and apmat=?";

            PreparedStatement psud = con.prepareStatement(up);

            psud.setString(1, ed.getNom());
            psud.setString(2, ed.getAppat());
            psud.setString(3, ed.getApmat());

            status = psud.executeUpdate();*/
            con.close();

        } catch (Exception ed) {

            System.out.println("Error al registrar a la mascota");
            System.out.println("Error: " + ed.getMessage());

        }
        return status;
    }

    // Getting the pets
    public static List<Mascota> consultaMascota() {
        List<Mascota> mascotas = new ArrayList<Mascota>();

        try {

            Connection con = Conexion.getConnection();

            String q = "select * from mascota";

            PreparedStatement ps = con.prepareStatement(q);

            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Mascota e = new Mascota();

                e.setIdMascota(rs.getInt(1));
                e.setNombre(rs.getString(2));
                e.setIdRaza(rs.getInt(3));
                e.setIdEspecie(rs.getInt(4));
                e.setSexo(rs.getString(5));
                e.setFecha_nac(rs.getString(6));
                e.setPelaje(rs.getString(7));
                e.setSeñas(rs.getString(8));

                mascotas.add(e);
            }
            System.out.println("Mascotas obtenidas y agregadas a la tabla");
            con.close();

        } catch (Exception ed) {
            System.out.println("Error al obtener las razas");
            System.out.println("ERROR: " + ed.getMessage());
        }
        return mascotas;
    }

    // Editing pet's information
    public static int editarMascota(Mascota e) {
        int status = 0;
        try {

            Connection con = Conexion.getConnection();
            String q = "update mascota set nombre =?, sexo=?, fecha_nac=?, pelaje=?, señas=?"
                    + " where idMascota = ?";

            PreparedStatement ps = con.prepareStatement(q);

            //Use getters and setters
            ps.setString(1, e.getNombre());
            ps.setString(2, e.getSexo());
            ps.setString(3, e.getFecha_nac());
            ps.setString(4, e.getPelaje());
            ps.setString(5, e.getSeñas());
            ps.setInt(6, e.getIdMascota());

            status = ps.executeUpdate();

            System.out.println("Datos de la mascota cambiados");

            con.close();

        } catch (Exception ed) {

            System.out.println("Error al cambiar los datos de la mascota");
            System.out.println("Error:" + ed.getMessage());

        }
        return status;

    }

    // Deleting pet
    public static int eliminarMascota(int id) {
        int status = 0;
        try {
            Connection con = Conexion.getConnection();

            String q = "delete from mascota where idMascota = ?";

            PreparedStatement ps = con.prepareStatement(q);

            ps.setInt(1, id);

            status = ps.executeUpdate();

            System.out.println("Mascota eliminada");
            con.close();

        } catch (Exception ed) {
            System.out.println("Error al eliminar a la mascota");
            System.out.println("ERROR:" + ed.getMessage());
        }
        return status;

    }

    // Searching an specific pet
    public static Mascota buscarMascota(int id) {
        Mascota e = new Mascota();
        try {

            Connection con = Conexion.getConnection();
            String q = "select * from mascota where idMascota = ?";

            PreparedStatement ps = con.prepareStatement(q);

            //Use getters and setters
            ps.setInt(1, id);

            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                e.setIdMascota(rs.getInt(1));
                e.setNombre(rs.getString(2));
                e.setIdRaza(rs.getInt(3));
                e.setIdEspecie(rs.getInt(4));
                e.setSexo(rs.getString(5));
                e.setFecha_nac(rs.getString(6));
                e.setPelaje(rs.getString(7));
                e.setSeñas(rs.getString(8));

            }

            System.out.println("Se encontro a la mascota");

            con.close();

        } catch (Exception ed) {

            System.out.println("Error al buscar a la mascota");
            System.out.println("ERROR:" + ed.getMessage());

        }
        return e;
    }
}
