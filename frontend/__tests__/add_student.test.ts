//var axios = require("axios")

// describe('get users', () => {
//   it('should return 200 Ok', (done) => {
//       axios.get('http://localhost:3001/users', (res: any) => {
//           console.log(res.body)
//           expect(res.statusCode).toEqual(200)
//           done()
//       })
//   })
//   it('should return a list, thats not empty', (done) => {
//       axios.get('http://localhost:3001/users', (res:any) => {
//           //console.log(res.body)
//           expect(JSON.parse(res.body).length).toBeGreaterThan(0)
//           done()
//       })
//   })
// })

// describe('get password from user', () => {
//   it('should return 200 Ok', (done) => {
//       axios.get('http://localhost:3001/users/pnokn', (res:any) => {
//           console.log(res.body)
//           expect(res.statusCode).toEqual(200)
//           done()
//       })
//   })
//   it('password should be Peter@2020', (done) => {
//       axios.get('http://localhost:3001/users/pnokn', (res:any) => {
//           console.log(res.body)
//           expect(JSON.parse(res.body)[0].password).toEqual("Peter@2020")
//           done()
//       })
//   })
// })