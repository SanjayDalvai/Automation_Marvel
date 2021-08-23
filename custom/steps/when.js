const { When } = require('@cucumber/cucumber');
//const {assert} = require('chai');
const {default: pause} = require('webdriverio/build/commands/browser/pause');


When("I scrolldown till element {string}",(scroll)=>{
    scroll=$("//h3[contains(text(),'Comic Events')]");
    //var scroll = $(locator);
    scroll.scrollIntoView();
});

When("I save the position of element {string}",(comic_card)=>{
    comic_card=$("//img[@mvl-type='lob' and contains(@mvl-src,'empyre_com_crd_01.jpg')]");
    Before_hover_location=comic_card.getLocation();
    //before_location = Number(comic_card.getLocation('y'));
    console.log("The position before hovering is",Before_hover_location);
});

When("I hover on the element {string}",(mouse)=>{
    comic_card=$("//img[@mvl-type='lob' and contains(@mvl-src,'empyre_com_crd_01.jpg')]");
    mouse=$(comic_card);
    mouse.moveTo();
    browser.pause(3000);
    //var comic_card = $(locator);
    //comic_card.moveTo();
});