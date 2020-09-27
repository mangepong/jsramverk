/**
 * Test for getting started with Selenium.
 */
"use strict";

const By = require("selenium-webdriver").By;
const assert = require("assert");
const test = require("selenium-webdriver/testing");
var webdriver = require("selenium-webdriver");
let browser;

test.describe("Test", function() {

    test.beforeEach(function(done) {
        this.timeout(20000);
        // browser = new webdriver.Builder().
        //     withCapabilities(webdriver.Capabilities.firefox()).build();
        browser = new webdriver.Builder().forBrowser('firefox').build();
        browser.get("https://mangepongjs.me/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test index", function(done) {
        browser.getTitle().then(function(title) {
            assert.equal(title, "Me sida");
        });

        browser.findElement(By.css("h3")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Om mig!");
            });
        });

        done();
    });



    test.it("Test register testuser", function(done) {
        browser.findElement(By.linkText("Registrera")).then(function(element) {
            element.click();
        });

        browser.findElement(By.css("h4")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Register");
            });
        });

        browser.findElement(By.css("input[type=text]")).then(function(element) {
            element.sendKeys("testtest@test.se");
        });

        browser.findElement(By.css("input[type=password]")).then(function(element) {
            var button = browser.findElement(By.css("button"));
            element.sendKeys("test1234");
            button.click();
        });
        done();
    });

    test.it("Test login testuser", function(done) {
        browser.findElement(By.linkText("Logga in")).then(function(element) {
            element.click();
        });

        browser.findElement(By.css("h4")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Login");
            });
        });

        browser.findElement(By.css("input[type=text]")).then(function(element) {
            element.sendKeys("testtest@test.se");
        });

        browser.findElement(By.css("input[type=password]")).then(function(element) {
            var button = browser.findElement(By.css("button"));
            element.sendKeys("test1234");
            button.click();
        });
        done();
    });
});