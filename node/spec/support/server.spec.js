var request = require('request')
describe('calc', () => {
    it('should multiple 2 and 2', () => {
        expect(2*2).toBe(4)
    })
})

describe('get users', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3001/users', (err, res) => {
            console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('should return a list, thats not empty', (done) => {
        request.get('http://localhost:3001/users', (err, res) => {
            //console.log(res.body)
            expect(JSON.parse(res.body).length).toBeGreaterThan(0)
            done()
        })
    })
})

describe('get password from user', () => {
    it('should return 200 Ok', (done) => {
        request.get('http://localhost:3001/users/pnokn', (err, res) => {
            console.log(res.body)
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
    it('password should be Peter@2020', (done) => {
        request.get('http://localhost:3001/users/pnokn', (err, res) => {
            console.log(res.body)
            expect(JSON.parse(res.body)[0].password).toEqual("Peter@2020")
            done()
        })
    })
})