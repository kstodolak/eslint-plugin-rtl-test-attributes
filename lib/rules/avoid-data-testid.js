
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Detect usage of data-testid attribute in JSX elements and encourages the use of semantic elements or elements that are easily accessible.',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [],
    messages: {
      dataTestIdUsage: 'Usage of data-testid attribute is discouraged. Consider using semantic or accessible elements.',
    }
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name == 'data-testid') {
          context.report({
            node,
            messageId: 'dataTestIdUsage',
          });
        }
      }
    }
  }
}
