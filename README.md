# eslint-plugin-react-testing-library-custom

[![npm version](https://img.shields.io/npm/v/eslint-plugin-rtl-test-attributes.svg)](https://www.npmjs.com/package/eslint-plugin-rtl-test-attributes)
[![GitHub repository](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/kstodolak/eslint-plugin-rtl-test-attributes)

Custom ESLint rules for React Testing Library to enforce best practices and encourage the use of semantic elements over data-testid attributes.

## Installation

```bash
npm install --save-dev eslint-plugin-rtl-test-attributes
```
or
```bash
npm i -D eslint-plugin-rtl-test-attributes
```

## Configuration
Add the plugin to your ESLint configuration file (e.g., .eslintrc.js):
```javascript
module.exports = {
  plugins: ['rtl-test-attributes'],
  rules: {
    'eslint-plugin-rtl-test-attributes/avoid-data-testid': 'error',
  },
};
```

## Rules
### `avoid-data-testid`

This rule discourages the use of `data-testid` attributes in JSX code, as it adds unnecessary attributes to the production output HTML. The `data-testid` attribute is primarily intended for unit testing purposes and should not be present in the final production code unless absolutely necessary.This encourages the use of semantic elements, ARIA attributes or elements that are easily accessible and can be caught by the Testing Library API.

Non semantic elements without any accesibility-friendly attributes are hard to query by Testing Library API.<br>
Few examples of preferred alternatives for using `data-testid` attribute:
- Use semantic elements like `<button>`, `<input>`, `<select>`, `<hr>`
- Use elements with built-in accessibility attributes such as `<label>`, `<fieldset>`, `<legend>`
- Use ARIA attributes like `aria-label`, `aria-labelledby`, `aria-describedby`, etc., to provide accessibility information.


#### &#10006; Incorrect Usage
```JSX
<div data-testid="button-element" onClick={onButtonClick}>...</div>
<p data-testid="title-element" className="title">...</p>
<div data-testid="horizontal-rule-element" className="horizontal-rule" />
```

#### &#10004; Correct Usage
```JSX
<button onClick={onButtonClick}>...</button> // <button> element implicit ARIA role: "button"
<h1 className="title">...</h1> // <h1> element implicit ARIA role: "header"
<hr className="horizontal-rule"/> // <hr> element implicit ARIA role: "separator"

<label for="my-input">Name:</label>
<input id="my-input" type="text" />
```
