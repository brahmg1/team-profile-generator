const Manager = require('../lib/Manager');

test('create a new Manager', () => {
    const manager = new Manager('Brahm', 1, 'brahm@example.com', 10)

    expect(manager.name).toBe('Brahm')
    expect(manager.id).toBe(1)
    expect(manager.email).toBe('brahm@example.com')
    expect(manager.officeNumber).toBe(10)

})

test('return values from manager class', () => {
    const manager = new Manager('Brahm', 1, 'brahm@example.com', 10)

    expect(manager.getName()).toBe('Brahm')
    expect(manager.getId()).toBe(1)
    expect(manager.getEmail()).toBe('brahm@example.com')
    expect(manager.getOfficeNumber()).toBe(10)
})