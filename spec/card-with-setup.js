describe('Credit Card', function() {
   var card, cardData;

   beforeEach(function() {
      cardData = {
         'number': 123456789,
         'expiration': '1/1/2015',
         'cvc': 123
      };
      card = new Card(cardData);

      spyOn(Stripe.card, 'createToken').andReturn('asdf');
      spyOn($, 'ajax');
   });

   it('should create a charge in Stripe when a purchase is made', function() {
      card.charge(50);

      expect(Stripe.card.createToken).toHaveBeenCalledWith({
         'number': 123456789,
         'expiration': '1/1/2015',
         'cvc': 123
      });

      expect($.ajax).toHaveBeenCalledWith('http://example.com/', { data: {token: 'asdf', amount: 50}})
   });

   it('should create a credit in Stripe when a purchase is cancelled', function() {
      card.credit(50);

      expect(Stripe.card.createToken).toHaveBeenCalledWith(cardData);
   });
});
