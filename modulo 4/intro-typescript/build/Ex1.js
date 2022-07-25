function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(2, 4, 7));
//# sourceMappingURL=Ex1.js.map