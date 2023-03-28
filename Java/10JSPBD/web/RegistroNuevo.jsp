<%--
    Document   : RegistroNuevo
    Created on : 27 mar 2023, 19:33:36
    Author     : fer_1
--%>

<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page contentType="text/html" language="java"
        import="java.io.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Pagina de Registro</title>
    </head>
    <body>
        <h1>Bienvenido</h1>
        <%
            // Aqui se encuentra el codigo java
            Connection con = null;
            Statement set = null;
            ResultSet rs = null;

            String username, password, url, driver;

            url = "jdbc:mysql://localhost:3306/alumnoscecyt9";
            //url = "jdbc:mysql://localhost:3308/alumnoscecyt9";
            username = "root";
            //password = "n0m3l0";
            password = "ZrFj16GC06#Ag";
            driver = "com.mysql.cj.jdbc.Driver";

            try {
                // Vamos a intenter conectarnos a la BD
                Class.forName(driver);
                // Establezco conecxion con BD
                con = DriverManager.getConnection(url, username, password);

                // Ahora vamos a obtener los parametros para poder insertar en la BD
                try {
                    String nom, apPat, apMat, tel, edad;

                    nom = request.getParameter("nom");
                    apPat = request.getParameter("apPat");
                    apMat = request.getParameter("apMat");
                    tel = request.getParameter("telefono");
                    edad = request.getParameter("edad");

                    String q = "Insert into"
                            + " alumnos(nom, apPat, apMat, tel, edad)"
                            + " values ('" + nom + "', '" + apPat + "', '" + apMat + "', '" + tel + "', '" + edad + "')";

                    set = con.createStatement();

                    int registro = set.executeUpdate(q);

        %>

        <h1>Registro Exitoso</h1>

        <%} catch (SQLException ex) {
                System.out.println("Error en SQL");
                System.out.println("Error: " + ex.getMessage());
                System.out.println("Error: " + ex.getStackTrace());
            }
        %>

        <h1>No pudo registrar en tabla</h1>

        <%
            } catch (Exception e) {
                System.out.println("Error en SQL");
                System.out.println("Error: " + e.getMessage());
                System.out.println("Error: " + e.getStackTrace());
            }
        %>

        <h1>No conecta a la BD</h1>

        <%

        %>
        <a href="index.html"> Regresar a la pagina principal</a>
    </body>
</html>

