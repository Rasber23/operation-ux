const years = [1920, 1940, 1960, 1980, 2000, 2020]

let workCount = []

const FetchService = {
  async workCountForOneSubjectAndYear(selected, year) {
    let resp = await fetch("https://openlibrary.org/subjects/" + selected + ".json?published_in=" + year)
    let json = await resp.json()
    return json.work_count
  },

  async workCountForSubject(selected) {
    workCount = []

    for (let i = 0; i < 6; i++) {
      let work_count = await this.workCountForOneSubjectAndYear(selected, years[i])
      workCount.push(work_count)
    }
    return workCount
  },
}

export default FetchService
