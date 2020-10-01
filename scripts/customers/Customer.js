export const CustomerHTML = (customerObj, employeeArray) => {
    return `
    <div class="customer">
        <header class="customer__name">
            <h3>${customerObj.name}</h3>
        </header>
        <section class="customer__employees">
            <p>Has been helped by the following employees:</p>
            <ul>
                ${
                    employeeArray.map(employee => `<li>${employee.firstName} ${employee.lastName}</li>`).join("")
                }
            </ul>
        </section>
    </div>
    `
}