/**
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The Angular idiom is to have all DOM interaction encapsulated into Directives; this is also useful for dynamically
 * rendered content.  This is a very basic scene directive that can be added directly to an HTML Canvas.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

// platform imports
import { Directive
  , AfterViewInit
  , ElementRef
} from '@angular/core';

import * as BABYLON from 'babylonjs';

import { Mesh } from 'babylonjs';

@Directive({
  selector: '[bjsScene]'
})
export class BasicSceneDirective implements AfterViewInit
{
  protected _canvas: HTMLCanvasElement;  // direct reference to the canvas into which the scene is rendered

  // BJS specific elements
  protected _engine: BABYLON.Engine;
  protected _scene: BABYLON.Scene;
  protected _camera: BABYLON.FreeCamera;
  protected _light: BABYLON.Light;

  /**
   * Construct a new BasicSceneDirective
   *
   * @param _elRef: ElementRef  Injected ElementRef
   *
   * @returns nothing
   */
  constructor(protected _elRef: ElementRef)
  {
    // empty
  }

  /**
   * Angular lifecycle event - after view init
   */
  public ngAfterViewInit()
  {
    this._canvas = <HTMLCanvasElement> this._elRef.nativeElement;
    this._engine = new BABYLON.Engine(this._canvas, true);

    // create the scene
    this.__createScene();
  }

  /**
   * Animate the scene
   *
   * @returns nothing
   */
  public animate(): void
  {
    // run the render loop
    this._engine.runRenderLoop( () => {this._scene.render()} );
  }

  // scene creation logic is here
  protected __createScene(): void
  {
    // this follows the online tutorial pretty much 'as is'
    this._scene = new BABYLON.Scene(this._engine);

    // FreeCamera at (x:0, y:5, z:-10)
    this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);

    // target the camera to scene origin
    this._camera.setTarget(BABYLON.Vector3.Zero());

    // attach camera to the canvas
    this._camera.attachControl(this._canvas, false);

    // basic light oriented toward (0,1,0)
    this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);

    // sphere with diamater of 2 and 16 segments
    const sphere: Mesh = BABYLON.MeshBuilder.CreateSphere('sphere1', {segments: 16, diameter: 2}, this._scene);

    // move the sphere upward 1/2 of its height
    sphere.position.y = 1;

    // add a ground shape
    const ground: Mesh = BABYLON.MeshBuilder.CreateGround('ground1', {width: 6, height: 6, subdivisions: 2}, this._scene);
  }
}
