/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Servlet;

import Controles.AccionesDueño;
import Controles.Conexion;
import Modelo.Dueño;
import Modelo.Mascota;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author fer_1
 */
public class addMascota extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String nom, sexo, pelaje, señas, fecha_nac;
            int idEspecie, idRaza;
            String nomDueño, apPat, apMat;

            nom = request.getParameter("nomMascota");
            idEspecie = Integer.parseInt(request.getParameter("especieMascota"));
            idRaza = Integer.parseInt(request.getParameter("razaMascota"));
            sexo = request.getParameter("sexoMascota");
            pelaje = request.getParameter("pelajeMascota");
            señas = request.getParameter("senasMascota");
            fecha_nac = request.getParameter("fechaNacMascota");

            nomDueño = request.getParameter("nom");
            apPat = request.getParameter("apPat");
            apMat = request.getParameter("apMat");

            Mascota e = new Mascota();

            e.setNombre(nom);
            e.setIdRaza(idRaza);
            e.setIdEspecie(idEspecie);
            e.setSexo(sexo);
            e.setPelaje(pelaje);
            e.setSeñas(señas);
            e.setFecha_nac(fecha_nac);

            /*Dueño ed = new Dueño();

            ed.setNom(nomDueño);
            ed.setAppat(apPat);
            ed.setApmat(apMat);*/
            int status = AccionesDueño.nuevaMascota(e);

            if (status > 0) {

                response.sendRedirect("Fin.jsp");

            } else {

                response.sendRedirect("Error.jsp");
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
