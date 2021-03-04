const reduce = (array,functionName,optional = null) => {
    if ((array.length === 0) && optional == null)
    {
        return null
    }
    else {

        if (optional == null) {
            return array.reduce(functionName)
        }
        else {
            return array.reduce(functionName,optional)
        }
        
    }
}

module.exports = reduce; 