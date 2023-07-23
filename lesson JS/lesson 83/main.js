const user = {
  firstName: 'Sergey',
  lastName: 'Marakhovsky',
  age: 33,
  country: 'Russia',
  isAdmin: false
}

// =====================================

const users = [
  {
    position: 'manager',
    isAdmin: false,
    sayHello(name) {
      console.log(`Hello ${name}!`)
    }
  },
  {
    position: 'General manager',
    isAdmin: true,
    sayHello(name) {
      console.log(`Good morning Mr.${name}!`)
    }
  }
]

for (i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    users[i].sayHello('Leon')
  } else {
    users[i].sayHello('Den')
  }
}

// =====================================

const members = [
  {
    name: 'Kуanu',
    age: 58,
    isAdmin: true
  },
  {
    name: 'Will',
    age: 54,
    isAdmin: false
  },
  {
    name: 'Benedict',
    age: 47,
    isAdmin: true
  },
  {
    name: 'Matthew',
    age: 53,
    isAdmin: false
  },
  {
    name: 'Chris',
    age: 39,
    isAdmin: true
  },
  {
    name: 'Idris',
    age: 50,
    isAdmin: false
  }
]

let notAdminMembers = 0

for (i = 0; i < members.length; i++) {
  if (members[i].isAdmin === false) {
    notAdminMembers++
  }
}

console.log(notAdminMembers)


