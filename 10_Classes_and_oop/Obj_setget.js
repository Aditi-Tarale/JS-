const User =
{
    _email : 'radhu@.com',
    _password: "abcd",

    get email()
    {
        return this._email.toUpperCase()
    },
    set email(value)
    {
        this._email = value
    }
}


const pop = Object.create(User)
console.log(pop.email);
