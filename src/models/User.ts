class User
{
    public name: string;
    public email: string;
    public id: number;

    constructor(){
        this.name = '';
        this.email = '';
        this.id = 0;
    }
}

export { User }