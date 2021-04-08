const years = [1920, 1940, 1960, 1980, 2000, 2020]

let workCount = []

const FetchService = {
  async workCountForSubject(selected) {
    workCount = []

    for (let i = 0; i < 6; i++) {
      let resp = await fetch("https://openlibrary.org/subjects/" + selected + ".json?published_in=" + years[i])
      let subject = await resp.json()
      workCount.push(subject.work_count)
    }
    return workCount
  },

  async workCountForOneSubject(selected) {
    let resp = await fetch("https://openlibrary.org/subjects/" + selected + ".json?published_in=1920")
    let json = await resp.json()
    return json.work_count
  },
}

export default FetchService
