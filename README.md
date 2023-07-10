This codebase is archived. Browser support has been added to  OpenAI v4.0 : https://github.com/openai/openai-node/discussions/182

# OpenAI Javascript Library

The OpenAI javascript library provides a browser compatible javascript library for convenient access to the OpenAI API. This is an unofficial fork of the OpenAI library with modifications for browser and extension compatibility. The library is using "fetch" instead of XHR requests to make API calls, making it compatible with browser extensions.

This library is intended to be used when you want to give the user ability to use their own API keys and directly make requests from the browser. This can be used for HTML apps that run in the browser or browser extensions.

You can look at [ChatGPT Rewriter extension](https://github.com/sandaru1/chatgpt-chrome-extension) to see how it can be used in a Chrome extension.

**Important note: Don't embed your API keys in the browser. Always ask the user for their API keys.**

## Installation

```bash
npm install openai-web
```

## Usage

The library needs to be configured with an OpenAI account's secret key, which is available on the [website](https://platform.openai.com/account/api-keys). You should request the users to provide the API key.

```html
<script src="openai.min.js"></script>
<script type="module">
    const configuration = new OpenAI.Configuration({
        apiKey: $("#key").val(),  // Read the API key from user input
    });
    const openai = new OpenAI.OpenAIApi(configuration);

    const response = openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say Hello World in javascript",
        temperature: 0,
        max_tokens: 7,
    }).then((res) => {
        console.log(res.data.choices[0].text);
    },(error) => {
        const message = error.response.data.error.message ?? (error.message ?? "An error occured");
        console.log("Error",message);
    });
</script>
```

This library is a fork of the official OpenAI Node.js library. Check out the [full API documentation](https://platform.openai.com/docs/api-reference?lang=node.js) for examples of all the available functions.
