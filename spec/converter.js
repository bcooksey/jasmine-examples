describe('Currency Converter', function() {

   it('should properly convert Bitcoin to USD', function() {
      expect(Converter.bitcoinToUsd(1)).toBe(918);
   });

   it('should properly convert Dogecoin to USD', function() {
      expect(Converter.dogecoinToUsd(1)).toBe(0.00027);
   });

   it('should throw an exception on a negative amount', function() {
      expect(Converter.bitcoinToUsd.bind(null, -1)).toThrow();
   });
});
