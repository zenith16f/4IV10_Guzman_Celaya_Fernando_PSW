<%--
    Document   : registro
    Created on : 23 abr 2023, 14:19:25
    Author     : fer_1
--%>

<%@page import="java.util.List"%>
<%@page import="Controles.AccionesDueño"%>
<%@page import="Modelo.Mascota"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
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
        <script type="text/javascript" src="JS/app-jquery.js"></script>
        <title>Registro de Usuario</title>
    </head>

    <body>
        <div class="container">
            <br />
            <div class="registroUsuario">
                <form method="post" name="registroUsuario" action="register">
                    <h2>Datos de Usuario / Dueño</h2>
                    <label>Correo</label>
                    <br />
                    <input type="text" name="correo" id="correo" />
                    <br />
                    <label>Nombre del Dueño</label>
                    <br />
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        onkeypress="return inputLetras()"
                        />
                    <br />
                    <label>Apellido paterno del Dueño</label>
                    <br />
                    <input
                        type="text"
                        name="appat"
                        id="appat"
                        onkeypress="return inputLetras()"
                        />
                    <br />
                    <label>Apellido materno del Dueño</label>
                    <br />
                    <input
                        type="text"
                        name="apmat"
                        id="apmat"
                        onkeypress="return inputLetras()"
                        />
                    <br />
                    <label>Direccion</label>
                    <br />
                    <input type="text" name="dir" id="dir" />
                    <br />
                    <label>Contraseña</label>
                    <br />
                    <input type="password" name="password" id="password" />
                    <br />
                    <h2>Datos de Mascota</h2>
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
                    <input type="submit" value="Registrar usuario y mascota" id="register"/>
                    <input type="reset" value="Borrar datos" />
                </form>
            </div>
        </div>

    </body>
</html>

