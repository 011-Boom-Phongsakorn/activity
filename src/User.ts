class User {
    private username: string
    private password: string
    private name: string
    private role: string
    private email: string

    constructor(username: string, password: string, name: string, role: string, email: string){
        this.username = username
        this.password = password
        this.name = name
        this.role = role
        this.email = email
    }

    public register(username: string, password: string): boolean{
        if(username && password){
            return true
        }else {
            return false
        }
    }

    public login(username: string, password: string): boolean{
        if(this.username === username){
            if(this.password === password){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }

    public logout():boolean {
        return true
    }

    public updateProfile(name: string, email: string): void{
        this.name = name
        this.email = email
    }

    public toString(): string{
        return `User[username=${this.username}, password=${this.password}, name=${this.name}, role=${this.role}, email=${this.email}]`
    }
}

export { User }