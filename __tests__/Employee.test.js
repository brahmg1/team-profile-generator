const Employee = require('../lib/Employee')

test('create a new employee', () => {
    const employee = new Employee('Brahm', 1, 'brahm@example.com')

    expect(employee.name).toBe('Brahm')
    expect(employee.id).toBe(1)
    expect(employee.email).toBe('brahm@example.com')
})

test('return values from Employee class', () => {
    const employee = new Employee('Brahm', 1, 'brahm@example.com')

    expect(employee.getName()).toBe('Brahm')
    expect(employee.getId()).toBe(1)
    expect(employee.getEmail()).toBe('brahm@example.com')
})