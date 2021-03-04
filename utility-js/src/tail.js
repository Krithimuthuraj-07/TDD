const tail = (array) => {
    if (array.length === 0) 
        return []
    else
        return array.slice(1,array.length)
}

module.exports = tail;

  
