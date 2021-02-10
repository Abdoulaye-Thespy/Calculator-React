import Calculate from '../logic/calculate';

describe('Calculate', () => {
  let calculator;

  beforeEach(() => {
    calculator = {
      total: '0',
      prev: '0',
      next: '0',
      operator: '0',
    };
  });

  test('should not set the operator of the calculation', () => {
    const { operator } = Calculate(calculator, '2');

    expect(operator).not.toEqual('2');
  });

  test('should not set the next of the calculation', () => {
    const { next } = Calculate(calculator, '2');

    expect(next).not.toEqual('2');
  });

  test('should not return the wrong total of the calculation', () => {
    calculator.prev = '99';
    calculator.operator = '+';
    calculator.next = '1';

    const { total } = Calculate(calculator, '=');

    expect(total).not.toEqual('101');
  });
});
