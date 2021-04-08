// import { expect } from "chai"
// import { shallowMount } from "@vue/test-utils"
// import BookOfDeath from "@/components/BookOfDeath.vue"
// import fetchMock from "fetch-mock/es5/server"
// // import fetchMock from "@types/fetch-mock"

// describe("DadService.js", () => {
//   before(() => {
//     fetchMock.get("https://icanhazdadjoke.com/", { joke: "not a joke" })
//   })

//   it("checks for a proper joke", async () => {
//     let joke = await fetch("https://icanhazdadjoke.com/", {
//       headers: { Accept: "application/json" },
//     })
//     let json = await joke.json()
//     return json.joke, expect(joke).to.equal("not a joke")
//     expect(fetchMock.called("https://icanhazdadjoke.com/")).to.be.true
//   })

//   after(() => fetchMock.restore())
// })

// describe("BookOfDeath", () => {
//   it("contains a heading", () => {
//     const text = "Kan en författare överleva vikten av sina böcker?"
//     const wrapper = shallowMount(BookOfDeath)
//     expect(wrapper.text()).to.include(text)
//   }),
//     before(() => {
//       fetchMock.get("http://example.com", { data: 200 })
//     })
//   it("checks for a proper joke", async () => {
//     let data = await fetch('http://example.com')
//     expect(data).to.equal(200)
//     // expect(fetchMock.called("https://icanhazdadjoke.com/")).to.be.true
//   })

//   after(() => fetchMock.restore())
// })

// fetchMock.mock('http://example.com', 200);
// const res = await fetch('http://example.com');
// assert(res.ok);
// fetchMock.restore();
