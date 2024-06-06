My code example:

in view.js:

export const createEventListeners = (
buttonSelect,
overlaySelect,
eventType
) => {
return {
buttonSelect: buttonSelect,
overlaySelect: overlaySelect,
eventType: eventType,
addListener(eventType) {
this.buttonSelect.addEventListener(eventType, () => {
this.overlaySelect.open = this.eventType;
});
},
};
};

// Search Overlay
export let searchOverlay = createEventListeners(
html.search.cancel,
html.search.overlay,
false
);

// Settings Overlay
export let settingsOverlayClose = createEventListeners(
html.settings.cancel,
html.settings.overlay,
false
);

export let settingsOverlayOpen = createEventListeners(
html.header.settings,
html.settings.overlay,
true
);

in scripts.js:

/\*\*

- Close search overlay
  \*/
  searchOverlay.addListener("click");
  /\*\*
- Close settings overlay
  \*/
  settingsOverlayClose.addListener("click");
  /\*\*
- Open settings overlay
  \*/
  settingsOverlayOpen.addListener("click");

What problems did you encounter converting the book preview to a component?

Finding the write elements to convert was difficult, as there are instances of functions that have slight variations. In my example, I could not figure out how to add the function that opens the search overlay into my factory function because it has an additional line of code to focus on the title search field.

What other elements make sense to convert into web components? Why?

The functionality for the search filter and the dropdowns can be encapsulated and a factory function can be created. For the authoer and genre filters, the code is quite repetitive. By making it a factory function you could add more search filters and add functionality to the books connect app

Why does keeping your HTML, CSS and JavaScript in a single file sometimes make sense?

Keeping the HTML, CSS and Javascript in a single file can avoid you overwriting code that was specified in other files, for example, when having multiple files, you are able to overwrite the colour of an element in the css when it has already been defined in javascript in another file.
