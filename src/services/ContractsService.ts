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
import type {AgreementView} from '../models/AgreementView.js';
import type {ContractDesc} from '../models/ContractDesc.js';
import type {ContractView} from '../models/ContractView.js';
import type {PagedModelAgreementView} from '../models/PagedModelAgreementView.js';
import type {PagedModelArtifactView} from '../models/PagedModelArtifactView.js';
import type {PagedModelContractRuleView} from '../models/PagedModelContractRuleView.js';
import type {PagedModelContractView} from '../models/PagedModelContractView.js';
import type {PagedModelOfferedResourceView} from '../models/PagedModelOfferedResourceView.js';
import type {PagedModelRequestedResourceView} from '../models/PagedModelRequestedResourceView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class ContractsService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns ContractView Ok
   * @throws ApiError
   */
  public getContract(id: string): CancelablePromise<ContractView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/contracts/{id}',
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
   * @returns ContractView Created
   * @throws ApiError
   */
  public updateContract(
    id: string,
    requestBody: ContractDesc
  ): CancelablePromise<ContractView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/contracts/{id}',
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
  public deleteContract(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/contracts/{id}',
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
   * @returns PagedModelContractRuleView Ok
   * @throws ApiError
   */
  public getContractRules(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelContractRuleView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/contracts/{id}/rules',
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
  public replaceContractRules(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/contracts/{id}/rules',
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
   * @returns PagedModelContractRuleView Ok
   * @throws ApiError
   */
  public addRuleToContract(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelContractRuleView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/contracts/{id}/rules',
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
  public removeContractRule(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/contracts/{id}/rules',
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
  public getContractOffers(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/contracts/{id}/offers',
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
  public replaceContractOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/contracts/{id}/offers',
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
  public addContractOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/contracts/{id}/offers',
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
  public removeContractOffers(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/contracts/{id}/offers',
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
   * @returns PagedModelContractView Ok
   * @throws ApiError
   */
  public getContracts(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelContractView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/contracts',
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
   * @returns ContractView Created
   * @throws ApiError
   */
  public createContract(
    requestBody: ContractDesc
  ): CancelablePromise<ContractView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/contracts',
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
   * @returns PagedModelRequestedResourceView Ok
   * @throws ApiError
   */
  public getContractRequests(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRequestedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/contracts/{id}/requests',
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
   * Get a list of base resources with pagination.
   * @param page
   * @param size
   * @returns PagedModelAgreementView Ok
   * @throws ApiError
   */
  public getAgreements(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelAgreementView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/agreements',
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
   * @returns AgreementView Ok
   * @throws ApiError
   */
  public getAgreement(id: string): CancelablePromise<AgreementView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/agreements/{id}',
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
   * @returns PagedModelArtifactView Ok
   * @throws ApiError
   */
  public getArtifactsForAgreement(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelArtifactView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/agreements/{id}/artifacts',
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
