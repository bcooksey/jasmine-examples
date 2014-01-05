var Converter = (function() {
   var that = {};

   that.bitcoinToUsd = function(amount) {
      if (amount < 0) {
         throw new Exception('Does not compute')
      }
      return amount * 918;
   };

   that.dogecoinToUsd = function(amount) {
      return amount * 0.00027;
   };

   return that;
})();
