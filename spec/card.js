describe('Credit Card', function() {

   it('should create a charge in Stripe when a purchase is made', function() {

      var card = new Card({
         'number': 123456789,
         'expiration': '1/1/2015',
         'cvc': 123
      });

      spyOn(Stripe.card, 'createToken').andCallThrough()
      spyOn($, 'ajax');

      card.charge(50);

      expect(Stripe.card.createToken).toHaveBeenCalledWith({
         'number': 123456789,
         'expiration': '1/1/2015',
         'cvc': 123
      });

      expect($.ajax).toHaveBeenCalled();
   });

   it('should create a credit in Stripe when a purchase is cancelled', function() {
      var card = new Card({
         'number': 123456789,
         'expirationdate': '1/1/2015',
         'cvc': 123
      });

      spyOn(Stripe.card, 'createToken').andCallThrough()
      spyOn($, 'ajax')

      card.credit(50);

      expect(Stripe.card.createToken).toHaveBeenCalledWith({
         'number': 123456789,
         'expirationdate': '1/1/2015',
         'cvc': 123
      });

      expect($.ajax).toHaveBeenCalled();
   });
});
