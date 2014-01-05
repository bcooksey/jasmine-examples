describe('Wallet', function() {
   it('should be able to fill with Bitcoins after a purchase is made', function() {
      var wallet = new Wallet();

      expect(wallet.getBitcoins()).toBe(0);

      runs(function() {
         wallet.loadBitcoins(); 
      });

      waitsFor(function(){
         
      }, 500);

      runs(function() {
         expect(wallet.getBitcoins()).toBe(100);
      });
      
   });

   it('should broadcast when Bitcoins are loaded', function() {
      // Will be the event driven thing with jquery.event...maybe

   });
});
