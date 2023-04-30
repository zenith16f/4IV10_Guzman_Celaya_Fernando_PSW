/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Controles;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 * @author Zenith
 */
public class Conexion {

    public static Connection getConnection() {
        String url, username, password, driver;

        url = "jdbc:mysql://localhost:3306/veterinaria";
        // url ="jdbc:mysql://localhost:3308/veterinaria";
        username = "root";
        password = "ZrFj16GC06#Ag";
        //password = "n0m3l0";

        Connection con = null;

        try {

            driver = "com.mysql.cj.jdbc.Driver";

            Class.forName(driver);
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Conexion exitosa con la DB");

        } catch (Exception e) {

            System.out.println("Error al conectar la BD");
            System.out.println("Error: " + e.getLocalizedMessage());

        }
        return con;
    }
}
