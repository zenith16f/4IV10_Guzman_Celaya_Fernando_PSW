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
        <link rel="stylesheet" href="./CSS/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./CSS/registros.css" />
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
            integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        ></script>
        <!-- <script type="text/javascript" src="jquery.min.js"></script> -->
        <script type="text/javascript" src="JS/app-jquery.js"></script>
        <title>Registro de mascota</title>
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
            <br>
            <div class="mascotaRegistro">
                <br>
                <form action="addMascota" method="post" name="registroMascota" id="registrarMascota">
                    <!--
                    <p>Para registrar tu mascota necesitamos antes tu nombre con apellidos en los campos(No funciona)</p>
                    <label>Nombre</label>
                    <br>
                    <input type="text" name="nom" id="nom">
                    <br>
                    <label>Appellido Paterno</label>
                    <br>
                    <input type="text" name="apPat" id="apPat">
                    <br>
                    <label>Apellido Materno</label>
                    <br>
                    <input type="text" name="apMat" id="apMat">
                    <br> -->

                    <h2>Registro de Mascota</h2>
                    <br>
                    <label>Nombre de tu mascota</label>
                    <br />
                    <input type="text" name="nomMascota" id="nomMascota" />
                    <br />
                    <label>Especie de tu mascota</label>
                    <select name="especieMascota" id="especieMascota">
                        <option value="null" selected>Especie</option>
                        <%
                            List<Mascota> especies = AccionesDueño.obtenerEspecies();

                            for (Mascota e : especies) {
                        %>

                        <option value="<%=e.getIdEspecie()%>">
                            <%= e.getTipo_especie()%>
                        </option>

                        <% }
                        %>
                    </select>
                    <br />
                    <label>Raza de tu mascota</label>
                    <select name="razaMascota" id="razaMascota">
                        <option value="null" >Raza</option>

                        <%
                            List<Mascota> razas = AccionesDueño.obtenerRazas();

                            for (Mascota e : razas) {
                        %>

                        <option value="<%=e.getIdRaza()%>">
                            <%= e.getTipo_raza()%>
                        </option>

                        <% }
                        %>

                    </select>
                    <br />
                    <label>Sexo de tu mascota</label>
                    <br />
                    <input type="text" name="sexoMascota" id="sexoMascota" />
                    <br />
                    <label>Fecha de nacimiento de tu mascota</label>
                    <br />
                    <input type="date" name="fechaNacMascota" id="fechaNacMascota" max="2024-01-01"/>
                    <br />
                    <label>Tipo de pelaje de tu mascota</label>
                    <br />
                    <input type="text" name="pelajeMascota" id="pelajeMascota" />
                    <br />
                    <label>Señas de tu mascota</label>
                    <br />
                    <input type="text" name="senasMascota" id="senasMascota" />
                    <br />
                    <input type="submit" value="Registrar mascota" id="register"/>
                    <input type="reset" value="Borrar datos" />
                </form>
            </div>
        </div>
    </body>
</html>
