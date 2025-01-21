 // Code generated via "Slingshot" 
export default function decorate(block) {
  const [image1, image2, title, description] = [...block.children[0].children].map((cell) => cell);

  const container = document.createElement('div');
  container.classList.add('stay-connected-container');

  const images = document.createElement('div');
  images.classList.add('stay-connected-images');
//   images.innerHTML = `
//     <img src="${image1}" alt="Actor 1" />
//     <img src="${image2}" alt="Actor 2" />
//   `;

    images.appendChild(image1);
    images.appendChild(image2);

  const text = document.createElement('div');
  text.classList.add('stay-connected-text');
  text.innerHTML = `
    <h2>${title.textContent}</h2>
    <p>${description.textContent}</p>
  `;

  container.append(images, text);
  block.textContent = '';
  block.append(container);
}
