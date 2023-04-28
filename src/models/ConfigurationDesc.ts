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

import type {KeystoreDesc} from './KeystoreDesc.js';
import type {ProxyDesc} from './ProxyDesc.js';
import type {TruststoreDesc} from './TruststoreDesc.js';

export type ConfigurationDesc = {
  title?: string;
  description?: string;
  connectorId?: string;
  readonly defaultEndpoint?: string;
  readonly version?: string;
  curator?: string;
  maintainer?: string;
  readonly inboundModelVersion?: Array<string>;
  readonly outboundModelVersion?: string;
  readonly securityProfile?: ConfigurationDesc.securityProfile;
  logLevel?: ConfigurationDesc.logLevel;
  status?: ConfigurationDesc.status;
  deployMode?: ConfigurationDesc.deployMode;
  truststore?: TruststoreDesc;
  proxy?: ProxyDesc;
  keystore?: KeystoreDesc;
};

export namespace ConfigurationDesc {
  export enum securityProfile {
    BASE_SECURITY = 'Base Security',
    TRUST_PLUS_SECURITY = 'Trust Plus Security',
    TRUST_SECURITY = 'Trust Security',
  }

  export enum logLevel {
    OFF = 'Off',
    TRACE = 'Trace',
    DEBUG = 'Debug',
    INFO = 'Info',
    WARN = 'Warn',
    ERROR = 'Error',
  }

  export enum status {
    FAULTY = 'Faulty',
    OFFLINE = 'Offline',
    ONLINE = 'Online',
  }

  export enum deployMode {
    PRODUCTIVE = 'Productive',
    TEST = 'Test',
  }
}
