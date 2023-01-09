type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : {birthday: new Date() };
}
let customer = getCustomer(1);
// Optional property access opearator
console.log(customer?.birthday?.getFullYear());

let log: any = null;
log?.('a');
