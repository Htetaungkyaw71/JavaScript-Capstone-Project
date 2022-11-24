import { counter, increaseCount } from './CommentCount.js';

const data = [
  {
    item_id: 'testing',
    username: 'hello',
    comment: 'world',
  },
  {
    item_id: 'testing',
    username: 'hello1',
    comment: 'world1',
  },
  {
    item_id: 'testing',
    username: 'hello2',
    comment: 'world2',
  },
];

describe('Testing for comment counter', () => {
  test('Test for three comment count', () => {
    const count = counter(data);
    expect(count).toBe(3);
  });

  test('Test for increae comment count', () => {
    const count = counter(null);
    expect(count).toBe(0);
  });

  test('Test for increae comment count', () => {
    const ins = increaseCount(10);
    expect(ins).toBe(11);
  });

  test('Test for null comment count', () => {
    const ins = increaseCount(0);
    expect(ins).toBe(1);
  });
});
