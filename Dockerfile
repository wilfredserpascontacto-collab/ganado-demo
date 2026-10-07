FROM nginx:1.27-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
# Las fotos dejaron de viajar dentro del HTML y ahora son archivos aparte:
# sin esta linea la pagina sale entera pero sin una sola foto.
COPY img/ /usr/share/nginx/html/img/
EXPOSE 80
