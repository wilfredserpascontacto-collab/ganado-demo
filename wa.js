/* ---------------------------------------------------------------------------
   EL TELEFONO VIVE AQUI Y EN NINGUN OTRO LADO.
   Para cambiarlo se tocan estas dos lineas y nada mas: todos los botones de
   WhatsApp de todas las paginas se arman solos a partir de aqui.
   --------------------------------------------------------------------------- */
const TEL = { wa: "12012820870", visible: "+1 (201) 282-0870" };

/* ---------------------------------------------------------------------------
   DE DONDE VIENE EL CLIENTE
   Todo mensaje que sale del sitio arranca con esta linea. Sirve para dos
   cosas: don Adilio ve de una que ese chat vino del sitio y no de un conocido,
   y puede escribir «rancholaguayabia.com» en el buscador de WhatsApp para que
   le salgan todos los que han escrito desde la web, juntos.

   Va con un renglon en blanco en medio para que en el chat se lea como dos
   parrafos y no como una sola parrafada.
   --------------------------------------------------------------------------- */
const DE_LA_WEB = "Escribo desde la página web rancholaguayabia.com.\n\n";
const waHref = (msg) => "https://wa.me/" + TEL.wa + "?text=" + encodeURIComponent(DE_LA_WEB + msg);
