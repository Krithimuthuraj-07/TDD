const filter = (array,functionName) => {
    if (array.length === 0)
    {
        return []
    }
    else {
        return array.filter(functionName)
    }
}

module.exports = filter;