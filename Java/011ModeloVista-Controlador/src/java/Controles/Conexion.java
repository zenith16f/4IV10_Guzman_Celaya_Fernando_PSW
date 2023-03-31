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

        url = "jdbc:mysql://localhost:3306/alumnoscecyt9";
        //url = "jdbc:mysql://localhost:3308/alumnoscecyt9";
        username = "root";
        //password = "n0m3l0";
        password = "ZrFj16GC06#Ag";
        driver = "com.mysql.jdbc.Driver";

        Connection con = null;

        try {
            Class.forName(driver);
            con = DriverManager.getConnection(url, username, password);
            System.out.println("Se conecto a la bd");

        } catch (Exception e) {
            System.out.println("No se conecto solo juguito");
            System.out.println("Error: " + e.getMessage());

        }
        return con;
    }

}
