let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

  it('addition test', function () {

    homepage.get('http://juliemr.github.io/protractor-demo/');

    homepage.enterFirstNumber(4);
    homepage.enterSecondNumber(3);
    homepage.clikGo();

    homepage.verifyResult('7');

    browser.sleep(3000);





  });


});