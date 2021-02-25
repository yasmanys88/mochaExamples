var expect = require('chai').expect;

describe('Operaciones Matematicas - Suite de Pruebas', function () {

    it('Adicionar dos numeros', function () {
        const a = 10;
        const b = 10;
        expect(a + b).to.equal(20);
    });

    it('Resta entre dos numeros', function () {
        const a = 10;
        const b = 10;
        expect(a - b).to.equal(0);
    });

    it('Multiplication of two numbers', function () {
        const a = 10;
        const b = 10;
        const c = a * b;
        expect(c).to.equal(100);
    });

    it('Division of two numbers', function () {
        const a = 10;
        const b = 10;
        const c = a / b;
        expect(c).to.equal(1);
    });

});