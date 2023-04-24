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
import type {AppView} from '../models/AppView.js';
import type {PagedModelAppEndpointView} from '../models/PagedModelAppEndpointView.js';
import type {PagedModelAppView} from '../models/PagedModelAppView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class AppsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Actions on apps
   * Can be used for managing apps.
   * @param id
   * @param type
   * @returns any Ok
   * @throws ApiError
   */
  public containerManagement(
    id: string,
    type: 'START' | 'STOP' | 'DELETE' | 'DESCRIBE'
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/apps/{id}/actions',
      path: {
        id: id,
      },
      query: {
        type: type,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        404: `Not found`,
        409: `Conflict`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Get a list of base resources with pagination.
   * @param page
   * @param size
   * @returns PagedModelAppView Ok
   * @throws ApiError
   */
  public getApps(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelAppView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/apps',
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
   * Get a base resource by id.
   * @param id
   * @returns AppView Ok
   * @throws ApiError
   */
  public getApp(id: string): CancelablePromise<AppView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/apps/{id}',
      path: {
        id: id,
      },
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
  public deleteApp(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/apps/{id}',
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
   * @returns PagedModelAppEndpointView Ok
   * @throws ApiError
   */
  public getAppEndpoints(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelAppEndpointView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/apps/{id}/endpoints',
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
   * Get appstore by app id
   * Get appstore holding this app.
   * @param id
   * @returns any Ok
   * @throws ApiError
   */
  public relatedAppStore(id: string): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/apps/{id}/appstore',
      path: {
        id: id,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        500: `Internal server error`,
      },
    });
  }
}
