---
title: "System requirements"
description: "Details on what browser and configuration is required to make maps in"
---

Placemark is a web application, so it only requires a browser and no installation step.

#### Supported browsers

* The application works best with Chrome or Firefox-based browsers.
* Internet Explorer is not supported.
* Firefox private mode is not supported, because in private mode Firefox does not support cookies or IndexedDB.

#### Technology requirements

* JavaScript is required. Placemark does not work with NoScript extensions or any browser without JavaScript support.
* IndexedDB support is required. IndexedDB is, by default, enabled on all modern browsers. If a browser is configured not to allow IndexedDB, Placemark won't be able to function, because we use IndexedDB for offline & collaboration requirements.
* Cookies must be enabled to log into Placemark, because they are used to manage your authenticated session.
* WebGL is required. Check the [WebGL test](https://get.webgl.org/) to confirm that your browser supports WebGL and has it enabled.
