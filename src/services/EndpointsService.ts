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
import type {AppEndpointDesc} from '../models/AppEndpointDesc.js';
import type {EndpointDesc} from '../models/EndpointDesc.js';
import type {GenericEndpointDesc} from '../models/GenericEndpointDesc.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';
import {request as __request} from '../core/request.js';
import {EndpointView} from '../models/EndpointView.js';
import {PagedModelEndpointView} from '../models/PagedModelEndpointView.js';

export class EndpointsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns any Ok
   * @throws ApiError
   */
  public getEndpoint(id: string): CancelablePromise<EndpointView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/endpoints/{id}',
      path: {
        id: id,
      },
      errors: {
        401: 'Unauthorized',
      },
    });
  }

  /**
   * Update a base resource by id.
   * @param id
   * @param requestBody
   * @returns any Created
   * @throws ApiError
   */
  public updateEndpoint(
    id: string,
    requestBody: EndpointDesc | AppEndpointDesc | GenericEndpointDesc
  ): CancelablePromise<EndpointView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/endpoints/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: 'Unauthorized',
      },
    });
  }

  /**
   * Delete a base resource by id.
   * @param id
   * @returns void
   * @throws ApiError
   */
  public deleteEndpoint(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/endpoints/{id}',
      path: {
        id: id,
      },
      errors: {
        401: 'Unauthorized',
      },
    });
  }

  /**
   * Creates start endpoint for a route.
   * @param id
   * @param dataSourceId
   * @returns void
   * @throws ApiError
   */
  public linkDataSource(
    id: string,
    dataSourceId: string
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/endpoints/{id}/datasource/{dataSourceId}',
      path: {
        id: id,
        dataSourceId: dataSourceId,
      },
      errors: {
        401: 'Unauthorized',
      },
    });
  }

  /**
   * Get a list of base resources with pagination.
   * @param page
   * @param size
   * @returns PagedModelObject Ok
   * @throws ApiError
   */
  public getEndpoints(
    page?: number,
    size = 30
  ): CancelablePromise<PagedModelEndpointView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/endpoints',
      query: {
        page: page,
        size: size,
      },
      errors: {
        401: 'Unauthorized',
      },
    });
  }

  /**
   * Create a base resource.
   * @param requestBody
   * @returns any Created
   * @throws ApiError
   */
  public createEndpoint(
    requestBody: EndpointDesc | AppEndpointDesc | GenericEndpointDesc
  ): CancelablePromise<EndpointView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/endpoints',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: 'Unauthorized',
      },
    });
  }
}
