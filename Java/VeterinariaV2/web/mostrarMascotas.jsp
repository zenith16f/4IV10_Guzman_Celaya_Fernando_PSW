<%-- Document : mostrarMascotas Created on : 21 abr 2023, 03:03:38 Author :
fer_1 --%> <%@page import="Controles.AccionesDueño"%>
<%@page import="java.util.List"%>
<%@page import="Modelo.Mascota"%>
<%@page import="Modelo.Mascota"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./CSS/styletablas.css">
        <link rel="stylesheet" href="./CSS/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
        <link rel="icon" href="./IMG/logotype.png">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Mascotas en el sistema</title>
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
            <h2>Mascotas registradas</h2>
            <br />
            <!--* Table of mascotas -->
            <table class="tabla__mascota">
                <thead class="tabla_header">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Id especie</th>
                        <th>Id raza</th>
                        <th>Sexo</th>
                        <th>Fecha Nacimiento</th>
                        <th>Pelaje</th>
                        <th>Señas</th>
                        <th class="vacio"></th>
                        <th class="vacio"></th>
                    </tr>
                </thead>
                <tbody class="tabla__contenido">
                    <%
                        List<Mascota> mascotas = AccionesDueño.consultaMascota();

                        for (Mascota e : mascotas) {
                    %>

                    <tr>
                        <td><%=e.getIdMascota()%></td>
                        <td><%=e.getNombre()%></td>
                        <td><%=e.getIdEspecie()%></td>
                        <td><%=e.getIdRaza()%></td>
                        <td><%=e.getSexo()%></td>
                        <td><%=e.getFecha_nac()%></td>
                        <td><%=e.getPelaje()%></td>
                        <td><%=e.getSeñas()%></td>
                        <td><a href="editarDMascota.jsp?id=<%=e.getIdMascota()%>">Editar</a></td>
                        <td><a href="borrarMascota?id=<%=e.getIdMascota()%>">Borrar</a></td>

                    </tr>

                    <%
                        }
                    %>
                </tbody>
            </table>
            <br />
            <!--* Table of especies -->
            <h3>Especies</h3>
            <table class="especies">
                <thead class="tabla__header">
                    <tr>
                        <th>ID</th>
                        <th>Especie</th>
                    </tr>
                </thead>
                <tbody class="tabla__contenido">
                    <%
                        List<Mascota> especies = AccionesDueño.obtenerEspecies();

                        for (Mascota e : especies) {

                    %>

                    <tr>
                        <td><%=e.getIdEspecie()%></td>
                        <td><%=e.getTipo_especie()%></td>
                    </tr>

                    <%
                        }
                    %>
                </tbody>
            </table>
            &nbsp;
            <!--* Table of razas -->
            <h3>Razas</h3>
            <table class="razas">
                <thead class="tabla__header">
                    <tr>
                        <th>ID</th>
                        <th>Raza</th>
                    </tr>
                </thead>
                <tbody class="tabla__contenido">
                    <%
                        List<Mascota> razas = AccionesDueño.obtenerRazas();

                        for (Mascota e : razas) {


                    %>

                    <tr>
                        <td><%= e.getIdRaza()%></td>
                        <td><%= e.getTipo_raza()%></td>
                    </tr>

                    <%
                        }
                    %>

                </tbody>
            </table>

            <!-- Links -->
            <br />
            <a href="mostrarUsuarios.jsp">Consultar dueños</a>
            <br />
            <a href="cuentaUsuario.jsp">Account</a>
            <br />
            <a href="index.html">Home</a>
        </div>
    </body>
</html>
