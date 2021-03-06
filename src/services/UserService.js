// service for getting names, info and images for everyone involved for the about page

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
    "Min favoritbok är Harry Potter-böckerna då jag vill kunna skapa magi. Och vem vill inte dricka en kopp te i Hagrids stuga",
    require("./../assets/Foton/frida.png")
  ),
  new User(
    "Nathalie",
    "Ux-designer",
    "Min favoritbok är Sagan om ringen-trilogin då jag alltid har velat promenera i Middle Earth och äta po-ta-toes.",
    require("./../assets/Foton/nathalie.jpg")
  ),
  new User(
    "August",
    "Ux-designer",
    " Min favoritbok är Avatar The last Airbender: The Rise of Kyoshi - Att kunna slåss med kraften av de fyra elementen låter underbart.",
    require("./../assets/Foton/august.jpg")
  ),
  new User(
    "Linus",
    "Ux-designer",
    "Min favoritbok är Robinson Crusoe då tanken på att ha min egen farm på en öde ö är ganska lockande!",
    require("./../assets/Foton/linus.jpg")
  ),
  new User(
    "Rasmus",
    "Utvecklare",
    "Good To Great Good to Great presenterar resultaten av ett femårigt forskningsprojekt. Collins har identifierat",
    require("./../assets/person1.png")
  ),
  new User(
    "Lukas",
    "Utvecklare",
    "Kafka på Stranden av Haruki Murakami, då man aldrig vet vad som väntar på nästa rad.",
    require("./../assets/Foton/lukas.jpeg")
  ),
  new User(
    "Helena",
    "Utvecklare",
    "En av mina favoritböcker är Sapiens av Yuval Noah Harari. Man får en större förståelse för mänskligheten, vart vi kommer ifrån och hur vi vi råkade hamna där vi är idag.",
    require("./../assets/Foton/helena.jpg")
  ),
]

const PeopleService = {
  getUsers() {
    return users
  },
}

export default PeopleService
