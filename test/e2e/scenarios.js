describe('Cartang App', function() {

  describe('Product list view', function() {

    beforeEach(function() {
      browser.get('http://localhost/cartang/index.html');
    });


    var query = element(by.model('query'));

    it('should filter the product list as user types into the search box', function() {

      var productList = element.all(by.repeater('product in products'));

      expect(productList.count()).toBe(7);

      query.sendKeys('nexus');
      expect(productList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(productList.count()).toBe(2);
    });

    it('should display the current filter value in the title bar', function() {
      query.clear();
      expect(browser.getTitle()).toMatch(/JS shopping cart\s*$/);

      query.sendKeys('nexus');
      expect(browser.getTitle()).toMatch(/JS shopping cart nexus$/);
    });


    it('should render product specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('motorola');
      element.all(by.css('.products li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/products/motorola-xoom-with-wifi');
      });
    });


  });
});