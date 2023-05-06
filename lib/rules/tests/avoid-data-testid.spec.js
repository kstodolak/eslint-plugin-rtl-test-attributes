const { RuleTester } = require('eslint');
const avoidDataTestIdRule = require('../avoid-data-testid');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run(
  'avoid-data-testid',
  avoidDataTestIdRule,
  {
    valid: [
      {
        name: 'Should not report problem when the element does not have data-testid attribute.',
        code: '<h1>Foo</h1>',
      },
      {

        name: 'Should not report problem when element with data-testid attribute is not found.',
        code: '<div><h1>Foo</h1></div>'
      },
    ],
    invalid: [
      {
        name: 'Should report problem when found not nested element with data-testid attribute.',
        code: '<h1 data-testid="Bar">Foo</h1>',
        errors: [{ messageId: 'dataTestIdUsage' }],
      },
      {
        name: 'Should report problem when found nested element with data-testid attribute.',
        code: '<div><h1 data-testid="Bar">Foo</h1></div>',
        errors: [{ messageId: 'dataTestIdUsage' }],
      },
    ],
  }
);
