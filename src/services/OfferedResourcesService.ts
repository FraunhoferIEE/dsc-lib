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
import type {OfferedResourceDesc} from '../models/OfferedResourceDesc.js';
import type {OfferedResourceView} from '../models/OfferedResourceView.js';
import type {PagedModelBrokerView} from '../models/PagedModelBrokerView.js';
import type {PagedModelCatalogView} from '../models/PagedModelCatalogView.js';
import type {PagedModelContractView} from '../models/PagedModelContractView.js';
import type {PagedModelOfferedResourceView} from '../models/PagedModelOfferedResourceView.js';
import type {PagedModelRepresentationView} from '../models/PagedModelRepresentationView.js';
import type {PagedModelSubscriptionView} from '../models/PagedModelSubscriptionView.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {request as __request} from '../core/request.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';

export class OfferedResourcesService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Get a base resource by id.
   * @param id
   * @returns OfferedResourceView Ok
   * @throws ApiError
   */
  public getOffer(id: string): CancelablePromise<OfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers/{id}',
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
   * @returns OfferedResourceView Created
   * @throws ApiError
   */
  public updateOffer(
    id: string,
    requestBody: OfferedResourceDesc
  ): CancelablePromise<OfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/offers/{id}',
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
  public deleteOffer(id: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/offers/{id}',
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
  public getOfferRepresentations(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers/{id}/representations',
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
  public replaceOfferRepresentations(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/offers/{id}/representations',
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
  public addRepresentationToOfferedResource(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelRepresentationView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/offers/{id}/representations',
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
  public removeOfferRepresentation(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/offers/{id}/representations',
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
   * @returns PagedModelContractView Ok
   * @throws ApiError
   */
  public getOfferContracts(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelContractView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers/{id}/contracts',
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
  public replaceOfferContracts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/offers/{id}/contracts',
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
  public addContractToResource(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelContractView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/offers/{id}/contracts',
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
  public removeOfferContracts(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/offers/{id}/contracts',
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
   * @returns PagedModelCatalogView Ok
   * @throws ApiError
   */
  public getOfferCatalogs(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelCatalogView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers/{id}/catalogs',
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
  public replaceOfferCatalogs(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/offers/{id}/catalogs',
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
   * @returns PagedModelCatalogView Ok
   * @throws ApiError
   */
  public addOfferCatalogs(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<PagedModelCatalogView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/offers/{id}/catalogs',
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
  public removeOfferCatalogs(
    id: string,
    requestBody: Array<string>
  ): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'DELETE',
      url: '/api/offers/{id}/catalogs',
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
   * @returns PagedModelOfferedResourceView Ok
   * @throws ApiError
   */
  public getOffers(
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelOfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers',
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
   * @returns OfferedResourceView Created
   * @throws ApiError
   */
  public createOffer(
    requestBody: OfferedResourceDesc
  ): CancelablePromise<OfferedResourceView> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/offers',
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
  public getOfferSubscriptons(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelSubscriptionView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers/{id}/subscriptions',
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
   * Get all children of a base resource with pagination.
   * @param id
   * @param page
   * @param size
   * @returns PagedModelBrokerView Ok
   * @throws ApiError
   */
  public getOfferBrokers(
    id: string,
    page?: number,
    size: number = 30
  ): CancelablePromise<PagedModelBrokerView> {
    return __request(this.OpenAPI, {
      method: 'GET',
      url: '/api/offers/{id}/brokers',
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
