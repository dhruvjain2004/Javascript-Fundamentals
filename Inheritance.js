//inheritance in js
class person {
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class engineer extends person {
    work(){
        console.log("solve algos");
    }
}
class doctor extends person {
    work(){
        console.log("treat patients");
    }
}
let dhruvobj = new engineer();
//super keyword in js
class person {
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
}
class engineer extends person {
    constructor(branch){
        console.log("enter child constructor");
        super();
        this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("solve algos");
    }
}
let dhruvobj = new engineer();
//q1
let Data = "secret information";

class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewdata() {
        console.log("data = ",Data);
    }
}

let dhruv1 = new user("dhruv","dhruv@123com");
let dhruv2 = new user("dhruv2", "dhruv@456.com");
//q2
let Data = "secret information";

class user {
    constructor(name,email) {
        this.name = name;
        this.email = email;
    }

    viewdata() {
        console.log("data = ",Data);
    }
}

class admin extends user {
    constructor(name,email){
        super(name,email);
    }
    editData() {
        Data = "some new value";
    }
}

let dhruv1 = new user("dhruv","dhruv@123com");
let dhruv2 = new user("dhruv2", "dhruv@456.com");
let admin1 = new admin("admin","admin@123.com");
