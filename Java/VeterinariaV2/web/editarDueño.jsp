<%--
    Document   : editarDueño
    Created on : 22 abr 2023, 22:57:39
    Author     : Zenith
--%>

<%@page import="Modelo.Dueño"%>
<%@page import="Controles.AccionesDueño"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="en">
    <head>
        <link rel="stylesheet" href="./CSS/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
        <link rel="icon" href="./IMG/logotype.png">
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./CSS/registros.css" />
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
            integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        ></script>
        <title>Actualizacion de datos de Usuario</title>
    </head>

    <body>
        <div class="menu__bar">
            <ul>
                <img src="./IMG/logotype.png" alt="logotype">
                <li><a href="./index.html">Inicio</a></li>
                <li><a href="#">Iniciar sesion</a></li>
                <li><a href="cuentaUsuario.jsp">Cuenta</a></li>
                <li><a href="./registro.html">Registrarse</a></li>
                <li><a href="registroMascota.jsp">Registro de mascota</a></li>
                <li><a href="#">Agendar cita</a></li>
            </ul>
        </div>
        <div class="container">
            <br />
            <div class="registroUsuario">
                <h2>Actualizacion de datos del Usuario / Dueño</h2>
                <form method="post" name="registroUsuario" action="editarUsuario">
                    <%
                        int id = Integer.parseInt(request.getParameter("id"));

                        Dueño e = AccionesDueño.buscarDueño(id);
                    %>
                    <label>ID</label>
                    <input type="hidden" value="<%=e.getIdDueño()%>" name="id2">
                    <br>
                    <label>Correo</label>
                    <br />
                    <input type="text" name="correo2" id="correo2" value="<%=e.getCorreo()%>"/>
                    <br />
                    <label>Nombre del Dueño</label>
                    <br />
                    <input
                        type="text"
                        name="nom2"
                        id="nom2"
                        value="<%=e.getNom()%>"
                        onkeypress="return inputLetras()"
                        />
                    <br />
                    <label>Apellido paterno del Dueño</label>
                    <br />
                    <input
                        type="text"
                        name="appat2"
                        value="<%=e.getAppat()%>"
                        id="appat2"
                        onkeypress="return inputLetras()"
                        />
                    <br />
                    <label>Apellido materno del Dueño</label>
                    <br />
                    <input
                        type="text"
                        name="apmat2"
                        id="apmat2"
                        value="<%=e.getApmat()%>"
                        onkeypress="return inputLetras()"
                        />
                    <br />
                    <label>Direccion</label>
                    <br />
                    <input type="text" name="dir2" id="dir2" value="<%=e.getDir()%>" />
                    <br />
                    <label>Contraseña</label>
                    <br />
                    <input type="password" name="password2" id="password2" value="<%=e.getPassword()%>"/>
                    <br />
                    <label>ID mascota</label>
                    <input type="text" name="idMascota2" id="idMascota2" value="<%=e.getIdMascota()%>" readOnly/>
                    <br />
                    <input
                        type="submit"
                        value="Actualizar datos del dueño"
                        />
                </form>
            </div>
        </div>
    </body>
</html>
