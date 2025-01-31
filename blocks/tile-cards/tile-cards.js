export default function decorate(block) {
    // Create the main container
    const container = document.createElement('div');
    container.className = 'tile-card-container';
  
    // Iterate over direct children of the block (each card container)
    Array.from(block.children).forEach((child) => {
      const card = document.createElement('div');
      card.className = 'tile-card';
  
      // Extract title, description, button, and image from the child structure
      const title = child.querySelector('h3')?.textContent || ''; // Correctly target the <h3> for the title
      const description = child.querySelector('p:not(.button-container):not(:has(picture))')?.textContent || ''; // Target the <p> that is not a button or picture container
      const button = child.querySelector('.button-container a'); // Target the button
      const picture = child.querySelector('picture'); // Target the picture element
  
      // Create the card content
      const cardContent = `
        <h3 class="tile-card-title">${title}</h3>
        <p class="tile-card-description">${description}</p>
      `;
  
      card.innerHTML = cardContent;
  
      // Add button
      if (button) {
        const cardButton = document.createElement('a');
        cardButton.href = button.href;
        cardButton.textContent = button.textContent;
        cardButton.className = 'tile-card-button';
        card.appendChild(cardButton);
      }
  
      // Add image
      if (picture) {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'tile-card-image';
        imageContainer.appendChild(picture.cloneNode(true));
  
        // Add actor portrayal label
        const actorLabel = document.createElement('span');
        actorLabel.className = 'actor-label';
        actorLabel.textContent = 'Actor Portrayal';
        imageContainer.appendChild(actorLabel);
  
        card.appendChild(imageContainer);
      }
  
      // Append the card to the main container
      container.appendChild(card);
    });
  
    // Clear the block and append the container
    block.textContent = '';
    block.appendChild(container);
  }