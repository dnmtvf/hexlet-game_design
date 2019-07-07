import sum from './app';

test('Should summarize given arguments', () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(1, 3)).toBe(4);
  expect(sum(-3, 1)).toBe(-2);
  expect(sum(0, 111)).toBe(111);
  expect(sum(3, 12)).toBe(15);
});
