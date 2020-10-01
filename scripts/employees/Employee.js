export const EmployeeHTML = (employeeObj, computerObj, departmentObj, locationObj, customerArray) => {
    return `
    <div class="employee">
        <header class="employee__name">
            <h3>${employeeObj.firstName} ${employeeObj.lastName}</h3>
        </header>
        <section class="employee__computer">
            <p>Currently using a ${computerObj.year} ${computerObj.model}</p>
        </section>
        <section class="employee__department">
            <p>Works in the ${departmentObj.name} department</p>
        </section>
        <section class="employee__location">
            <p>Works at the ${locationObj.name} office</p>
        </section>
        <section class="employee__customers">
            <p>Has worked for the following customers:</p>
            <ul>
                ${
                    customerArray.map(customer => `<li>${customer.name}</li>`).join("")
                }
            </ul>
        </section>
    </div>
    `
}