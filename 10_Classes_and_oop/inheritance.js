class Sample
{
    constructor(username)
    {
        this.username = username
    }

    logMe()
    {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends Sample
{
    constructor(username, email, password)
    {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse()
    {
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const teacher1 = new Teacher("samii","samii@gmail.com","123")
teacher1.addCourse()
teacher1.logMe()

const use1 = new Sample('use1')
use1.logMe()

console.log(teacher1 instanceof Sample);


