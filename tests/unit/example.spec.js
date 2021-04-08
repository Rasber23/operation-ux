import { expect } from "chai"
import { shallowMount } from "@vue/test-utils"
import BookOfDeath from "@/components/BookOfDeath.vue"
import fetchMock from "fetch-mock/es5/server"
import FetchService from "../../src/services/FetchService"

describe("FetchService.js", () => {
  before(() => {
    fetchMock.get("https://openlibrary.org/subjects/love.json?published_in=1920", { work_count: 17 })
  })

  it("checks for how many books published in subject love in 1920", async () => {
    let work_count = await FetchService.workCountForOneSubject("love")

    expect(work_count).to.equal(17)
    expect(fetchMock.called("https://openlibrary.org/subjects/love.json?published_in=1920")).to.be.true
  })

  after(() => fetchMock.restore())
})

describe("BookOfDeath", () => {
  it("contains a heading", () => {
    const text = "Kan en författare överleva vikten av sina böcker?"
    const wrapper = shallowMount(BookOfDeath)
    expect(wrapper.text()).to.include(text)
  })
})

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
