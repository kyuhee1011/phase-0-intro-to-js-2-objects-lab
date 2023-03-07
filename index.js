// Write your solution in this file!
const employee = {
    name: "Ray",
    streetAddress: "4521 S Laburnum Ave, Richmond, VA 23231"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(object, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete employee[key];
    return employee
}