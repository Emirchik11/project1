const cardsList = document.querySelector('.cards-list');

async function generateCards() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }

        const data = await response.json();

        data.slice(0, 12).forEach(post => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.innerHTML = `
        <div class="card-photo">
          <img src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/ncom/software/switch/70010000010192/5e8ff28eab1c9ee89c1f71e299e299bf75b388a2b9cb92265177999537a988d2" alt="Фото">
        </div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
            cardsList.appendChild(card);
        });
    } catch (error) {
        console.error('Ошибка при загрузке карточек:', error);
        cardsList.innerHTML = '<p style="color: red;">Не удалось загрузить карточки.</p>';
    }
}

document.addEventListener('DOMContentLoaded', generateCards);
