import Button from "@shared/components/Button/ui";
import "./styles.css";

import { showModal } from "@shared/components/LoginModal/ui";

const loginContent = `
  <form class="login-form">
    <h2 class="login-title">Войти в систему</h2>
    <input type="text" class="login-input" placeholder="Email/Телефон" />
    <input type="password" class="login-input input-margin" placeholder="Пароль" />
    <div class="remember-me">
      <input type="checkbox" id="remember-checkbox" class="custom-checkbox-input" />
      <label for="remember-checkbox" class="custom-checkbox">
      <span class="text-remember">Запомнить пароль</span>
    </label>
    </div>
    <a href="#" class="recover-link">Восстановить</a>
    <button class="shared-button" type="submit">Войти</button>
    <button class="register-button">Зарегистрироваться</button>
  </form>
`;

const TryForFree = () => {
  return `
  <aside class="try-for-free-wrapper">
    <h1 class="title-demo size-title-description">
      Демо-версия
    </h1>

    <p class="description-demo size-title-description">
      За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить 
    </p>

    ${Button()}
  </aside>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("open-login-modal")
    ?.addEventListener("click", () => showModal(loginContent));
});

export default TryForFree;
