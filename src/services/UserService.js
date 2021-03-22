class User {
  constructor(name, text) {
    this.name = name
    this.text = text
  }
}

const users = [
  new User(
    "Frida",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  ),
  new User(
    "Nathalie",
    "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Dui faucibus in ornare quam viverra orci sagittis eu volutpat."
  ),
  new User(
    "August",
    "Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Cras semper auctor neque vitae. Est ante in nibh mauris. "
  ),
  new User(
    "Linus",
    "Sit amet consectetur adipiscing elit. Libero id faucibus nisl tincidunt eget nullam. Faucibus scelerisque eleifend donec pretium."
  ),
  new User(
    "Rasmus",
    "Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor."
  ),
  new User(
    "Lukas",
    "Maecenas pharetra convallis posuere morbi leo urna molestie. Tincidunt tortor aliquam nulla facilisi cras."
  ),
  new User(
    "Helena",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  ),
]

const PeopleService = {
  getUsers() {
    return users
  },
}

export default PeopleService
