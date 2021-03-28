class User {
  constructor(name, role, text, image) {
    this.name = name
    this.role = role
    this.text = text
    this.image = image
  }
}

const users = [
  new User(
    "Frida",
    "Ux-designer",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    require("./../assets/person1.png")
  ),
  new User(
    "Nathalie",
    "Ux-designer",
    "Convallis posuere morbi leo urna molestie at elementum eu facilisis. Dui faucibus in ornare quam viverra orci sagittis eu volutpat.",
    require("./../assets/person1.png")
  ),
  new User(
    "August",
    "Ux-designer",
    "Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Cras semper auctor neque vitae. Est ante in nibh mauris. ",
    require("./../assets/person1.png")
  ),
  new User(
    "Linus",
    "Ux-designer",
    "Sit amet consectetur adipiscing elit. Libero id faucibus nisl tincidunt eget nullam. Faucibus scelerisque eleifend donec pretium.",
    require("./../assets/logo.png")
  ),
  new User(
    "Rasmus",
    "Utvecklare",
    "Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor.",
    require("./../assets/person1.png")
  ),
  new User(
    "Lukas",
    "Utvecklare",
    "Maecenas pharetra convallis posuere morbi leo urna molestie. Tincidunt tortor aliquam nulla facilisi cras.",
    require("./../assets/person1.png")
  ),
  new User(
    "Helena",
    "Utvecklare",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    require("./../assets/person1.png")
  ),
]

const PeopleService = {
  getUsers() {
    return users
  },
}

export default PeopleService
