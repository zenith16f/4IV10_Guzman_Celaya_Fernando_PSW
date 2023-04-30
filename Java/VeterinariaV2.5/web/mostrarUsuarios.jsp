<%-- Document : mostrarDueños Created on : 21 abr 2023, 02:14:39 Author : Zenith
--%> <%@page import="java.util.List"%>
<%@page import="Controles.AccionesDueño"%>
<%@page import="Modelo.Dueño"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Dueños en el sistema</title>
    </head>
    <body>
        <h2>Dueños registrados</h2>
        <br />
        <table border="2" class="tabla__dueños">
            <thead class="tabla__header">
                <tr>
                    <th>ID</th>
                    <th>Correo</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Dirección</th>
                    <th>Password / Contraseña</th>
                    <th>ID Mascota</th>
                    <th class="vacio"></th>
                    <th class="vacio"></th>
                </tr>
            </thead>
            <tbody class="tabla__contenido">
                <%
                    List<Dueño> dueños = AccionesDueño.consultaDueño();
                    for (Dueño e : dueños) {

                %>

                <tr>
                    <td><%=e.getIdDueño()%></td>
                    <td><%=e.getCorreo()%></td>
                    <td><%=e.getNom()%></td>
                    <td><%=e.getAppat()%></td>
                    <td><%=e.getApmat()%></td>
                    <td><%=e.getDir()%></td>
                    <td><%=e.getPassword()%></td>
                    <td><%=e.getIdMascota()%></td>

                    <td><a href="editarDueño.jsp?id=<%=e.getIdDueño()%>">Editar</a></td>
                    <td><a href="borrarDueno?id=<%=e.getIdDueño()%>">Borrar</a></td>
                </tr>

                <%

                    }
                %>
            </tbody>
        </table>

        <br>
        <a href="mostrarMascotas.jsp">Consultar mascotas</a>
        <br>
        <a href="cuentaUsuario.jsp">Cuenta</a>
        <br>
        <a href="index.html">Regresar a Inicio</a>
    </body>
</html>
