document
  .getElementById('card')
  .addEventListener('click', 
      function() {
        this
            .classList
            .toggle('friend-card__open');
    }
);