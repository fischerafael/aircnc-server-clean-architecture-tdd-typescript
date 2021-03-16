import { createSpot } from '.'

describe('testing user entity', () => {
    test('spot should have an owner', () => {
        const error = () =>
            createSpot({
                owner: '',
                thumbnail: 'www.image.com',
                company: 'Google',
                techs: ['React'],
                price: 10
            })
        expect(error).toThrow('Spot should have an onwer')
    })

    test('spot should have thumbnail', () => {
        const error = () =>
            createSpot({
                owner: 'rafael',
                thumbnail: '',
                company: 'Google',
                techs: ['React'],
                price: 10
            })
        expect(error).toThrow('Spot should have a thumbnail')
    })

    test('spot should have company', () => {
        const error = () =>
            createSpot({
                owner: 'rafael',
                thumbnail: 'www.google.com',
                company: '',
                techs: ['React'],
                price: 10
            })
        expect(error).toThrow('Spot should have a company')
    })

    test('spot price should be greater or equal to 0', () => {
        const error = () =>
            createSpot({
                owner: 'rafael',
                thumbnail: 'www.google.com',
                company: 'Google',
                techs: ['react'],
                price: -1
            })
        expect(error).toThrow('Spot price should be greater or equal to 0')
    })

    test('spot techs should be an array of at leat one element', () => {
        const error = () =>
            createSpot({
                owner: 'rafael',
                thumbnail: 'www.google.com',
                company: 'Google',
                techs: [],
                price: 10
            })
        expect(error).toThrow(
            'Spot techs should be an array of at leat one element'
        )
    })
})
