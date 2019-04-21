const common = [
  'features',
  '--format json:reports/cucumber_report.json'
].join(' ');

module.exports = {
  default: common,
  smoke: `${common} --tags @smoke`,
  test: `${common} --tags @test`,
};
