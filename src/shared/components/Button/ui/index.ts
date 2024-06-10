import arrowUpRight from "@assets/icons/arrow-up-right.svg";
import "./styles.css";

const Button = () => {
  return `
    <button class="button-wrapper" id="open-login-modal">
      <p>Попробовать бесплатно</p>
      <div class="arrow-wrapper"><img src="${arrowUpRight}" alt="arrow-up-right" /></div>
    </button>
  `;
};

export default Button;