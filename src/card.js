var Card = function(cardData) {
   var that = {
      cardData: cardData
   };

   that.charge = function(amount) {
      Stripe.setPublishableKey('asdf');
      var token = Stripe.card.createToken(that.cardData);
      $.ajax('http://example.com/', {
         data: {token: token, amount: amount}
      });
      return null;
   };

   that.credit = function(amount) {
      Stripe.setPublishableKey('asdf');
      var token = Stripe.card.createToken(that.cardData);
      $.ajax('http://example.com/', {
         data: {token: token, amount: amount}
      });
      return null;
   };

   return that;
};
