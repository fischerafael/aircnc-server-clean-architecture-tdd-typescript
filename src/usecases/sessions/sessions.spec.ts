import { sessionsUseCases } from '.'

const mockFindUserService = async () => {
    return {
        _id: '123',
        email: 'rafael@gmail.com'
    }
}

const userDoesNotExistMockFindUserService = async () => {
    return undefined
}

describe('testing sessions usecases', () => {
    test('it should return an object with _id when email exists', async () => {
        const { data, status } = await sessionsUseCases.create(
            mockFindUserService
        )

        expect(data._id).toEqual('123')
    })

    test('it should return an object with email when email exists', async () => {
        const { data, status } = await sessionsUseCases.create(
            mockFindUserService
        )

        expect(data.email).toEqual('rafael@gmail.com')
    })

    test('it should throw an error if user does not exist', async () => {
        const error = async () =>
            await sessionsUseCases.create(userDoesNotExistMockFindUserService)

        expect(error).rejects.toThrow('User does not exist')
    })

    test('it should return status 200 if user logged in successfully', async () => {
        const { data, status } = await sessionsUseCases.create(
            mockFindUserService
        )

        expect(status).toEqual(200)
    })
})
