import {
    it,
    expect,
    describe
} from "vitest";
import {
    checkStatus
} from "../utilities/helpers";


it('should return the path to the icon', () => {

    const status = 'verified';
    const firstIcon = 'first';
    const secondIcon = 'second';

    const result = checkStatus(status, firstIcon, secondIcon);

    expect(result).toBe('first')
})