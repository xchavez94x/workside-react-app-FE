export function addClasses (someProp, unwantedClass, ...classes) {
    let classNames = [];
    if( someProp === true ) {
        classes.forEach( cls => {
            classNames.push(cls)
        })
    } else {
        classNames.push(unwantedClass)
    }
    return classNames
}

export function toggleClass(prop, isTouched, invalid, ...styles) {
    let classes = Array.from(styles)
    if( prop === false && isTouched) {
        classes.push(invalid)
    } else if(classes.includes(invalid)) {
        classes.pop()
    }
    return classes.join(' ')
}