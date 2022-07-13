import { describe, expect, it } from "vitest"
import { addClasses } from "../utilities/addClass";

describe('asyncAddClass', () => {
    it('should add a class to the array', () => {
        const firstClass = "class1";
        const result = addClasses(true, firstClass)
        
        expect(result).toBeTypeOf('object')
    })

})