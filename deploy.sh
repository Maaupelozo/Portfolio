#!/bin/bash

# Script para desarrollar y desplegar el portfolio

echo "╔════════════════════════════════════════════════════╗"
echo "║     Portfolio - Script de Desarrollo y Deploy     ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "⚠️  Node.js no está instalado"
    echo "Descargá desde: https://nodejs.org/"
    echo ""
fi

# Menú de opciones
echo "¿Qué deseas hacer?"
echo ""
echo "1) Iniciar servidor local"
echo "2) Compilar para producción"
echo "3) Ver información del proyecto"
echo "4) Abrir en navegador"
echo ""

read -p "Selecciona una opción (1-4): " option

case $option in
    1)
        echo "Iniciando servidor local en http://localhost:8000"
        echo ""
        if command -v python3 &> /dev/null; then
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            python -m http.server 8000
        elif command -v npx &> /dev/null; then
            npx http-server -p 8000
        else
            echo "Error: No se encontró Python ni Node.js"
        fi
        ;;
    2)
        echo "✓ El proyecto es 100% estático, sin build necesario"
        echo "  Simplemente sube los archivos a tu hosting"
        ;;
    3)
        echo "📋 Información del Proyecto:"
        echo "  Nombre: Portfolio Personal"
        echo "  Tecnología: HTML5, CSS3, JavaScript Vanilla"
        echo "  Tipo: Sitio estático"
        echo "  Sin dependencias externas"
        ;;
    4)
        echo "Abriendo en navegador..."
        if command -v xdg-open &> /dev/null; then
            xdg-open "file://$(pwd)/index.html"
        elif command -v open &> /dev/null; then
            open "file://$(pwd)/index.html"
        else
            echo "Abre manualmente: file://$(pwd)/index.html"
        fi
        ;;
    *)
        echo "Opción inválida"
        ;;
esac
