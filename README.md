# Backend insdrums-auth

## Prerequisitos

Asegúrate de tener instalado Node.js en tu sistema. La versión mínima requerida es Node.js 14.

Además, necesitarás Docker para ejecutar la base de datos.

## Configuración

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega al directorio del proyecto.

## Si tienes Linux

primero ejecutar el archivo para generar las env debe ser ejecutable

```bash
chmod +x generate_env.sh
```

y luego

```bash
./generate_env.sh
```

## Si tienes Windows

primero ejecutar el archivo para generar las env con permisos de Windows en PowerShell

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

y luego

```bash
.\generate_env.ps1
```

## Construir la imagen de Docker

Ejecuta el siguiente comando para construir la imagen de Docker:

```bash
docker build -t mydatabase .

```

## Iniciar el contenedor de Docker
Una vez que la imagen esté construida, inicia el contenedor de Docker con el siguiente comando:

```bash
docker run -d -p 3306:3306 --name mydatabase mydatabase
```

## Instalar dependencias
Instala las dependencias del proyecto ejecutando:

```bash
npm install
```

## Ejecutar el servidor
Para iniciar el servidor en modo desarrollador, utiliza el siguiente comando:

```bash
npm run dev
```

¡Listo! Ahora deberías tener el backend en funcionamiento. ¡Buena suerte! 🚀