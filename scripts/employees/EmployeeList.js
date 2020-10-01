import { getEmployees, useEmployees } from "./EmployeeProvider.js"
import { EmployeeHTML } from "./Employee.js"
import { getComputers, useComputers } from "../computers/ComputerProvider.js"
import { getDepartments, useDepartments } from "../departments/DepartmentProvider.js"
import { getLocations, useLocations } from "../locations/LocationProvider.js"
import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers } from "../customers/EmployeeCustomerProvider.js"

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
            render(useEmployees(), useComputers(), useDepartments(), useLocations(), useCustomers(), useEmployeeCustomers())
        })
}

const render = (employeeArray, computerArray, departmentArray, locationArray, customerArray, employeeCustomerArray) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = employeeArray.map(employee => {
        const computerObj = computerArray.find(computer => computer.id ===employee.computerId)
        const departmentObj = departmentArray.find(department => department.id === employee.departmentId)
        const locationObj = locationArray.find(location => location.id === employee.locationId)
        const relationships = employeeCustomerArray.filter(rel => rel.employeeId === employee.id)
        const assignedCustomers = relationships.map(rel => customerArray.find(customer => customer.id === rel.customerId))
        return EmployeeHTML(employee, computerObj, departmentObj, locationObj, assignedCustomers)
    }).join("")

    contentTarget.innerHTML += `
        <main>
            <h2>Employees</h2>
            ${HTMLRep}
        <main>
    `
}