function rnCol() {
    const hexCol = '0123456789ABCDEF'
    let cols = ''
    for (let i = 0; i < 6; i++) {
        cols += hexCol[Math.floor(Math.random() * hexCol.length)]
    }
    return '#' + cols
}

// setInterval(() => {
//     document.body.style.backgroundColor = rnCol()
// },)