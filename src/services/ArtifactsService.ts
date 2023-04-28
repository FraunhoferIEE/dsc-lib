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
import type {ArtifactDesc} from '../models/ArtifactDesc.js';
import type {ArtifactView} from '../models/ArtifactView.js';
import type {PagedModelAgreementView} from '../models/PagedModelAgreementView.js';
import type {PagedModelArtifactView} from '../models/PagedModelArtifactView.js';
import type {PagedModelRepresentationView} from '../models/PagedModelRepresentationView.js';
import type {PagedModelSubscriptionView} from '../models/PagedModelSubscriptionView.js';
import type {RouteView} from '../models/RouteView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class ArtifactsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns ArtifactView Ok
   * @throws ApiError
   */
  public getArtifact(id: string): CancelablePromise<ArtifactView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts/{id}',
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
   * @returns ArtifactView Created
   * @throws ApiError
   */
  public updateArtifact(
    id: string,
    requestBody: ArtifactDesc
  ): CancelablePromise<ArtifactView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/artifacts/{id}',
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
  public deleteArtifact(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/artifacts/{id}',
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
  public getArtifactRepresentations(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts/{id}/representations',
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
  public replaceArtifactRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/artifacts/{id}/representations',
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
  public addArtifactRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/artifacts/{id}/representations',
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
  public removeArtifactRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/artifacts/{id}/representations',
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
   * @param id
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public putData(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/artifacts/{id}/data',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/octet-stream',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get data by artifact id with query input.
   * @param id
   * @param routeIds
   * @param requestBody
   * @returns unknown Ok
   * @throws ApiError
   */
  public getDataWithQueryInput(
    id: string,
    routeIds?: Array<string>,
    requestBody?: any
  ): CancelablePromise<unknown> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/artifacts/{id}/data',
      path: {
        id: id,
      },
      query: {
        routeIds: routeIds,
      },
      body: requestBody,
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get a list of base resources with pagination.
   * @param page
   * @param size
   * @returns PagedModelArtifactView Ok
   * @throws ApiError
   */
  public getArtifacts(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelArtifactView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts',
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
   * @returns ArtifactView Created
   * @throws ApiError
   */
  public createArtifact(
    requestBody: ArtifactDesc
  ): CancelablePromise<ArtifactView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/artifacts',
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
  public getArtifactSubscriptions(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelSubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts/{id}/subscriptions',
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
   * Get route associated with artifact by id.
   * @param id
   * @returns RouteView Ok
   * @throws ApiError
   */
  public getRoute(id: string): CancelablePromise<RouteView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts/{id}/route',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get data by artifact id with query input.
   * @param id
   * @param download
   * @param agreementUri
   * @param routeIds
   * @returns unknown Ok
   * @throws ApiError
   */
  public getDataQuery(
    id: string,
    download?: boolean,
    agreementUri?: string,
    routeIds?: Array<string>
  ): CancelablePromise<unknown> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts/{id}/data/**',
      path: {
        id: id,
      },
      query: {
        download: download,
        agreementUri: agreementUri,
        routeIds: routeIds,
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
   * @returns PagedModelAgreementView Ok
   * @throws ApiError
   */
  public getArtifactAgreements(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelAgreementView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/artifacts/{id}/agreements',
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
