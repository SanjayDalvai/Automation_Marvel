const { Then } = require('@cucumber/cucumber');
const {assert} = require('chai');
//const {default: pause} = require('webdriverio/build/commands/browser/pause');

Then ("I expect the element {string} position should differ from actual position",(After_Hover_location)=>{

    After_Hover_location=comic_card.getLocation();

   // var comic_card = $(locator);
    //var after_location = Number(comic_card.getLocation('y'));
    console.log("The position after hovering is", After_Hover_location);
    assert(Before_hover_location!=After_Hover_location);
});