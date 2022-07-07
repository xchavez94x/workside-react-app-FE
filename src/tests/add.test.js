import { it, expect } from "vitest"
import { add } from "../utilities/add"

it('should add two numbers', () => {
    expect(add(1,2)).toBe(3)
})