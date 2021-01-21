const expect = chai.expect;

 
describe('Exercice 7', () => {
  describe('NewMessage', () => {
    it('Home Message should equal Rocket Cars', () => {
      expect(HomeMessage).to.equal('Hello World')
      change()
      expect(HomeMessage).to.equal('Rocket Cars')
    });
  });
});


