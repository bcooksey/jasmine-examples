describe('Credit Card', function() {
   var card, cardData;

   beforeEach(function() {
      cardData = {
         'number': 123456789,
         'expirationDate': '1/1/2015',
         'cvc': 123
      };
      card = new Card(cardData);

      spyOn(Stripe.card, 'createToken');
   });

   it('should create a charge in Stripe when a purchase is made', function() {
      card.charge(50);

      expect(Stripe.card.createToken).toHaveBeenCalledWith({
         'number': 123456789,
         'expirationDate': '1/1/2015',
         'cvc': 123
      });
   });

   it('should create a credit in Stripe when a purchase is cancelled', function() {
      card.credit(50);

      expect(Stripe.card.createToken).toHaveBeenCalledWith(cardData);
   });
});
