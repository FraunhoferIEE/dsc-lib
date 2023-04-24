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
import type {BrokerDesc} from '../models/BrokerDesc.js';
import type {BrokerView} from '../models/BrokerView.js';
import type {PagedModelBrokerView} from '../models/PagedModelBrokerView.js';
import type {PagedModelOfferedResourceView} from '../models/PagedModelOfferedResourceView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class BrokersService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns BrokerView Ok
   * @throws ApiError
   */
  public getBroker(id: string): CancelablePromise<BrokerView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/brokers/{id}',
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
   * @returns BrokerView Created
   * @throws ApiError
   */
  public updateBroker(
    id: string,
    requestBody: BrokerDesc
  ): CancelablePromise<BrokerView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/brokers/{id}',
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
  public deleteBroker(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/brokers/{id}',
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
   * @returns PagedModelBrokerView Ok
   * @throws ApiError
   */
  public getBrokers(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelBrokerView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/brokers',
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
   * @returns BrokerView Created
   * @throws ApiError
   */
  public createBroker(requestBody: BrokerDesc): CancelablePromise<BrokerView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/brokers',
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
  public getBrokerOffers(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/brokers/{id}/offers',
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
