type Email = string

interface User {
    email: Email
}

export function createUser(data: User) {
    const { email } = data

    if (!email.includes('@')) throw new Error('Email should contain an @')

    if (email.length <= 5)
        throw new Error('Email should be at least 5 characters long')

    const user = {
        email: data.email
    }

    return user
}
