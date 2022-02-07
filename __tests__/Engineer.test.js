const Engineer = require('../lib/Engineer')

test('create a new engineer', () => {
    const engineer = new Engineer('Brahm', 1, 'brahm@example.com','brahm@github.com')

    expect(engineer.name).toBe('Brahm')
    expect(engineer.id).toBe(1)
    expect(engineer.email).toBe('brahm@example.com')
    expect(engineer.github).toBe('brahm@github.com')

})

test('return values from engineer class', () => {
    const engineer = new Engineer('Brahm', 1, 'brahm@example.com', 'brahm@github.com')

    expect(engineer.getName()).toBe('Brahm')
    expect(engineer.getId()).toBe(1)
    expect(engineer.getEmail()).toBe('brahm@example.com')
    expect(engineer.getGithub()).toBe('brahm@github.com')
})