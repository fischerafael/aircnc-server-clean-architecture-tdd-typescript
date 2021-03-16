import { createUser } from '.'

describe('testing user entity', () => {
    test('user should have an email field', () => {
        const user = createUser({ email: 'rafael@gmail.com' })
        expect(user.email).toBe('rafael@gmail.com')
    })

    test('throws on email without @', () => {
        const error = () => {
            createUser({ email: 'rafael' })
        }
        expect(error).toThrow()
    })

    test('throws when email is shorter than 6 characters', () => {
        const error = () => {
            createUser({ email: 'rafae' })
        }

        expect(error).toThrow()
    })
})
