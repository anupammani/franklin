 // Code generated via "Slingshot" 
export default function decorate(block) {
  const fields = [...block.children].map(row => ({
    label: row.children[0].textContent,
    placeholder: row.children[1].textContent
  }));

  const form = document.createElement('form');
  form.classList.add('form-container');

  fields.forEach(field => {
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('form-field');
    fieldContainer.innerHTML = `
      <label>${field.label}</label>
      <input type="text" placeholder="${field.placeholder}">
    `;
    form.appendChild(fieldContainer);
  });

  block.textContent = '';
  block.append(form);
}
