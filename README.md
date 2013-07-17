## ng-mobile-menu

An AngularJS module that provides a slide out menu for your application.

## Usage

Include the CSS and JS files:
```html
<link rel="stylesheet" href="ng-mobile-menu.min.css" />
<link rel="stylesheet" href="your-custom-stylesheet.css" />

<!-- ng-mobile-menu.js should be referenced after Angular and before your app -->
<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="ng-mobile-menu.min.js"></script>
<script type="text/javascript" src="your-angular-app.js"></script>

```

Add `shoppinpal.mobile-menu` as dependency in your app.

```javascript
angular.module('your-awesome-app',['shoppinpal.mobile-menu']);
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

Hide and show the menu in an ngClick like this `ng-click="$spMenu.toggle()"`. (`.show()` and `.hide()` are also available if you need them)

```html
<button ng-click="$spMenu.toggle()">Menu</button>
```

## Demo

Check the `/demo` folder in the repository for a working demo.

## Changelog
### 0.2.0
#### Breaking Changes
No longer using href targets to show and hide menu. Now you _must_ use the new `$spMenu` provider to show and hide the menu.
### 0.1.3
* Issue #2 : Change menu to use 80% width for more consistent appearance across mobile device resolutions.
 * On larger screens (tablets, desktops) default width will be 20% for menu
* Issue #1: Add support for #sp-nav.wide which will always use a width of 80% regardless of screen size. Just add class="wide" to your sp-nav element.
### 0.1.2
Use hardware accelerated CSS transitions.
### 0.1.1
Remove horizontal scroll bars when menu is showing.
### 0.1.0
Initial release