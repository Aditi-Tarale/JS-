class User
{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }

    get email()
    {
        return this._email.toUpperCase()
    }
    set email(value)
    {
        this._email=value
    }
    get password()
    {
        return this._password.toUpperCase()
    }
    set password(pass)
    {
       this._password =pass
    }

}

const aditi = new User("a@diti.ai","hyjl")
console.log(aditi.email);
