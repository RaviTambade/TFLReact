// userService.test.js
import { getUser, formatUser } from "./userservice";

test('formats user correctly', () => {
  const user = getUser(1);
  const formatted = formatUser(user);
  expect(formatted).toBe('User: John Doe');
});
