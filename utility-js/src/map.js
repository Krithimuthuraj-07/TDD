
const map = (array,function_name) => {
    if(array.length === 0)
    {
        return []
    }
    else {
        return array.map(function_name)
    }
}

module.exports = map;

