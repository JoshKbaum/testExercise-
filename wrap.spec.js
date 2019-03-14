const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('returns the correct result', ()=>{
    expect(wrap('i cant seem', 5)).to.equal('i can\nt see\nm');
  })
});