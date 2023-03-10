Terra.describeViewports('TerraExcercise', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-terra-excercise/terra-excercise/default-terra-excercise'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
