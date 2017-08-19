const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Kelley',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Nick',
        room: 'Node Course'
      }
    ]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Kelley',
      room: 'Kombucha drinkers'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);

  });

  it('should remove a user', () => {
    var userId = '3';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '89';
    var user = users.removeUser(userId);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user by id', () => {
    var userId = '2';
    var resUser = users.getUser(userId);
    expect(resUser.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '89';
    var resUser = users.getUser(userId);
    expect(resUser).toNotExist();
  });


  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Kelley', 'Nick']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
