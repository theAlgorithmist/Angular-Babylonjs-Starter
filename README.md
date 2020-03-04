# Angular-BabylonJS Starter

I haven't had this much fun with 3D since the 'good old days' with Flex and Papervision 3D :)

If you have not yet familiarized yourself with BabylonJS, then [direct your friendly, neighborhood browser here].

Otherwise, I will presume you have taken the red pill and want to know how to get this awesome library up and running in your Angular 4+ projects.  Well then, you have come to the right place as this is a **minimal** starter project that should get you to the same level as the [BabylonJS starter], but with A4+, Typescript, and the Angular CLI.


Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

BabylonJS: 3.1.0-alpha1

Angular: 4.0.0

Angular CLI: 1.0.0

Version: 1.0


Installation involves all the usual suspects

  - npm and Angular CLI installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)
  
  
### Overview

Following is a brief overview of what it took to get the basic example up and running.  Note that I like experimenting with the latest and greatest, so I used the BJS 3.1 alpha preview release.  YMMV depending on which release you target for an application.

1 - Edit the _.angular-cli.json_ file and add the following to the 'scripts' entry (I run on a Mac; slight changes may be required for the CLI running on Windows).

```
 "scripts": ["../node_modules/babylonjs/dist/preview release/babylon.js"],
```

2 - The Angular idiom is that _Directives_ are used for DOM manipulation/selection and/or dynamic rendering.  This demo uses a _BasicSceneDirective_ class that serves as an attribute _Directive_ (refer to _basic-scene.directive.ts_).  The HTML _Canvas_ and application of this _Directive_ is contained in the _app.component.html_ file.

```
<div class="canvasContainer">
  <canvas bjsScene></canvas>
</div>
```

_bjsScene_ is short for 'BabylonJS Scene'.  The custom _Directive_ selects a _Canvas_ with that particular attribute.  

To make the compiler happy and to completely use strong typing throughout the application, add these imports in the scene _Directive_,

```
import * as BABYLON from 'babylonjs';

import { Mesh } from 'babylonjs';
```


3 - Inside the scene _Directive_, obtain a direct reference to the host _Canvas_ and assign it to an internal variable after the view is initialized.  The remainder of the scene may be created at that point.  Refer to the _basic-scene.directive.ts_ source.

4 - The basic scene _Directive_ is a child of the main app view, so obtain a reference to it as a _ViewChild_ (refer to _app.component.ts_)

```
 @ViewChild(BasicSceneDirective) _bjsScene: BasicSceneDirective;
```

5 - After the main app component's view is initialized, then let the animation begin! (refer to _app.component.ts_)

```
if (this._bjsScene !== undefined)
{
  // animate the scene
  this._bjsScene.animate();
}
```

6 - _ng serve_ and then type in _localhost:4200_ into your Web-GL enabled browser to see a smaller version of the infamous sphere and ground plane.


There is no unit or end-to-end testing in this demo.  The demo was tested in late-model Chrome on Mac (OSX Sierra).


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <https://www.linkedin.com/in/jimarmstrong>

[direct your friendly, neighborhood browser here]: <https://www.babylonjs.com>

[BabylonJS starter]: <http://doc.babylonjs.com/>
