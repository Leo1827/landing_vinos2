const modal1 = document.getElementById('modal1');
  const modal2 = document.getElementById('modal2');

  document.getElementById('openModalBtn').addEventListener('click', () => {
    modal1.classList.remove('hidden');
  });

  document.getElementById('closeModal1').addEventListener('click', () => {
    modal1.classList.add('hidden');
  });

  document.getElementById('openModalBtnDos').addEventListener('click', () => {
    modal2.classList.remove('hidden');
  });

  document.getElementById('closeModal2').addEventListener('click', () => {
    modal2.classList.add('hidden');
  });

  // Mailer
function setupMailer(formId, successId) {
  const form = document.getElementById(formId);
  const successMessage = document.getElementById(successId);

  if (!form || !successMessage) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
    .then(() => {
      form.style.display = 'none';
      successMessage.style.display = 'block';
    })
    .catch(() => {
      alert('Ocurrió un error al enviar el formulario, intenta de nuevo.');
    });
  });
}

// Ejecutar para ambos formularios
setupMailer('mailerForm', 'successMessage');
setupMailer('mailerFormTwo', 'successMessageTwo');


  fetch("https://assets.mailerlite.com/jsonp/1570483/forms/156563975074481797/takel");

  // api Mailer
  (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
  .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
  n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
  (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
  ml('account', '1570483');
