@echo off
REM Script para desarrollar y desplegar el portfolio

echo.
echo ╔════════════════════════════════════════════════════╗
echo ║     Portfolio - Script de Desarrollo y Deploy     ║
echo ╚════════════════════════════════════════════════════╝
echo.

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  Node.js no está instalado
    echo Descargá desde: https://nodejs.org/
    echo.
)

echo ¿Qué deseas hacer?
echo.
echo 1) Iniciar servidor local
echo 2) Ver información del proyecto
echo 3) Abrir en explorador
echo.

set /p option="Selecciona una opción (1-3): "

if "%option%"=="1" (
    echo Iniciando servidor local en http://localhost:8000
    echo.
    where python >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        python -m http.server 8000
    ) else (
        where npx >nul 2>nul
        if %ERRORLEVEL% EQU 0 (
            npx http-server -p 8000
        ) else (
            echo Error: No se encontró Python ni Node.js
        )
    )
) else if "%option%"=="2" (
    echo.
    echo 📋 Información del Proyecto:
    echo    Nombre: Portfolio Personal
    echo    Tecnología: HTML5, CSS3, JavaScript Vanilla
    echo    Tipo: Sitio estático
    echo    Sin dependencias externas
    echo.
) else if "%option%"=="3" (
    echo Abriendo en navegador...
    start "" "%cd%\index.html"
) else (
    echo Opción inválida
)

pause
