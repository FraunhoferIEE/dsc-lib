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
import type {PagedModelSubscriptionView} from '../models/PagedModelSubscriptionView.js';
import type {SubscriptionDesc} from '../models/SubscriptionDesc.js';
import type {SubscriptionView} from '../models/SubscriptionView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class SubscriptionsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns SubscriptionView Ok
   * @throws ApiError
   */
  public getSubscription(id: string): CancelablePromise<SubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/subscriptions/{id}',
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
   * @returns SubscriptionView Created
   * @throws ApiError
   */
  public updateSubscription(
    id: string,
    requestBody: SubscriptionDesc
  ): CancelablePromise<SubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/subscriptions/{id}',
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
  public deleteSubscription(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/subscriptions/{id}',
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
   * @returns PagedModelSubscriptionView Ok
   * @throws ApiError
   */
  public getSubscriptions(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelSubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/subscriptions',
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
   * @returns SubscriptionView Created
   * @throws ApiError
   */
  public createSubscription(
    requestBody: SubscriptionDesc
  ): CancelablePromise<SubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/subscriptions',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }

  /**
   * Get all subscriptions owned by this connector.
   * @param page
   * @param size
   * @returns void
   * @throws ApiError
   */
  public getAllFilteredSubscriptions(
    page?: number,
    size: number = 30
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/subscriptions/owning',
      query: {
        page: page,
        size: size,
      },
      errors: {
        401: `Unauthorized`,
        405: `Not allowed`,
      },
    });
  }
}
