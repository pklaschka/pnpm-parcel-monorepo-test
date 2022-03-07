import { b } from '.';

it('should export "ab"', () => {
	jest.mock('@pklaschka/monorepo-a-package');
	expect(b).toBe('ab');
});
