const assert = require('assert')
const Shouty = require('../../lib/shouty')
const Person = require('../../lib/person')

const {defineSupportCode} = require('cucumber')

defineSupportCode(({Before, Given, When, Then}) => {
  const ARBITARY_MESSAGE = 'Hello, world'
  let shouty
  Before(function() {
    shouty = new Shouty()
  })

  Given('Lucy is at {int}, {int} with volume {int}', function (x, y, vol) {
    shouty.setLocation('Lucy', new Person(x, y, vol))
  })

  Given('Sean is at {int}, {int} with volume {int}', function (x, y, vol) {
    shouty.setLocation('Sean', new Person(x, y, vol))
  })

  When('Sean shouts', function () {
    shouty.shout('Sean', ARBITARY_MESSAGE)
  })

  Then('Lucy should hear Sean', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 1)
  })

  Then('Lucy should hear nothing', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 0)
  })

})
