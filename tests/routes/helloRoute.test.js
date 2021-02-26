
import axios from 'axios'

describe('Comments API', function()  {
    beforeAll(() => {
        axios.defaults.baseURL = 'http://127.0.0.1:3000/api' //process.env.DM_BASE_URL + process.env.DM_API_ROOT
        axios.defaults.headers.common['Content-Type'] = 'application/json'
       
      })


      beforeEach(done => setTimeout(() => done(), 1100))
    it('should say hello wolrd', async () => {
      const response = await axios.get('/hello')
      expect(response.status).toBe(200)
      expect(response.data).toBe('Hello world!')
      
    })


})