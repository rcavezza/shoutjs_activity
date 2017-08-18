const assert = require('assert')
const Shouty = require('../../lib/shouty')
const Person = require('../../lib/person')

const {defineSupportCode} = require('cucumber')

defineSupportCode(({Before, Given, When, Then}) => {
  const ARBITARY_MESSAGE = 'Hello, world'
  let shouty
  Before(function() {
    shouty = new Shouty()
    people = new Map()
  })

  Given('{str} is at {int}, {int} with a volume of {int}', function (name, x, y, vol) {
    people.set(name,new Person(name,vol,x,y))
    shouty.setPerson(people.get(name))
  })

  When('{str} shouts', function (name) {
    shouty.shout(people.get(name), ARBITARY_MESSAGE)
  })

  Then('Lucy should hear Sean', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 1)
  })

  Then('Lucy should hear nothing', function () {
    assert.equal(shouty.getMessagesHeardBy('Lucy').size, 0)
  })
})
