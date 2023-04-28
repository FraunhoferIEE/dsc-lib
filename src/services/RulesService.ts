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
import type {ContractRuleDesc} from '../models/ContractRuleDesc.js';
import type {ContractRuleView} from '../models/ContractRuleView.js';
import type {PagedModelContractRuleView} from '../models/PagedModelContractRuleView.js';
import type {PagedModelContractView} from '../models/PagedModelContractView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class RulesService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns ContractRuleView Ok
   * @throws ApiError
   */
  public getRule(id: string): CancelablePromise<ContractRuleView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/rules/{id}',
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
   * @returns ContractRuleView Created
   * @throws ApiError
   */
  public updateRule(
    id: string,
    requestBody: ContractRuleDesc
  ): CancelablePromise<ContractRuleView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/rules/{id}',
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
  public deleteRule(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/rules/{id}',
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
   * @returns PagedModelContractView Ok
   * @throws ApiError
   */
  public getRuleContracts(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelContractView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/rules/{id}/contracts',
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
  public replaceRuleContracts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/rules/{id}/contracts',
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
   * @returns PagedModelContractView Ok
   * @throws ApiError
   */
  public addRuleContracts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelContractView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/rules/{id}/contracts',
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
  public removeRuleContracts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/rules/{id}/contracts',
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
   * @returns PagedModelContractRuleView Ok
   * @throws ApiError
   */
  public getRules(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelContractRuleView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/rules',
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
   * @returns ContractRuleView Created
   * @throws ApiError
   */
  public createRule(
    requestBody: ContractRuleDesc
  ): CancelablePromise<ContractRuleView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/rules',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
