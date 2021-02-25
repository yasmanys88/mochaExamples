describe('Mocha Hooks', function () {

    before('Ejecutando antes de todos los Tests', function () {
        console.log('Ejecutando antes de todos los Tests');
    });

    beforeEach('Ejecutando antes de cada Test', function () {
        console.log('Ejecutando antes de cada Test');
    });

    after('Ejecutando depues de  Todos los Tests', function () {
        console.log('Ejecutando depues de Todos los Tests');
    });

    afterEach('Ejecutando depues de cada Test', function () {
        console.log('Ejecutando depues de cada Test');
    });

    it('Mocha Hooks Test 1', function () {

        console.log('Mocha 1 - Este es el test que se ejecuta Mocha Hooks 1');
    })

    it('Mocha Hooks Test 2', function () {

        console.log('Mocha 2 - Este es el test que se ejecuta Mocha Hooks 2');
    })

})