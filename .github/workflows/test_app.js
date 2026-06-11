const saludo = require('./hola');

test('Debe retornar Hola Mundo', () => {
    expect(saludo()).toBe('Hola Mundo');
});
