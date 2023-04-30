<%--
    Document   : registroMascota
    Created on : 20 abr 2023, 15:16:49
    Author     : Zenith
--%>

<%@page import="java.util.List"%>
<%@page import="Modelo.Mascota"%>
<%@page import="Controles.AccionesDueño"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./CSS/registros.css" />
        <title>Editar datos de mascota</title>
    </head>

    <body>
        <div class="container">
            <br>
            <div class="mascotaRegistro">
                <h2>Cambia los datos de la Mascota</h2>
                <br>
                <form action="editarMascota" method="post" name="registroMascota" id="registrarMascota">

                    <%
                        int id = Integer.parseInt(request.getParameter("id"));

                        Mascota d = AccionesDueño.buscarMascota(id);
                    %>

                    <label>ID</label>
                    <input type="hidden" value="<%=d.getIdMascota()%>" name="id2">
                    <br>
                    <label>Nombre de tu mascota</label>
                    <br />
                    <input type="text" name="nomMascota2" id="nomMascota2" value="<%=d.getNombre()%>"/>
                    <br />
                    <label>Sexo de tu mascota</label>
                    <br />
                    <input type="text" name="sexoMascota2" id="sexoMascota2" value="<%=d.getSexo()%>"/>
                    <br />
                    <label>Fecha de nacimiento de tu mascota</label>
                    <br />
                    <input type="text" name="fechaNacMascota2" id="fechaNacMascota2" value="<%=d.getFecha_nac()%>"/>
                    <br />
                    <label>Tipo de pelaje de tu mascota</label>
                    <br />
                    <input type="text" name="pelajeMascota2" id="pelajeMascota2" value="<%=d.getPelaje()%>"/>
                    <br />
                    <label>Señas de tu mascota</label>
                    <br />
                    <input type="text" name="senasMascota2" id="senasMascota2" value="<%=d.getSeñas()%>" />
                    <br />
                    <input type="submit" value="Actualizar datos de mascota" id="register"/>
                </form>
            </div>
        </div>
    </body>
</html>
