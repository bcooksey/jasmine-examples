var Card = function(cardData) {
   var that = {
      cardData: cardData
   };

   that.charge = function(amount) {
      var token = Stripe.card.createToken(that.cardData);
      return null;
   };

   that.credit = function(amount) {
      var token = Stripe.card.createToken(that.cardData);
      return null;
   };

   return that;
};
