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
import type {PagedModelArtifactView} from '../models/PagedModelArtifactView.js';
import type {PagedModelOfferedResourceView} from '../models/PagedModelOfferedResourceView.js';
import type {PagedModelRepresentationView} from '../models/PagedModelRepresentationView.js';
import type {PagedModelRequestedResourceView} from '../models/PagedModelRequestedResourceView.js';
import type {PagedModelSubscriptionView} from '../models/PagedModelSubscriptionView.js';
import type {RepresentationDesc} from '../models/RepresentationDesc.js';
import type {RepresentationView} from '../models/RepresentationView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class RepresentationsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns RepresentationView Ok
   * @throws ApiError
   */
  public getRepresentation(id: string): CancelablePromise<RepresentationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/representations/{id}',
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
   * @returns RepresentationView Created
   * @throws ApiError
   */
  public updateRepresentation(
    id: string,
    requestBody: RepresentationDesc
  ): CancelablePromise<RepresentationView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/representations/{id}',
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
  public deleteRepresentation(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/representations/{id}',
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
   * @returns PagedModelRequestedResourceView Ok
   * @throws ApiError
   */
  public getRepresentationRequests(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRequestedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/representations/{id}/requests',
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
  public replaceRepresentationRequests(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/representations/{id}/requests',
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
   * @returns PagedModelRequestedResourceView Ok
   * @throws ApiError
   */
  public addRepresentationRequests(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelRequestedResourceView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/representations/{id}/requests',
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
  public removeRepresentationRequests(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/representations/{id}/requests',
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
   * @returns PagedModelOfferedResourceView Ok
   * @throws ApiError
   */
  public getRepresentationOffers(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/representations/{id}/offers',
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
  public replaceRepresentationOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/representations/{id}/offers',
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
   * @returns PagedModelOfferedResourceView Ok
   * @throws ApiError
   */
  public addRepresentationOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/representations/{id}/offers',
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
  public removeRepresentationOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/representations/{id}/offers',
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
   * @returns PagedModelArtifactView Ok
   * @throws ApiError
   */
  public getRepresentationArtifacts(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelArtifactView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/representations/{id}/artifacts',
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
  public replaceRepresentationArtifacts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/representations/{id}/artifacts',
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
   * @returns PagedModelArtifactView Ok
   * @throws ApiError
   */
  public addRepresentationArtifact(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelArtifactView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/representations/{id}/artifacts',
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
  public removeRepresentationArtifacts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/representations/{id}/artifacts',
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
   * @returns PagedModelRepresentationView Ok
   * @throws ApiError
   */
  public getRepresentations(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/representations',
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
   * @returns RepresentationView Created
   * @throws ApiError
   */
  public createRepresentation(
    requestBody: RepresentationDesc
  ): CancelablePromise<RepresentationView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/representations',
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
   * @returns PagedModelSubscriptionView Ok
   * @throws ApiError
   */
  public getRepresentationSubscriptions(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelSubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/representations/{id}/subscriptions',
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
