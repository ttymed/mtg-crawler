import chai from 'chai'
import { getPageHtml } from '../magic-spoiler-script/index'

let expect = chai.expect

describe('get Page Html', () => {
  it('should return a successful promise full of html', (done) => {
    getPageHtml('http://www.google.com').then((html) => {
      console.log(html)
      expect(html).to.match(/head/)
      done()
    })    
  })
})
