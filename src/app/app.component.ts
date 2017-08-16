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
 * Main app component for Angular BabylonJS Starter
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Component
       , OnInit
       , AfterViewInit
       , ViewChild
} from '@angular/core';

// Basic Scene to be rendered
import { BasicSceneDirective } from './basic-scene.directive';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  @ViewChild(BasicSceneDirective) _bjsScene: BasicSceneDirective;

  constructor()
  {
    // empty
  }

  /**
   * Angular lifecylce method - OnInit
   *
   * @return nothing
   */
  public ngOnInit(): void
  {
    // reserved for future use
  }

  /**
   * Angular lifecycle method - after view init
   *
   * @return nothing If scene is properly created, then initiate animation of that scene
   */
  public ngAfterViewInit(): void
  {
    if (this._bjsScene !== undefined)
    {
      // animate the scene
      this._bjsScene.animate();
    }
  }
}
