
const dati = [
    {
        idPost:'34242',
        profilePic:'https://unsplash.it/300/300?image=15',
        author:'Phil Mangione',
        time:'22/12/2022',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint',
        postImage:'https://unsplash.it/600/300?image=171',
        likesCounter:'40'
    },

    {
        idPost:'37642',
        profilePic:'https://unsplash.it/300/300?image=14',
        author:'Mario Rossi',
        time:'20/10/2007',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint',
        postImage:'https://unsplash.it/600/300?image=170',
        likesCounter:'50'
    },

    {
        idPost:'34296',
        profilePic:'https://unsplash.it/300/300?image=13',
        author:'Lorenzo Verdi',
        time:'15/07/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint',
        postImage:'https://unsplash.it/600/300?image=173',
        likesCounter:'60'
    },

    {
        idPost:'34982',
        profilePic:'https://unsplash.it/300/300?image=12',
        author:'Giacomo Bianchi',
        time:'05/10/2020',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint',
        postImage:'https://unsplash.it/600/300?image=176',
        likesCounter:'70'
    },

    {
        idPost:'35142',
        profilePic:'https://unsplash.it/300/300?image=11',
        author:'Marco Neri',
        time:'13/05/2021',
        text:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint',
        postImage:'https://unsplash.it/600/300?image=178',
        likesCounter:'20'
    },

    
]



let post = document.getElementById('post');


let content ='';

// funzione di creare la struttura html
    for(let i = 0; i < dati.length; i++){
        const datas = dati[i];

        content +=`
        <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic" src="${datas.profilePic}" alt="Phil Mangione" />
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${datas.author}</div>
            <div class="post-meta__time">${datas.time}</div>
          </div>
        </div>
      </div>
      <div class="post__text">${datas.text}</div>
      <div class="post__image">
        <img src="${datas.postImage}" alt="" />
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <button class="like-button js-like-button" href="#" data-postid="1">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </button>
          </div>
          <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${datas.likesCounter}</b> persone</div>
        </div>
      </div>
        `;

    }


post.innerHTML = content;




