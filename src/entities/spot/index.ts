type Thumbnail = string
type Company = string
type Price = number
type Techs = string[]
type Owner = string

interface Spot {
    thumbnail: Thumbnail
    company: Company
    price: Price
    techs: Techs
    owner: Owner
}

export function createSpot(data: Spot) {
    const { owner, thumbnail, company, techs, price } = data

    if (!owner) throw new Error('Spot should have an onwer')
    if (!thumbnail) throw new Error('Spot should have a thumbnail')
    if (!company) throw new Error('Spot should have a company')
    if (price < 0) throw new Error('Spot price should be greater or equal to 0')
    if (techs.length < 1)
        throw new Error('Spot techs should be an array of at leat one element')

    const spot = {
        owner: data.owner,
        thumbnail: data.thumbnail,
        company: data.company,
        techs: data.techs,
        price: data.price
    }
    return spot
}
