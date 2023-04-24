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
import type {ArtifactView} from '../models/ArtifactView.js';
import type {PagedModelRouteView} from '../models/PagedModelRouteView.js';
import type {RouteDesc} from '../models/RouteDesc.js';
import type {RouteView} from '../models/RouteView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class RoutesService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns RouteView Ok
   * @throws ApiError
   */
  public getRoute(id: string): CancelablePromise<RouteView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/routes/{id}',
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
   * @returns RouteView Created
   * @throws ApiError
   */
  public updateRoute(
    id: string,
    requestBody: RouteDesc
  ): CancelablePromise<RouteView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/routes/{id}',
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
  public deleteRoute(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/routes/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get all children of a base resource with pagination.
   * @param id
   * @param page
   * @param size
   * @returns PagedModelRouteView Ok
   * @throws ApiError
   */
  public getRouteStep(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRouteView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/routes/{id}/steps',
      path: {
        id: id,
      },
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
   * Replace the children of a base resource.
   * @param id
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public replaceRouteStep(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/routes/{id}/steps',
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
   * Add a list of children to a base resource.
   * @param id
   * @param requestBody
   * @returns PagedModelRouteView Ok
   * @throws ApiError
   */
  public addRouteStep(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelRouteView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/routes/{id}/steps',
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
   * Remove a list of children from a base resource.
   * @param id
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public removeRouteStep(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/routes/{id}/steps',
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
   * Creates the start endpoint for a route.
   * @param id
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public createStartEndpoint(
    id: string,
    requestBody: string
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/routes/{id}/endpoint/start',
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
   * Deletes the start endpoint of a route.
   * @param id
   * @returns void
   * @throws ApiError
   */
  public deleteStartEndpoint(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/routes/{id}/endpoint/start',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Creates the last endpoint for the route.
   * @param id
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public createLastEndpoint(
    id: string,
    requestBody: string
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/routes/{id}/endpoint/end',
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
   * Deletes the start endpoint of the route.
   * @param id
   * @returns void
   * @throws ApiError
   */
  public deleteLastEndpoint(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/routes/{id}/endpoint/end',
      path: {
        id: id,
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
   * @returns PagedModelRouteView Ok
   * @throws ApiError
   */
  public getRoutes(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRouteView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/routes',
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
   * @returns RouteView Created
   * @throws ApiError
   */
  public createRoute(requestBody: RouteDesc): CancelablePromise<RouteView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/routes',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Returns the output of the route
   * @param id
   * @returns ArtifactView Ok
   * @throws ApiError
   */
  public getOutput(id: string): CancelablePromise<ArtifactView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/routes/{id}/output',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
