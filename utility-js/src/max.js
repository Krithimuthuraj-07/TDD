const maximumElementOfArray = (array, index) => {
    if (index > 0) {
        return Math.max(array[index - 1],maximumElementOfArray(array,index - 1))
    }
    return array[0]
}


const max = (array) => {
    var length = array.length

    if (length == 0)
    {
        return null
    }
    return maximumElementOfArray(array,length)
}

module.exports = max;