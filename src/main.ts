import DemoVersion from "@widgets/DemoVersion/ui";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${DemoVersion()}
  </div>
`
