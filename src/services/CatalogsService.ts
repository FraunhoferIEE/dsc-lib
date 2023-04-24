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
import type {CatalogDesc} from '../models/CatalogDesc.js';
import type {CatalogView} from '../models/CatalogView.js';
import type {PagedModelCatalogView} from '../models/PagedModelCatalogView.js';
import type {PagedModelOfferedResourceView} from '../models/PagedModelOfferedResourceView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class CatalogsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns CatalogView Ok
   * @throws ApiError
   */
  public getCatalog(id: string): CancelablePromise<CatalogView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/catalogs/{id}',
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
   * @returns CatalogView Created
   * @throws ApiError
   */
  public updateCatalog(
    id: string,
    requestBody: CatalogDesc
  ): CancelablePromise<CatalogView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/catalogs/{id}',
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
  public deleteCatalog(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/catalogs/{id}',
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
   * @returns PagedModelOfferedResourceView Ok
   * @throws ApiError
   */
  public getCatalogOffers(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/catalogs/{id}/offers',
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
  public replaceCatalogOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/catalogs/{id}/offers',
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
  public addOfferedRessourceToCatalog(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/catalogs/{id}/offers',
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
  public removeCatalogOffer(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/catalogs/{id}/offers',
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
   * @returns PagedModelCatalogView Ok
   * @throws ApiError
   */
  public getCatalogs(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelCatalogView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/catalogs',
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
   * @returns CatalogView Created
   * @throws ApiError
   */
  public createCatalog(
    requestBody: CatalogDesc
  ): CancelablePromise<CatalogView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/catalogs',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
