var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Kelley';
    var text = 'Hello';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Test';
    var lat = 1;
    var long = 1;
    var url = `https://www.google.com/maps?q=${lat},${long}`;
    var message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      url: url
    });
  });
});
