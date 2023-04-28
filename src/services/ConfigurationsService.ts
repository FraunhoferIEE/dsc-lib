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
import type {ConfigurationDesc} from '../models/ConfigurationDesc.js';
import type {ConfigurationView} from '../models/ConfigurationView.js';
import type {JSONObject} from '../models/JSONObject.js';
import type {PagedModelConfigurationView} from '../models/PagedModelConfigurationView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class ConfigurationsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns ConfigurationView Ok
   * @throws ApiError
   */
  public getConfiguration(id: string): CancelablePromise<ConfigurationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/configurations/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Update a base resource by id.
   * @param id
   * @param requestBody
   * @returns ConfigurationView Created
   * @throws ApiError
   */
  public updateConfiguration(
    id: string,
    requestBody: ConfigurationDesc
  ): CancelablePromise<ConfigurationView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/configurations/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Delete a base resource by id.
   * @param id
   * @returns void
   * @throws ApiError
   */
  public deleteConfiguration(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/configurations/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Update current configuration.
   * @param id
   * @returns void
   * @throws ApiError
   */
  public setConfiguration(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/configurations/{id}/active',
      path: {
        id: id,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        415: `Unsupported media type`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Get pattern validation status.
   * Return whether unsupported patterns are ignored when requesting data.
   * @returns JSONObject Ok
   * @throws ApiError
   */
  public getPatternStatus(): CancelablePromise<JSONObject> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/configuration/pattern',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Allow unsupported patterns.
   * Allow requesting data without policy enforcement if an unsupported pattern is recognized.
   * @param status
   * @returns JSONObject Ok
   * @throws ApiError
   */
  public setPatternStatus(status: boolean): CancelablePromise<JSONObject> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/configuration/pattern',
      query: {
        status: status,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get contract negotiation status.
   * @returns JSONObject Ok
   * @throws ApiError
   */
  public getNegotiationStatus(): CancelablePromise<JSONObject> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/configuration/negotiation',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Set contract negotiation status.
   * @param status
   * @returns JSONObject Ok
   * @throws ApiError
   */
  public setNegotiationStatus(status: boolean): CancelablePromise<JSONObject> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/configuration/negotiation',
      query: {
        status: status,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get a list of base resources with pagination.
   * @param page
   * @param size
   * @returns PagedModelConfigurationView Ok
   * @throws ApiError
   */
  public getConfigurations(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelConfigurationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/configurations',
      query: {
        page: page,
        size: size,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Create a base resource.
   * @param requestBody
   * @returns ConfigurationView Created
   * @throws ApiError
   */
  public createConfiguration(
    requestBody: ConfigurationDesc
  ): CancelablePromise<ConfigurationView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/configurations',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get current configuration.
   * @returns ConfigurationView Ok
   * @throws ApiError
   */
  public getCurrentConfiguration(): CancelablePromise<ConfigurationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/configurations/active',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
