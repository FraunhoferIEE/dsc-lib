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
import type {AppStoreDesc} from '../models/AppStoreDesc.js';
import type {AppStoreView} from '../models/AppStoreView.js';
import type {PagedModelAppStoreView} from '../models/PagedModelAppStoreView.js';
import type {PagedModelAppView} from '../models/PagedModelAppView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class AppStoresService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns AppStoreView Ok
   * @throws ApiError
   */
  public getAppstore(id: string): CancelablePromise<AppStoreView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/appstores/{id}',
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
   * @returns AppStoreView Created
   * @throws ApiError
   */
  public updateAppstore(
    id: string,
    requestBody: AppStoreDesc
  ): CancelablePromise<AppStoreView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/appstores/{id}',
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
  public deleteAppstore(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/appstores/{id}',
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
   * @returns PagedModelAppStoreView Ok
   * @throws ApiError
   */
  public getAppstores(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelAppStoreView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/appstores',
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
   * @returns AppStoreView Created
   * @throws ApiError
   */
  public create12(requestBody: AppStoreDesc): CancelablePromise<AppStoreView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/appstores',
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
   * @returns PagedModelAppView Ok
   * @throws ApiError
   */
  public getResource23(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelAppView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/appstores/{id}/apps',
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
