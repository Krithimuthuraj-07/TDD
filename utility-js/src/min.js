const minimumElementOfArray = (array, index) => {
    if (index > 0) {
        return Math.min(array[index - 1],minimumElementOfArray(array,index - 1))
    }
    return array[0]
}


const min = (array) => {
    var length = array.length

    if (length == 0)
    {
        return null
    }
    return minimumElementOfArray(array,length)
}

module.exports = min;