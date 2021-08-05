module.exports = function towelSort (matrix) {
    if ( !matrix || matrix.length === 0 ) return []

    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let temp = ((i + 1) % 2 === 0) ? matrix[i].reverse() : matrix[i];
        res.push(temp);
    }
    return res.flat();
}
