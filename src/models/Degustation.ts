class Degustation {
    name: string = ''
    products: DegustationProduct[] = []
}



class DegustationProduct{
    productId : number = 0
    degustationId: number = 0
}

class DegustationParameter{
    name: string = ''
    degustationId: number = 0
}

export {Degustation, DegustationParameter, DegustationProduct}