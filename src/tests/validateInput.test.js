import { describe, expect, it } from "vitest";
import validateInput from "../utilities/validateInput";

describe('validateInput function', () => {
    it('shoud return valid if length of input is more than 5', () => {
        const value = "someValue";
        const rule = {
            minLength: 5
        };

        const result = validateInput(value, rule)
        expect(result).toBe(true)
    })
})