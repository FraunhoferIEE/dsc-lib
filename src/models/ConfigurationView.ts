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

import type {KeystoreView} from './KeystoreView.js';
import type {Links} from './Links.js';
import type {ProxyView} from './ProxyView.js';
import type {TruststoreView} from './TruststoreView.js';

export type ConfigurationView = {
  creationDate?: string;
  modificationDate?: string;
  connectorId?: string;
  title?: string;
  description?: string;
  defaultEndpoint?: string;
  version?: string;
  curator?: string;
  maintainer?: string;
  inboundModelVersion?: Array<string>;
  outboundModelVersion?: string;
  securityProfile?: ConfigurationView.securityProfile;
  status?: ConfigurationView.status;
  logLevel?: ConfigurationView.logLevel;
  deployMode?: ConfigurationView.deployMode;
  proxy?: ProxyView;
  trustStore?: TruststoreView;
  keyStore?: KeystoreView;
  _links?: Links;
};

export namespace ConfigurationView {
  export enum securityProfile {
    BASE_SECURITY = 'Base Security',
    TRUST_PLUS_SECURITY = 'Trust Plus Security',
    TRUST_SECURITY = 'Trust Security',
  }

  export enum status {
    FAULTY = 'Faulty',
    OFFLINE = 'Offline',
    ONLINE = 'Online',
  }

  export enum logLevel {
    OFF = 'Off',
    TRACE = 'Trace',
    DEBUG = 'Debug',
    INFO = 'Info',
    WARN = 'Warn',
    ERROR = 'Error',
  }

  export enum deployMode {
    PRODUCTIVE = 'Productive',
    TEST = 'Test',
  }
}
