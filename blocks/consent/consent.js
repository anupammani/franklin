 // Code generated via "Slingshot" 
export default function decorate(block) {
  const consentText = block.children[0].textContent;

  const container = document.createElement('div');
  container.classList.add('consent-container');

  container.innerHTML = `
    <p>${consentText}</p>
    <button type="button" class="sign-up-button">Sign Up</button>
  `;

  block.textContent = '';
  block.append(container);
}
