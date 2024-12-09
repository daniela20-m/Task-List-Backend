# TaskList Backend

Este es el repositorio backend para la aplicación TaskList, una plataforma de gestión de tareas y proyectos. El objetivo de este backend es proporcionar una API RESTful que permita a los usuarios crear, editar, eliminar y visualizar tareas de manera eficiente. La API está construida utilizando Java con el framework Spring Boot y Spring Data JPA para la interacción con bases de datos, específicamente MySQL.

## Características
- **Gestión de Tareas**: Permite la creación, actualización y eliminación de tareas.
- **Autenticación y Autorización**: Implementación de seguridad con Spring Security y soporte para JWT (JSON Web Tokens).
- **Persistencia de Datos**: Conexión a una base de datos MySQL utilizando Spring Data JPA.
- **Controladores RESTful**: Los endpoints están diseñados para ser consumidos por el frontend a través de peticiones HTTP.
- **Configuración Flexible**: La aplicación permite configuraciones flexibles para conectarse a diferentes entornos de base de datos (producción, desarrollo, etc.).
- **Desarrollo Ágil**: El proyecto sigue las mejores prácticas de desarrollo con Maven y está configurado para la integración continua.

## Tecnologías utilizadas
- **Spring Boot**: Para el desarrollo rápido de aplicaciones Java.
- **Spring Data JPA**: Para la interacción con bases de datos de manera eficiente.
- **MySQL**: Base de datos relacional para almacenamiento de datos.
- **JWT (JSON Web Token)**: Para la autenticación segura de usuarios.
- **Maven**: Herramienta de construcción y gestión de dependencias.

## Instrucciones de instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/app-TaskList-Backend.git
   

2. Accede al directorio del proyecto:
   ```bash
   cd app-TaskList-Backend

3. Configura las credenciales de la base de datos en el archivo application.properties:
   ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/task_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=root
    spring.datasource.password=your_password

5. Construye el proyecto:
   ```bash
     mvn clean install

7. Ejecuta la aplicación:
   ```bash
     mvn spring-boot:run

