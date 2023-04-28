/*
 * Copyright 2023 Fraunhofer IEE
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributors:
 *       Michel Otto - initial implementation
 *
 */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {Endpoint} from './Endpoint.js';
import type {Links} from './Links.js';

export type RouteView = {
  creationDate?: string;
  modificationDate?: string;
  title?: string;
  description?: string;
  configuration?: string;
  deploy?: RouteView.deploy;
  start?: Endpoint;
  end?: Endpoint;
  additional?: Record<string, string>;
  _links?: Links;
};

export namespace RouteView {
  export enum deploy {
    NONE = 'None',
    CAMEL = 'Camel',
  }
}
