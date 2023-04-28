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
import type {DatabaseDataSourceDesc} from '../models/DatabaseDataSourceDesc.js';
import type {DataSourceView} from '../models/DataSourceView.js';
import type {PagedModelDataSourceView} from '../models/PagedModelDataSourceView.js';
import type {RestDataSourceDesc} from '../models/RestDataSourceDesc.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class DataSourcesService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns DataSourceView Ok
   * @throws ApiError
   */
  public getDatasource(id: string): CancelablePromise<DataSourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/datasources/{id}',
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
   * @returns DataSourceView Created
   * @throws ApiError
   */
  public updateDatasource(
    id: string,
    requestBody: DatabaseDataSourceDesc | RestDataSourceDesc
  ): CancelablePromise<DataSourceView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/datasources/{id}',
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
  public deleteDatasource(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/datasources/{id}',
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
   * @returns PagedModelDataSourceView Ok
   * @throws ApiError
   */
  public getDatasources(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelDataSourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/datasources',
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
   * @returns DataSourceView Created
   * @throws ApiError
   */
  public createDataSource(
    requestBody: DatabaseDataSourceDesc | RestDataSourceDesc
  ): CancelablePromise<DataSourceView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/datasources',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
