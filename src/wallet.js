var Wallet = function(id) {
   var that = {id: id, bitcoins: 0};

   that.loadBitcoins = function() {

      $.ajax('http://httpbin.org/status/500', {
         data: {id: that.id},
         success: function(data, status, xhr) {
            that.bitcoins = data.bitcoins;
            return null 
         },
         error: function(xhr) {
            return null
         }
      });

      return null;
   };

   that.getBitcoins = function() { return that.bitcoins; }

   return that;
};
