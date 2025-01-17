 // Code generated via "Slingshot" 
import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const [img1, content, img2] = row.children;
    const section = document.createElement('section');
    section.classList.add('custom-section');

    const img1El = createOptimizedPicture(img1.textContent.trim(), 'Image 1');
    const img2El = createOptimizedPicture(img2.textContent.trim(), 'Image 2');

    const contentEl = document.createElement('div');
    contentEl.innerHTML = content.innerHTML;

    section.append(img1El, contentEl, img2El);
    block.append(section);
  });
}
