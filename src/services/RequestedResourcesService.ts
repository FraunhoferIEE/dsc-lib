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
import type {PagedModelCatalogView} from '../models/PagedModelCatalogView.js';
import type {PagedModelContractView} from '../models/PagedModelContractView.js';
import type {PagedModelRepresentationView} from '../models/PagedModelRepresentationView.js';
import type {PagedModelRequestedResourceView} from '../models/PagedModelRequestedResourceView.js';
import type {PagedModelSubscriptionView} from '../models/PagedModelSubscriptionView.js';
import type {RequestedResourceDesc} from '../models/RequestedResourceDesc.js';
import type {RequestedResourceView} from '../models/RequestedResourceView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class RequestedResourcesService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns RequestedResourceView Ok
   * @throws ApiError
   */
  public getRequest(id: string): CancelablePromise<RequestedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/requests/{id}',
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
   * @returns RequestedResourceView Created
   * @throws ApiError
   */
  public updateRequest(
    id: string,
    requestBody: RequestedResourceDesc
  ): CancelablePromise<RequestedResourceView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/requests/{id}',
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
  public deleteRequest(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/requests/{id}',
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
   * @returns PagedModelRepresentationView Ok
   * @throws ApiError
   */
  public getRequestRepresentations(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/requests/{id}/representations',
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
  public replaceRequestRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/requests/{id}/representations',
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
   * @returns PagedModelRepresentationView Ok
   * @throws ApiError
   */
  public addRequestRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/requests/{id}/representations',
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
  public removeRequestRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/requests/{id}/representations',
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
   * Get all children of a base resource with pagination.
   * @param id
   * @param page
   * @param size
   * @returns PagedModelCatalogView Ok
   * @throws ApiError
   */
  public getRequestCatalogs(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelCatalogView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/requests/{id}/catalogs',
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
  public replaceRequestCatalogs(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/requests/{id}/catalogs',
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
   * @returns PagedModelCatalogView Ok
   * @throws ApiError
   */
  public addRequestCatalogs(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelCatalogView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/requests/{id}/catalogs',
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
  public removeRequestCatalogs(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/requests/{id}/catalogs',
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
   * Get a list of base resources with pagination.
   * @param page
   * @param size
   * @returns PagedModelRequestedResourceView Ok
   * @throws ApiError
   */
  public getRequests(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRequestedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/requests',
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
   * Get all children of a base resource with pagination.
   * @param id
   * @param page
   * @param size
   * @returns PagedModelSubscriptionView Ok
   * @throws ApiError
   */
  public getRequestSubscriptions(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelSubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/requests/{id}/subscriptions',
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
   * Get all children of a base resource with pagination.
   * @param id
   * @param page
   * @param size
   * @returns PagedModelContractView Ok
   * @throws ApiError
   */
  public getRequestContracts(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelContractView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/requests/{id}/contracts',
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
}
