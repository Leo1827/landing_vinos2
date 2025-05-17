 const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const contactForm = document.getElementById("contactForm");

    openModalBtn.addEventListener("click", () => {
      modalBackdrop.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Evita scroll al fondo
    });

    closeModalBtn.addEventListener("click", () => {
      modalBackdrop.classList.add("hidden");
      document.body.style.overflow = "auto";
    });

    // Cerrar modal si clic afuera del contenido
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    });

    // Opcional: validar y enviar formulario (redirige a gracias.html)
    contactForm.addEventListener("submit", (e) => {
      // Aquí puedes poner validación extra si quieres.
      // Por ahora, el action="gracias.html" se encarga de redirigir.
    });