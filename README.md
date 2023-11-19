Vapor - Sistema de Gestión de Biblioteca de Juegos
Descripción del Proyecto

Vapor es un proyecto de backend diseñado para gestionar y optimizar la experiencia de la biblioteca de juegos, simulando la instalación y desinstalación de videojuegos. La aplicación proporciona funcionalidades específicas para mejorar la experiencia de los usuarios al gestionar su colección de juegos.

Características Principales

Gestión de Juegos:

    Reserva de Juegos: Permite a los usuarios reservar juegos específicos en la biblioteca, marcándolos como "instalados" con fecha de inicio y finalización.

    Información en Tiempo Real: Proporciona información en tiempo real sobre el estado de instalación de los juegos, indicando si están activos o desinstalados.

Uso del Proyecto

    Clona este Repositorio:

    bash

git clone git@github.com:Vtorcampos13/vapor.git

Configura las Variables de Entorno:

Crea un archivo .env en la raíz del proyecto. Puedes ver la plantilla .env.example para rellenar tu .env. Dejar el nombre de la BBDD como vapor para que no de problemas.

Completa las variables de entorno con la información necesaria.

Inicializa la Aplicación Utilizando Docker Compose:

bash

docker-compose up --build

Instala las Dependencias:

bash

npm install

Ejecuta la Aplicación:

bash

    npm start

    Accede a la Aplicación a través del Navegador:

    http://localhost:3008

Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, abre un pull request y colabora en el desarrollo de una experiencia de gestión de biblioteca de juegos más eficiente y amigable para los entusiastas de los videojuegos.

¡Disfruta organizando tu biblioteca de juegos y haciendo que la experiencia de juego sea más cómoda con Vapor!
