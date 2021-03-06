﻿### How to build

```bash
cd /to/this/directory
npm install
npm run build
```
This will result in a folder structure as build output like following :

* [au](./dir2)
    * [Content](./dir2)
        * [html](./dir2)
        * [js](./dir2)
        * [scripts](./dir2)
        * [styles](./dir2)

scripts folder will contains following files:
- more-info-small.js
- more-info-small.map.js
- more-info-large.js
- more-info-large.map.js
- more-info-general.js
- more-info-general.map.js
- top-banner.js
- top-banner.map.js
- price-info.js
- price-info.map.js

### Dependencies
This widget builder uses the following key technologies:
- nodejs
- npm
- webpack
- typescript
- jquery
- jquery-modal

### Usage

In the location you require the banner, use the following markup:

```HTML
<!-- Price Info -->
<script src="price-info.js?productPrice=0"></script>

<!-- More Info Large -->
<script src="more-info-large.js"></script>

<!-- More Info Small -->
<script src="more-info-small.js"></script>

<!-- More Info General -->
<script src="more-info-general.js"></script>

<!-- Top Banner -->
<script src="top-banner.js"></script>
```
The script will bring in all of its CSS and dependencies, and register the button click events
Guide: Installation guide is located at [http://docs.shophumm.com.au/](http://docs.shophumm.com.au/)
Note: All of the views for widgets are located at main Humm Website

### Changes/Additions

To **add** a new typescript file, you must add it to the config.ts file to compile

To **add** a new CSS/SCSS file, you must compile it to .min.css by adding it in the webpack.json file for compiling

#### parameters for the price-info widget (AU)
| parameter | meaning  | usage |
|-----------|--------| --- |
| monitor | refresh the price widget every 1 second | &monitor |
| debug | output debug message | \<script src='...' debug\> |
| used_in | | |
| price-selector | select the html element that contains the price | &price-selector=.price_class / &price-selector=%23price_id |
| element | select the html element the widget body inserts to | &element=%23humm_price_widget_target |
| min/max | price < min: show "Pay in slices"; price > max: hide | \<script src='...' data-min='100' data-max='10000'\> |
| BigThings/LittleThings | for merchants who only signed up with BigThings or LittleThings | &BigThings / &LittleThings |

#### parameters for the price-info widget (NZ)
| parameter | meaning  | usage |
|-----------|--------| --- |
| monitor | refresh the price widget every 1 second | &monitor |
| debug | output debug message | \<script src='...' debug\> |
| used_in | | |
| price-selector | select the html element that contains the price | &price-selector=.price_class / &price-selector=%23price_id |
| element | select the html element the widget body inserts to | &element=%23humm_price_widget_target |
| min/max | price < min: show "Pay in slices"; price > max: hide | \<script src='...' data-min='100' data-max='10000'\> |
| big | payments schedule for BigThings (6/9/12/18/24 months) | &big=m6 / &big=m9 / &big=m12 / &big=m18 / &big=m24 |
| little | payments schedule for LittleThings (5 fortnightly / 10 weekly) | &little=f5 / &little=w10 |
##### NZ Oxipay -> humm switch behaviour
When old oxipay widgets be redirected to shophumm domains, the new humm NZ price-info will be requested without big or little parameters. We are taking care of this situation by falling back to little=f5 so the behaviour will be similar to that of the Oxipay widget.

### Local Test:
To switch between local testing and online deployment, you will make changes in /src/au/config.ts:

    change "baseContentUrl"

All .scss files have to be compile into .min.css files.  
This is automatically done when you run **npm run build**.  
Otherwise, you can go to project root folder and use command:
```
sass -s compressed src/au/styles/externalModal.scss:src/au/styles/externalModal.min.css src/au/styles/priceInfoModal.scss:src/au/styles/priceInfoModal.min.css src/au/html/landing-page/styles/landing.scss:src/au/html/landing-page/styles/landing.css 
sass -s compressed css/humm-branding.scss:css/humm-branding.css 

```

## Landing Page
### how to use
1. Create a new page in your online store
2. Paste the following code to the created page:  
```html
<script id="humm-landing-page" src="https://s3-ap-southeast-2.amazonaws.com/widgets.shophumm.com.au/content/scripts/landing-page.js"></script></pre>
```
### Special instructions for testing landing pages locally
1. Follow the general local test instructions.
2. Different from the other widget, the landing page widgets are inserted into web pages without an iframe. Therefore, all addresses in the landing pages content html have to be absolute URLs instead of relative ones. Please keep this in mind and make your own decision whether you need to temporarilly change all absolute URLs (images etc) to you local addresses or not.