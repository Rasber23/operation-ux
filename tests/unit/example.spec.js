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
    let work_count = await FetchService.workCountForOneSubjectAndYear("love", 1920)

    expect(work_count).to.equal(17)
    expect(fetchMock.called("https://openlibrary.org/subjects/love.json?published_in=1920")).to.be.true
  })

  after(() => fetchMock.restore())
})

describe("BookOfDeath", () => {
  it("contains a heading text", () => {
    const text = "Kan en författare överleva vikten av sina böcker?"
    const wrapper = shallowMount(BookOfDeath)
    expect(wrapper.text()).to.include(text)
  })
})
