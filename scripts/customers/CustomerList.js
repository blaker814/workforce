import { getEmployees, useEmployees } from "../employees/EmployeeProvider.js"
import { getCustomers, useCustomers } from "./CustomerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "./EmployeeCustomerProvider.js"
import { CustomerHTML } from "./Customer.js"

export const CustomerList = () => {
    getCustomers()
        .then(getEmployees)
        .then(getEmployeeCustomers)
        .then(() => {
            render(useCustomers(), useEmployees(), useEmployeeCustomers())
        })
}

const render = (customerArray, employeeArray, employeeCustomerArray) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = customerArray.map(customer => {
        const relationships = employeeCustomerArray.filter(rel => rel.customerId === customer.id)
        const assignedEmployees = relationships.map(rel => employeeArray.find(employee => employee.id === rel.employeeId))
        return CustomerHTML(customer, assignedEmployees)
    }).join("")

    contentTarget.innerHTML += `
        <main>
            <h2>Customers</h2>
            ${HTMLRep}
        <main>
    `
}