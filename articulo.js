/* Comun a las paginas de contenido: arma los botones de WhatsApp (desde wa.js)
   y el boton de copiar el numero. */
for (const a of document.querySelectorAll(".wa-link")) a.href = waHref(a.dataset.wa);
for (const n of document.querySelectorAll("[data-tel]")) n.textContent = TEL.visible;
const btnCopiar = document.getElementById("copy");
if (btnCopiar) btnCopiar.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(TEL.visible);
    btnCopiar.textContent = "Copiado";
    setTimeout(() => (btnCopiar.textContent = "Copiar"), 1800);
  } catch { /* si el navegador no deja, el numero igual esta a la vista */ }
});
