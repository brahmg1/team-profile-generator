const Intern = require('../lib/Intern');

test('create a new Intern', () => {
    const intern = new Intern('Brahm', 1, 'brahm@example.com','Salisbury')

    expect(intern.name).toBe('Brahm')
    expect(intern.id).toBe(1)
    expect(intern.email).toBe('brahm@example.com')
    expect(intern.school).toBe('Salisbury')

})

test('return values from intern class', () => {
    const intern = new Intern('Brahm', 1, 'brahm@example.com', 'Salisbury')

    expect(intern.getName()).toBe('Brahm')
    expect(intern.getId()).toBe(1)
    expect(intern.getEmail()).toBe('brahm@example.com')
    expect(intern.getSchool()).toBe('Salisbury')
})