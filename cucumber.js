const common = [
  'features',
  '--format json:features/reports/cucumber.json'
].join(' ');

module.exports = {
  default: common,
  smoke: `${common} --tags @smoke`,
  test: `${common} --tags @test`,
};
