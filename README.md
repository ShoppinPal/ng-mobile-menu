## ng-mobile-menu

An AngularJS module that provides a slide out menu for your application.

## Usage

Include the CSS and JS files:
```html
<link rel="stylesheet" href="ng-mobile-menu.min.css" />
<link rel="stylesheet" href="your-custom-stylesheet.css" />

<!-- ng-mobile-menu.js should be referenced after Angular and before your app -->
<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="ng-mobile-menu.js"></script>
<script type="text/javascript" src="your-angular-app.js"></script>

```

Add `shoppinpal.ng-mobile-menu` as dependency in your app.

```javascript
angular.module('your-awesome-app',['shoppinpal.ng-mobile-menu']);
```

Then you just need to structure your HTML like this:

```html
<div id="sp-nav">
<!-- put your menu in here -->
</div>

<div id="sp-page">
<!-- put your page content in here -->
</div>
```

Use 2 anchor tags to control the menu. Only one will be visible at a time as ng-mobile-menu will hide and show them as needed based ont he menu state.

```html
<!-- Notice that the href matches the id of the menu element -->
<a href="#sp-nav" id="sp-show-menu">Show</a>
<!-- Notice tha the href of this anchor points to the page element -->
<a href="#sp-page" id="sp-hide-menu">Hide</a>
```

## Demo

Check the `/demo` folder in the repository for a working demo.