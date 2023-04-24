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
import type {CancelablePromise} from '../core/CancelablePromise.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';
import {request as __request} from '../core/request.js';

export class RoutesApacheCamelService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Add a route to the Camel context.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public async addRoutes(requestBody: {
    file: Blob;
  }): Promise<CancelablePromise<any>> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/camel/routes',
      body: await this.toFormData(requestBody.file),
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Add a bean to the application context.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public async addBeans(requestBody: {
    file: Blob;
  }): Promise<CancelablePromise<any>> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/beans',
      body: await this.toFormData(requestBody.file),
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get new route related errors.
   * @returns any Ok
   * @throws ApiError
   */
  public getRouteErrors(): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/camel/routes/error',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Delete a route from the Camel context.
   * @param routeId
   * @returns any Ok
   * @throws ApiError
   */
  public removeRoute(routeId: string): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/camel/routes/{routeId}',
      path: {
        routeId: routeId,
      },
      errors: {
        401: `Unauthorized`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Remove a bean from the application context.
   * @param beanId
   * @returns any Ok
   * @throws ApiError
   */
  public removeBean(beanId: string): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/beans/{beanId}',
      path: {
        beanId: beanId,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
      },
    });
  }

  private async toFormData(file: Blob): Promise<FormData> {
    const formData = new FormData();
    formData.append('file', file, 'route.xml');
    return formData;
  }
}
