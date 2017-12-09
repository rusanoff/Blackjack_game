function getRandom (min , max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSum(hand) {
  var sum = 0;
  
  for(var i = 0; i < hand.length; i++) {
    var card = hand[i];
    if (card != 'A') {
      if (card == 'J' || card == 'Q' || card == 'K') {
        sum += 10;
      } else {
        sum += parseInt(card);
      }
    }
  }
    
  for(var i = 0; i < hand.length; i++) {
    var card = hand[i];
    
    if (card == 'A') {
      if (sum > 10) {
        sum++;
      } else {
        sum += 11;
      }
    }
  }
  return sum;
}

function getCard () {
  var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  return cards[getRandom(0, cards.length - 1)];
}

var dealer = [getCard()];
var player = [getCard(), getCard()];
var answerYes = 'Yes';
var answerNo = 'No';

function getStatus() {
  return 'Dealer: ' + dealer.join(' ') + ', player: ' + player.join(' ');
}

if (getSum(player) == 21) {
  alert('Player win!\nBlack Jack at once after distribution!');
} else {
  var answer = '';
    do {
      answer = prompt(getStatus() + '\nDo you want to get a card?\nEnter \"yes\" if you want to get a card\nEnter anything or nothing if you do not want to get a card ');
      
      if(answer.toLowerCase() == answerYes.toLowerCase()) {
        player.push(getCard());
        sum = getSum(player);
        if (sum > 21) {
          alert('More than 21 :(');
          break;
        } else if (sum == 21) {
          alert('Black Jack!\n');
          break;
        }
      } else {
        while (getSum(dealer) < 17) {
          dealer.push(getCard());
        };
        
        var sumDealer = getSum(dealer);
        var sumPlayer = getSum(player);
        
        if (sumDealer == 21) {
          alert('Black Jack! Dealer win!\n' + getStatus());
        } else if (sumDealer > 21) {
          alert('Player win!\nDealer has more than 21\n' + getStatus());
        } else if (sumPlayer == sumDealer) {
          alert('Draw!\n' + getStatus());
        } else if (sumPlayer > sumDealer) {
          alert('Player win!\n' + getStatus());
        } else if (sumPlayer < sumDealer) {
          alert('Dealer win!\n' + getStatus());
        }
      }
      
    } while (answer == answerYes.toLowerCase());
}