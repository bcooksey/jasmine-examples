var Wallet = function(id) {
   var that = {id: id, coins: 0};

   that.loadCoins = function() {
      $('#wallet-coin-count').html(50);
      that.coins = 50;
   };

   that.getCoins = function() { return that.coins; }

   $('#wallet-open-button').click(that.loadCoins);

   return that;
};
