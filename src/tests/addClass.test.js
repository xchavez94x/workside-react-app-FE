import { describe, expect, it, beforeEach, beforeAll} from "vitest"
import { addClasses, toggleClass } from "../utilities/addClass";

describe('addClass', () => {
    it('should add a class to the array', () => {
        const firstClass = "class1";
        0.
        const result = addClasses(true, firstClass)
        
        expect(result).toBeTypeOf('object')
    })

})

describe('asyncAddClass', () => {

    it('should add a class to the array if input is invalid', () => {
        const firstClass = "class1";
        const secondClass = "class2";
        const invalidClass = "invalid";

        const result = toggleClass(true, invalidClass, firstClass)

        expect(result).toBeTypeOf('string')
    })

    it('should remove the invalid class if input is valid', () => {
        const firstClass = "class1";
        const invalidClass = "invalid"

        const result = toggleClass(false, invalidClass, firstClass)

        expect(result).toBe(firstClass)
    })

})