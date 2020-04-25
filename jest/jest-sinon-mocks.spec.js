import sinon from 'sinon';
import createWidget from '../src/createWidget';

describe('createWidget', () => {
  it('works with Sinon mocks', () => {
    const returnValue = 'returnValue';
    const stubWidget = { name: 'stubWidget' };
    const repo = {
      save: () => {},
    };

    const mock = sinon.mock(repo);
    mock.expects('save').once().withArgs(stubWidget).returns(returnValue);

    const response = createWidget(stubWidget, repo);

    expect(response).toEqual(returnValue);
  });
});
