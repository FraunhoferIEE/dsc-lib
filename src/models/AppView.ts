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

import type {Links} from './Links.js';

export type AppView = {
  creationDate?: string;
  modificationDate?: string;
  title?: string;
  description?: string;
  remoteId?: string;
  remoteAddress?: string;
  docs?: string;
  envVariables?: string;
  storageConfig?: string;
  supportedPolicies?: Array<
    | 'Provide unrestricted data access'
    | 'Prohibit the data access'
    | 'Restrict the data usage to not more than N times'
    | 'Restrict the data usage to a specific time duration'
    | 'Restrict the data usage to a specific time interval'
    | 'Use data and delete it at a specific date time'
    | 'Log the data usage information'
    | 'Notify a party or a specific group of users when the data is used'
    | 'Restrict the data usage to a specific connector'
    | 'Restrict the data usage to a security profile'
  >;
  keywords?: Array<string>;
  publisher?: string;
  sovereign?: string;
  language?: string;
  license?: string;
  endpointDocumentation?: string;
  distributionService?: string;
  runtimeEnvironment?: string;
  additional?: Record<string, string>;
  _links?: Links;
};
