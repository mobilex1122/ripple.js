# Ripple.js
##### Simple android ripple generator for web

## Installation and setup:

- Download ripple.js 
- Link css:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="./ripplejs.css".css">
    </head>
    ```
- Link JS: 
    ```html
    <script src="./ripple.js"></script>
    ```

## Usage:

### Adding ripple:
- html:
    ```html
    <div class="ripple"></div>
    ```
- JavaScirpt:
    ```js
    var element = document.querySelector(".ripple")
    addRipple(element)
    ```

## Documentation:

#### `addRipple(element, rippleGrowMax = "100%", rippleOpacity = "0.3")`

`element`: (**Requied**) parent element for ripple domain

`rippleGrowMax`: (**Optional** Default: 100%) Maximum allowed size for ripple effect in % or any other css units

`rippleOpacity`: (**Optional** Default: 0.3) Maximum allowed opacity for ripple effect in range of 0 to 1