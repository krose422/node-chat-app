const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    var string = 123;
    expect(isRealString(string)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var string = '   ';
    expect(isRealString(string)).toBe(false);
  });

  it('should generate the correct message object', () => {
    var string = 'I love kombucha';
    expect(isRealString(string)).toBe(true);
  });
});
