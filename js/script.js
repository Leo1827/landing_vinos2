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