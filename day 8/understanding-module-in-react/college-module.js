let myFees = 0;

function payFee(payment) {
    // console.log("your fee " + (payment) + "is paid");
    console.log(`your fees ${payment} is paid`)
    myFees = payment;
}

function getFee() {
    return myFees;
}

export {
    payFee, getFee
};