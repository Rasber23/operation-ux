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
    require("./../assets/person1.png")
  ),
  new User(
    "Nathalie",
    "Ux-designer",
    "Min favoritbok är Sagan om ringen-trilogin då jag alltid har velat promenera i Middle Earth och äta po-ta-toes.",
    require("./../assets/person1.png")
  ),
  new User(
    "August",
    "Ux-designer",
    " Min favoritbok är Avatar The last Airbender: The Rise of Kyoshi - Att kunna slåss med kraften av de fyra elementen låter underbart.",
    require("./../assets/person1.png")
  ),
  new User(
    "Linus",
    "Ux-designer",
    "Min favoritbok är Robinson Crusoe då tanken på att ha min egen farm på en öde ö är ganska lockande!",
    require("./../assets/logo.png")
  ),
  new User(
    "Rasmus",
    "Utvecklare",
    "Good To Great Good to Great presenterar resultaten av ett femårigt forskningsprojekt. Collins har identifierat samtliga börsnoterade amerikanska företag som uppfyllt två kriterier. Det första är att de under minst femton år varit ganska \"vanliga\" företag med börskurser som skvalpat runt index. Men sedan har något hänt. Efter en brytpunkt har de under minst femton år i rad haft en kursutveckling som varit minst tre gånger bättre än index. Collins fann elva företag som uppfyllde dessa kriterier. Vad är det som skiljer dessa företag från andra? Hur tar man språnget från \"Good to Great\"? Det är den frågan Collins försöker besvara. ",
    require("./../assets/person1.png")
  ),
  new User(
    "Lukas",
    "Utvecklare",
    "Kafka på Stranden av Haruki Murakami, då man aldrig vet vad som väntar sig på nästa rad.",
    require("./../assets/person1.png")
  ),
  new User(
    "Helena",
    "Utvecklare",
    "En av mina favoritböcker är Sapiens av Yuval Noah Harari. Man får en större förståelse för mänskligheten, vart vi kommer ifrån och hur vi vi råkade hamna där vi är idag.",
    require("./../assets/person1.png")
  ),
]

const PeopleService = {
  getUsers() {
    return users
  },
}

export default PeopleService
