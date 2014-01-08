describe('Wallet', function() {
   it('should show current amount of Bitcoins when opened', function() {
      loadFixtures('wallet.html')

      var wallet = new Wallet();

      expect(wallet.getCoins()).toBe(0);

      runs(function() {
         $('#wallet-open-button').trigger('click');
      });

      waitsFor(function(){
         return wallet.getCoins() > 0;
      }, 'coins to display in wallet', 500);

      runs(function() {
         expect($('#wallet-coin-count')).toHaveText(50);
      });
      
   });
});
