import { fixacao } from "../src/fixacao"

describe("fixacao", () => {
    test("deve retornar um array de strings onde cada item é uma letra da palavra original, exemplo: entada: 'dev' saída: 'd','e','v'", () => {
        const result = fixacao("opa")

        expect(result).toEqual(["o","p","a"])

    })
})