const galleryItems = document.querySelectorAll('.gallery-item');
const galleryElements = document.querySelectorAll('.gallery-element');
const navDotsContainer = document.createElement('div');
navDotsContainer.className = 'nav-dots';
document.body.appendChild(navDotsContainer);
for (let i = 0; i < Math.ceil(galleryElements.length / 3); i++) {
    const dot = document.createElement('span');
    dot.className="nav-dot";
    dot.textContent = '·';
    dot.addEventListener('click', () => {
         showGalleryElements(i * 3);
    });
    navDotsContainer.appendChild(dot);
}
showGalleryElements(0);// initially first three
function showGalleryElements(index) {
  galleryElements.forEach(element => {
    element.classList.remove('show');
});
for (let i = index; i < index + 3; i++) {
    if (i < galleryElements.length) {
      galleryElements[i].classList.add('show');
    }
  }
      const navDots = document.querySelectorAll('.nav-dots span');
      navDots.forEach(dot => {
      dot.classList.remove('active');
      });
      navDots[index / 3].classList.add('active');
        }

// galleryItems.forEach(item => {
//   const audioElement = item.querySelector('audio');
//   const imageElement = item.querySelector('img');

//   item.addEventListener('mouseover', () => {
//     audioElement.play();
//     imageElement.style.filter = 'brightness(50%)';
//     createMusicalNotes(item);
//   });

//   item.addEventListener('mouseout', () => {
//     audioElement.pause();
//   imageElement.style.filter = 'brightness(100%)';
//     removeMusicalNotes();
//   });
// });


// function createMusicalNotes() {
//     const musicalNotes = document.createElement('div');
//     musicalNotes.className = '.musical-notes';
//     document.body.appendChild(musicalNotes);
  
//     const notes = ['𝄞', '𝄝', '𝄢', '𝄣', '𝄤'];
//     const noteCount = Math.floor(Math.random() * 5) + 5;
  
//     for (let i = 0; i < noteCount; i++) {
//       const note = document.createElement('span');
//       note.textContent = notes[Math.floor(Math.random() * notes.length)];
//       note.style.fontSize = `${Math.floor(Math.random() * 50) + 20}px`;
//       note.style.color = `hsl(${Math.floor(Math.random() * 360)}, 75%, 75%)`;
//       note.style.position = 'absolute';
//       note.style.top = `${Math.floor(Math.random() * 100)}vh`;
//       note.style.left = `${Math.floor(Math.random() * 100)}vw`;
//       note.style.transform = `translate(-50%, -50%)`;
//       note.style.animation = `note-float 3s ease-in-out infinite`;
//       musicalNotes.appendChild(note);
//     }
//   }
  
//   function removeMusicalNotes() {
//     const musicalNotes = document.querySelector('.musical-notes');
//     if (musicalNotes) {
//       document.body.removeChild(musicalNotes);
//     }
//   }
  
galleryItems.forEach(item => {
    const audioElement = item.querySelector('audio');
    const imageElement = item.querySelector('img');
  
    item.addEventListener('mouseover', () => {
      audioElement.play();
      createMusicalNotes();
    });
  
    item.addEventListener('mouseout', () => {
      audioElement.pause();
      removeMusicalNotes();
    });
  });
  
  function createMusicalNotes() {
    const musicalNotes = document.createElement('div');
    musicalNotes.className = 'musical-notes';
    document.body.appendChild(musicalNotes);
  
    const notes = ['𝄞', '𝄝', '𝄢', '𝄣', '𝄤'];
    const noteCount = Math.floor(Math.random() * 5) + 5;
  
    for (let i = 0; i < noteCount; i++) {
      const note = document.createElement('span');
      note.textContent = notes[Math.floor(Math.random() * notes.length)];
      note.style.fontSize = `${Math.floor(Math.random() * 50) + 20}px`;
      note.style.color = `hsl(${Math.floor(Math.random() * 360)}, 75%, 75%)`;
      note.style.position = 'absolute';
      note.style.top = `${Math.floor(Math.random() * 100)}vh`;
      note.style.left = `${Math.floor(Math.random() * 100)}vw`;
      note.style.transform = `translate(-50%, -50%)`;
      note.style.animation = `note-float 3s ease-in-out infinite`;
      musicalNotes.appendChild(note);
    }
  }
  
  function removeMusicalNotes() {
    const musicalNotes = document.querySelector('.musical-notes');
    if (musicalNotes) {
      document.body.removeChild(musicalNotes);
    }
  }