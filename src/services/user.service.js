const USER_KEY = 'USER';

var gUser = JSON.parse(localStorage.getItem(USER_KEY));

function getUser() {
    return JSON.parse(JSON.stringify(gUser));
}

function addUser(name){
  gUser = {
    name,
    coins: 100,
    moves:[]
  };
  localStorage.setItem(USER_KEY, JSON.stringify(gUser))
  return getUser();
}

function addMove(contact, amount){
  amount = +amount;
  gUser.moves.push({toId: contact._id, to: contact.name, at: Date.now(), amount});
  gUser.coins = gUser.coins - amount;
  localStorage.setItem(USER_KEY, JSON.stringify(gUser));
  return getUser();
}

function logout() {
  if (!gUser) return;
  gUser = null;
  localStorage.removeItem(USER_KEY);
}

export default {
    getUser,
    addUser,
    addMove,
    logout
}

