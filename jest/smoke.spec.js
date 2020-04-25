import createWidget from '../src/createWidget';

describe('createWidget', () => {
  it('does the thing', () => {
    const returnValue = 'returnValue';
    const stubWidget = { name: 'stubWidget' };
    const mockRepo = {
      save: jest.fn().mockName('save').mockReturnValue(returnValue),
    };

    const response = createWidget(stubWidget, mockRepo);

    expect(mockRepo.save).toHaveBeenCalledWith(stubWidget);
    expect(response).toEqual(returnValue);
  });
});
