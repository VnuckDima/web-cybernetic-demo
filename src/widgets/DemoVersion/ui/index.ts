import TryForFree from "@entities/TryForFree/ui";

import monitor from "@assets/images/monitor.png";
import monitor1440 from "@assets/images/monitor1440.png";

import "./styles.css";

const DemoVersion = () => {
  const monitorImage = window.innerWidth > 1440 ? monitor : monitor1440;

  window.addEventListener("resize", () => {
    const monitorElement = document.querySelector<HTMLImageElement>(".monitor");
    if (window.innerWidth > 1440) {
      monitorElement && (monitorElement.src = monitor);
    } else {
      monitorElement && (monitorElement.src = monitor1440);
    }
  });

  return `
  <section class='demo-version-wrapper'>
    <div class="normalize-wrapper">
        ${TryForFree()}
        <div class="monitor-wrapper">
          <img src=${monitorImage} alt="monitor" width="910" height="455" class="monitor" />
        </div>
    </div>
  </section>
  `;
};

export default DemoVersion;
