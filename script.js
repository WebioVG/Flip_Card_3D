// Get HTML elements
let cards = document.getElementsByClassName('card');
let cards_front = document.getElementsByClassName('card_front');
let cards_back = document.getElementsByClassName('card_back');

// Main
for (let card in cards) {    
    cards[card].addEventListener('mouseenter', function() {
        cards_back[card].style.transitionDelay = '250ms';
        cards_front[card].style.transitionDelay = '0ms';

        cards_front[card].classList.add('card_front_active');
        cards_back[card].classList.add('card_back_active');
    })
    
    cards[card].addEventListener('mouseleave', function() {
        cards_back[card].style.transitionDelay = '0ms';
        cards_front[card].style.transitionDelay = '250ms';

        cards_front[card].classList.remove('card_front_active');
        cards_back[card].classList.remove('card_back_active');
    })
}