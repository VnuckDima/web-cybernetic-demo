import "./styles.css";

const LoginModal = (content: string) => {
  return `
  <div class="modal-overlay" id="modal-overlay">
    <div class="modal" id="modal">
      <div class="modal-content">
        ${content}
      </div>
      <button class="close-button" id="close-button">×</button>
    </div>
  </div>
  `;
};

export const showModal = (content: string) => {
  const modalHtml = LoginModal(content);
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('close-button')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', closeModal);
  document.getElementById('modal')?.addEventListener('click', (event) => {
    event.stopPropagation();
  });
};

export const closeModal = () => {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.remove();
  }
};

export default LoginModal;