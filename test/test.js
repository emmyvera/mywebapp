const chai = require("chai")
const server = require("../index")

//Assert Method
chai.should()

describe("Post API", () =>{
    // Testing the get route
    it("It Should GET all the Post", (done) => {
        chai.request(server)
            .get("/post")
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("array")
                done()
            })
    })

})