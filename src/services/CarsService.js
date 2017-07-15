
/*
 * const api = new CarsService()
 * api.getCars().then(resp => console.log(resp))
*/
class CarsService {
  constuctor (options) {
    this.options = options
  }
  request (req) {
    console.log('request', req)
    return fetch(req)
  }
  jsonRequest (req) {
    return this.request(req).then(resp => resp.json())
  }
  getCars (params) {
    return this.jsonRequest('/db/default/_all_docs?start_key=car-1&end_key=car-z&include_docs=true')
  }
  getCar (id) {
    return this.jsonRequest(`/db/default/${id}`)
  }
}
export default new CarsService()
