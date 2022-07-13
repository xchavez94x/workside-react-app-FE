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