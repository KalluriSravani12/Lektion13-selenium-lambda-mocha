const {Builder, By, Key} = require('selenium-webdriver');
//Different asserts
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;
//Mocha
describe('Add a todo to LambdaTest sample app', ()=>{
    it('Successfully adds a todo', async () =>{
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        //await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.ENTER);

        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium');
        await driver.findElement(By.css('#addbutton')).click();

        //Findnwhat we just put into the list
        let todoText = await driver.findElement(By.css('li:last-child')).getText();
        console.log(todoText);
        let items = await driver.findElements(By.css('li'));
        let thirdItemText = await items[2].getText();
        thirdItemText.should.equal('Third Item');
        console.log(thirdItemText);        
        //Asserts
        assert.equal(todoText, 'Learn Selenium');//Builtin Node
        expect(todoText).to.equal('Learn Selenium');// Chai expect
        todoText.should.equal('Learn Selenium');// Chai should

        //close the browser and exit Selenium
        await driver.quit();


    });
    it('This test should be pending');
});