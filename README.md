# BTG Pactual - Frontend

Este es el frontend de la aplicación de BTG Pactual, desarrollado en React. El despliegue se realiza en AWS utilizando S3 y CloudFront.

## Despliegue

### Despliegue Manual

1. Ejecutar `npm run build` para generar los archivos de producción.
2. Subir el contenido de la carpeta `build/` al bucket S3.
3. Verificar la URL de CloudFront para acceder a la aplicación.

### Despliegue Automatizado

Utiliza AWS CLI o GitHub Actions para automatizar el despliegue. Verifica la configuración en el archivo `.github/workflows/deploy.yml`.

## Configuración DNS (Opcional)

Pendiente, usar Route 53 para configurar el dominio y apuntarlo a la distribución de CloudFront.

## Notas

- Configurar el bucket S3 para servir contenido público.
- Verifica la configuración de caching en CloudFront para reflejar los cambios en la aplicación rápidamente.
