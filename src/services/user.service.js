const USER_KEY = 'USER';

var gUser = JSON.parse(localStorage.getItem(USER_KEY));
if(!gUser){
    gUser = {
        name: '',
        coins: 0,
        moves:[{toId: '', to: "", at: Date.now(), amount: 1}]
    } 
}

function getUser() {
    return new Promise((resolve, reject) => { 
        resolve(gUser);
        gUser ? resolve(gUser) : reject('user not found!');
    })
}

function addUser(name){
    const newUser = {
      name,
      coins: 100,
      moves:[ ]
    };
    gUser = newUser;
    localStorage.setItem(USER_KEY, JSON.stringify(gUser))
  }

export default {
    getUser,
    addUser
}

