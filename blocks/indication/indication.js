 // Code generated via "Slingshot" 
export default function decorate(block) {
  const question = block.children[0].textContent;

  const container = document.createElement('div');
  container.classList.add('indication-container');

  container.innerHTML = `
    <h3>${question}</h3>
    <div class="options">
      <label><input type="radio" name="indication" value="60+ Older Adults"> 60+ Older Adults</label>
      <label><input type="radio" name="indication" value="Pregnant Women"> Pregnant Women</label>
    </div>
  `;

  block.textContent = '';
  block.append(container);
}
