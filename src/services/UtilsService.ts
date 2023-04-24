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
import type {ConnectorRestrictionDesc} from '../models/ConnectorRestrictionDesc.js';
import type {DeletionDesc} from '../models/DeletionDesc.js';
import type {DurationDesc} from '../models/DurationDesc.js';
import type {IntervalDesc} from '../models/IntervalDesc.js';
import type {JSONObject} from '../models/JSONObject.js';
import type {LoggingDesc} from '../models/LoggingDesc.js';
import type {NotificationDesc} from '../models/NotificationDesc.js';
import type {PatternDesc} from '../models/PatternDesc.js';
import type {PermissionDesc} from '../models/PermissionDesc.js';
import type {ProhibitionDesc} from '../models/ProhibitionDesc.js';
import type {SecurityRestrictionDesc} from '../models/SecurityRestrictionDesc.js';
import type {UsageNumberDesc} from '../models/UsageNumberDesc.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class UtilsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get the policy pattern represented by a given JSON string.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public getPolicyPattern(requestBody: string): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/examples/validation',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Get an example policy for a given policy pattern.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public getExampleUsagePolicy(
    requestBody:
      | PatternDesc
      | ConnectorRestrictionDesc
      | DeletionDesc
      | DurationDesc
      | IntervalDesc
      | LoggingDesc
      | NotificationDesc
      | PermissionDesc
      | ProhibitionDesc
      | SecurityRestrictionDesc
      | UsageNumberDesc
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/examples/policy',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get a list of enums by value name.
   * @returns JSONObject Ok
   * @throws ApiError
   */
  public getEnums(): CancelablePromise<JSONObject> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/utils/enums',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
