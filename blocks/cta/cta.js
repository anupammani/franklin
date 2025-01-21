 // Code generated via "Slingshot" 
export default function decorate(block) {
  const [icon, text] = [...block.children[0].children].map((cell) => cell.textContent);

  const container = document.createElement('div');
  // container.classList.add('cta-container');

  container.innerHTML = `
    <div class="cta-icon"><img src="${icon}" alt="Icon" /></div>
    <div class="cta-text">${text}</div>
  `;

  block.innerHTML = `<div class="cta-icon"><img src="${icon}" alt="Icon" /></div><div class="cta-text">${text}</div>`;

}
