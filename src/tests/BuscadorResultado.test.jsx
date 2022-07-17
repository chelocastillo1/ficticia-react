const t = require("../components/BuscadorResultado");

describe("[Test] BuscadorResultado", () => {
    test("getStringDate() devuelve fecha por defecto con dato vacío.", () => {
        expect(t.getStringDate("")).toBe("0000-00-00 00:00:00");
    });

    test("getStringDate() devuelve fecha por defecto con dato nulo.", () => {
        expect(t.getStringDate(null)).toBe("0000-00-00 00:00:00");
    });

    test("getStringDate() devuelve string correcto con fecha 2018/12/09 09:12:18.", () => {
        expect(t.getStringDate(new Date(2018, (12 - 1 /* de 0 a 11 */), 9, (9 - 3 /*GMT -3 */), 12, 18).toISOString())).toBe("09 de Diciembre de 2018 a las 09:12 hs.");
    });

    test("formatearNumero() devuelve formateo correcto.", () => {
        expect(t.formatearNumero("2022")).toBe("2.022");
    });

    test("formatearNumero() devuelve formateo correcto.", () => {
        expect(t.formatearNumero(2022)).toBe("2.022");
    });

    test("formatearNumero() devuelve lo mismo que ingresa por no ser un número.", () => {
        expect(t.formatearNumero("REACT JS")).toBe("REACT JS");
    });

    test("getArrayPaginacion() #1.", () => {
        expect(t.getArrayPaginacion(19, 50, 20)).toStrictEqual([12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

    test("getArrayPaginacion() en la penúltima página de 20 totales.", () => {
        expect(t.getArrayPaginacion(19, 50, 20)).toStrictEqual([12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

    test("getArrayPaginacion() en la segunda página de 22 totales.", () => {
        expect(t.getArrayPaginacion(2, 10, 22)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test("getArrayPaginacion() en la onceaba página de 99 totales.", () => {
        expect(t.getArrayPaginacion(11, 15, 99)).toStrictEqual([7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });

    test("getArrayPaginacion() en la única página de 1 en total.", () => {
        expect(t.getArrayPaginacion(1, 30, 1)).toStrictEqual([1]);
    });

    test("getArrayPaginacion() en la priméra página de 3 en total.", () => {
        expect(t.getArrayPaginacion(1, 20, 3)).toStrictEqual([1, 2, 3]);
    });
});