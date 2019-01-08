module.exports={
  'Demo test sample app' : function (browser){
    browser.
    url('https://google.com')
    .waitForElementVisisble('body', 1000)
    .click("#sample")
    .end();
  }  
}
