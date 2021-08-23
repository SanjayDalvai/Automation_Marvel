const { Given } = require('@cucumber/cucumber');
//const {assert} = require('chai');
//const {default: pause} = require('webdriverio/build/commands/browser/pause');

var Before_hover_location='';

Given("I open url {string}",(link)=> {
    link="https://www.marvel.com/explore";
    browser.url(link);
    browser.maximizeWindow();
});