const url = 'https://jsonplaceholder.typicode.com/posts'

describe('My first API test', () => {
    it('should test json placeholder API', function(){

        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

    cy.request(
        {
            method: 'post',
            url: url,
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {'Content-type': 'application/json'}
        }
    ).then((response) => {
        const body = JSON.stringify(response.body)
        cy.log(body)
    })
    })
})