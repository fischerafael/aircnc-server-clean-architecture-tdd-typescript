import { formatHttpResponse } from '.'

describe('testing usecases utils functions', () => {
    test('it should return the same status number provided', () => {
        const { status, data } = formatHttpResponse(200, 'ok')

        expect(status).toEqual(200)
    })

    test('it should return the same data provided', () => {
        const { status, data } = formatHttpResponse(200, 'ok')

        expect(data).toEqual('ok')
    })

    test('it should return no data message if no data is provided', () => {
        const { status, data } = formatHttpResponse(200)

        expect(data.message).toEqual('No data')
    })
})
