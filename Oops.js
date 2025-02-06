//oops in js
const student = {
    fullname : "dhruvjain",
    marks: 90,
    printmarks: function() {
        console.log("marks = ",this.marks);
    },
};
//prototype in js
const employee = {
    calctax() {
        console.log("tax rate is 10%");
    },
};

const karanarjun  = {
    salary : 50000,
    calctax() {
        console.log("tax rate is 20%");
    },
};
const karanarjun1  = {
    salary : 50000,
};
const karanarjun2  = {
    salary : 50000,
};
const karanarjun3  = {
    salary : 50000,
};
karanarjun.__proto__ = employee;
karanarjun1.__proto__ = employee;
karanarjun2.__proto__ = employee;
karanarjun3.__proto__ = employee;
//classes in js
class toyotacar {
    constructor(brand,mileage) {
        console.log("creating new object");
        this.brand = this.brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }
}
let fortuner = new toyotacar("fortuner",10);
console.log(fortuner);
let lexus = new toyotacar("lexus",12);
console.log(lexus);
