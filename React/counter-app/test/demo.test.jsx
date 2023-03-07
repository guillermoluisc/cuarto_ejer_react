const mensaje1="Primer String"
const mensaje2=mensaje1.trim()
test('comparacion con  mensaje1 y mensaje2', () => {
    expect(mensaje1).toBe(mensaje2);
  });