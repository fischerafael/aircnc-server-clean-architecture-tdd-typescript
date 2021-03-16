import { formatHttpResponse } from '../_utils'

type findUserByEmailService = (
    email: string
) => Promise<{ _id: string; email: string }> | Promise<undefined>

export const sessionsUseCases = {
    async create(findUserByEmailService: findUserByEmailService) {
        const user = await findUserByEmailService('rafael@gmail.com')
        if (!user) throw new Error('User does not exist')

        return formatHttpResponse(200, {
            email: user.email,
            _id: user._id
        })
    }
}
