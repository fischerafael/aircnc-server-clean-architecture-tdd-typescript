export function formatHttpResponse(status: number, data?: any) {
    if (!data)
        return {
            status,
            data: {
                message: 'No data'
            }
        }

    return {
        status,
        data
    }
}
