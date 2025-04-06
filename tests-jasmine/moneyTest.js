import { formatCurrency } from "../scripts/utils/money.js";

describe('Test suite : formatCurrency', ()=> {
  it ('converts cents to dollars', ()=> {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', ()=> {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Roundsup to nearest cent - 2000.5', ()=> {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('Roundsup to nearest cent - 2000.4', ()=> {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});

