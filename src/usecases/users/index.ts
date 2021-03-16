import { createUser } from '../../entities/user'
import { formatHttpResponse } from '../_utils'

type createUserService = ({
    email
}: {
    email: string
}) => Promise<{ _id: string; email: string }>

type findUserByEmail = (
    email: string
) => Promise<{ _id: string; email: string }> | Promise<undefined>

export const userUseCases = {
    async create(
        data: { email: string },
        createUserService: createUserService,
        findUserByEmailService: findUserByEmail
    ) {
        const DEFAULT_ID = '123'

        const userData = createUser({ email: data.email })

        const userExists = await findUserByEmailService(userData.email)
        if (userExists) throw new Error('User already exists')

        const { email, _id } = await createUserService(userData)

        return formatHttpResponse(201, { email, _id: _id || DEFAULT_ID })
    }
}
