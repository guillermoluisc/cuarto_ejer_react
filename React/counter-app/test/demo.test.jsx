test('comparacion con  mensaje1 y mensaje2', () => {
  const mensaje1 = "Primer String"
  const mensaje2 = mensaje1.trim()
  expect(mensaje1).toBe(mensaje2);
});