describe('Credit Card', function() {

   it('should create a charge in Stripe when a purchase is made', function() {

      var cardData = {
         'number': 123456789,
         'expiration': '1/1/2015',
         'cvc': 123
      };
      var card = new Card(cardData);

      spyOn(Stripe.card, 'createToken').andCallThrough()
      spyOn($, 'ajax');

      card.charge(50);

      expect(Stripe.card.createToken).toHaveBeenCalled();

      expect($.ajax).toHaveBeenCalledWith(
        'http://example.com/', { data: { token: 'asdf', amount: 50 }}
      );
   });

   it('should create a credit in Stripe when a purchase is cancelled', function() {
      var cardData = {
         'number': 123456789,
         'expiration': '1/1/2015',
         'cvc': 123
      };
      var card = new Card(cardData);

      spyOn(Stripe.card, 'createToken').andCallThrough()
      spyOn($, 'ajax')

      card.credit(50);

      expect(Stripe.card.createToken).toHaveBeenCalled();

      expect($.ajax).toHaveBeenCalledWith(
        'http://example.com/', { data: { token: 'asdf', amount: 50 }}
      );
   });
});
