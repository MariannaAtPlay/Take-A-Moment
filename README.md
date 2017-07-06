# Take-A-Moment

Chrome browser extension that utilizes React, Redux and react-chrome-redux libraries to create a tool to remind the user to take breaks. It persists across extension instances and utilizes both a browser action and a content script. 

Gratitude and credit for the inspiration and helpful examples goes to Tyler Shaddix
at https://github.com/tshaddix/react-chrome-redux-examples

## To Run An Example
Clone or download this repo.

Navigate to the folder, then run

```
npm install 
```

To build the project, run 

```
gulp
```

And webpack bundle will be created. 

In the root project directory, you will find a `build` folder. To install the extension in chrome, go to chrome://extensions on your browser, make sure developer mode is enabled, and click on "Load unpacked extension...". Select the `build` directory and you're on you're way!
