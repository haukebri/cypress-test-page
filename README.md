# cypress test page

This project provides a very basic website which can be automatically tested by cypress. The website is plain HTML and vanilla Javascript. There is no need for any frameworks.

You can visit the website here: https://haukebri.github.io/cypress-test-page/

## Getting started

### Running the website

To view the website locally you can use xampp or any other tool of your choice that is able to serve `HTML` files. I am using a simple python HTTP-Server:

```bash
python -m SimpleHTTPServer 8000
```

### Start cypress

To start cypress you need to have nodejs with npm installed. See The official documentation for more details: https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

When this is done simply run these commands:

```bash
# Install all dependencies (only cypress here)
npm install

# Run cypress in UI mode
npm start

# Run the tests within your console
npm test
```
