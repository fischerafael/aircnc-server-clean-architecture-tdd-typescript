import { userUseCases } from '.'

const createUserServiceMock = async ({ email }: { email: string }) => {
    const data = await { email: email, _id: '123' }
    return data
}

const findUserByEmailMock = async (email: string) => {
    const data = await { _id: '123', email: 'rafael2@gmail.com' }
    return data
}

const userNotFoundMock = async (email: string) => {
    return undefined
}

describe('testing user entity', () => {
    test('expect create user usecase to have status 201', async () => {
        const { status } = await userUseCases.create(
            {
                email: 'rafael@gmail.com'
            },
            createUserServiceMock,
            userNotFoundMock
        )
        expect(status).toBe(201)
    })

    test('expect create user usecase response data to return a data object', async () => {
        const { data } = await userUseCases.create(
            {
                email: 'rafael@gmail.com'
            },
            createUserServiceMock,
            userNotFoundMock
        )
        expect(data).toStrictEqual({
            _id: '123',
            email: 'rafael@gmail.com'
        })
    })

    test('expect to throw an error when creating an user with an email that already exists', () => {
        const error = async () => {
            await userUseCases.create(
                { email: 'rafael2@gmail.com' },
                createUserServiceMock,
                findUserByEmailMock
            )
        }

        expect(error).rejects.toThrow('User already exists')
    })
})
