import DemoVersion from "@widgets/DemoVersion/ui";
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="main">
  ${DemoVersion()}
  </main>
`
