// ? returning a specific icon for checking the status in the job card
export const checkStatus = (status, firstIcon, seconsIcon) => {
    /**
     * @param status > string
     * @param firstIcon > link to the icon 
     * @param secondIcon > link to the icon 
     * @returns a single icon
     */

    return status === "verified" ? firstIcon : seconsIcon


}