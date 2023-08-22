import canIterate from '../canIterate';

test('should return true', () => {
    expect(canIterate(new Map())).toBe(true);
});

test('should return true', () => {
    expect(canIterate(new Set())).toBe(true);
});

test('should return false', () => {
    expect(canIterate(null)).toBe(false);
});

test('should return false', () => {
    expect(canIterate(10)).toBe(false);
});

test('should return true', () => {
    expect(canIterate("Netology")).toBe(true);
});