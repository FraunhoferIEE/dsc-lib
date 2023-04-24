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
import type {Duty} from '../models/Duty.js';
import type {Permission} from '../models/Permission.js';
import type {Prohibition} from '../models/Prohibition.js';
import type {SubscriptionDesc} from '../models/SubscriptionDesc.js';

import type {CancelablePromise} from '../core/CancelablePromise.js';
import {OpenAPIConfig} from '../core/OpenAPI.js';
import {request as __request} from '../core/request.js';

export class MessagingService {
  private OpenAPI: OpenAPIConfig;
  constructor(endpointConfig: OpenAPIConfig) {
    this.OpenAPI = endpointConfig;
  }

  /**
   * Notify all subscribers.
   * Can be used to manually notify all subscribers about a resource offer, representation, or artifact update.
   * @param elementId The element id.
   * @returns void
   * @throws ApiError
   */
  public notifySubscribers(elementId: string): CancelablePromise<void> {
    return __request(this.OpenAPI, {
      method: 'PUT',
      url: '/api/notify',
      query: {
        elementId: elementId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Send an IDS request message for unsubscribe from an element.
   * @param recipient The recipient url.
   * @param elementId The subscription object.
   * @returns any Ok
   * @throws ApiError
   */
  public unsubscribe(
    recipient: string,
    elementId: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/unsubscribe',
      query: {
        recipient: recipient,
        elementId: elementId,
      },
      errors: {
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
      },
    });
  }

  /**
   * Send an IDS request message for subscribing to (meta)data updates.
   * @param recipient The recipient url.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public subscribe(
    recipient: string,
    requestBody: SubscriptionDesc
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/subscribe',
      query: {
        recipient: recipient,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
      },
    });
  }

  /**
   * Perform full-text search.
   * Can be used for full text search at an IDS component (e.g. the Broker).
   * @param recipient The recipient url.
   * @param requestBody
   * @param limit The limit value.
   * @param offset The offset value.
   * @returns any Ok
   * @throws ApiError
   */
  public sendSearchMessage(
    recipient: string,
    requestBody: string,
    limit: number = 50,
    offset: number
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/search',
      query: {
        recipient: recipient,
        limit: limit,
        offset: offset,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        500: `Internal server error`,
        502: `Bad gateway`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Send an IDS ResourceUpdateMessage.
   * Can be used to register or update an IDS resource at an IDS Broker or consumer connector.
   * @param recipient The recipient url.
   * @param resourceId The resource id.
   * @returns any Ok
   * @throws ApiError
   */
  public sendResourceUpdateMessage(
    recipient: string,
    resourceId: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/resource/update',
      query: {
        recipient: recipient,
        resourceId: resourceId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not found`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Send an IDS ResourceUnavailableMessage.
   * Can be used for e.g. unregistering an IDS resource at an IDS Broker.
   * @param recipient The recipient url.
   * @param resourceId The resource id.
   * @returns any Ok
   * @throws ApiError
   */
  public sendResourceUnavailableMessage(
    recipient: string,
    resourceId: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/resource/unavailable',
      query: {
        recipient: recipient,
        resourceId: resourceId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Not found`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Send an IDS QueryMessage.
   * Can be used for querying an IDS component (e.g. the IDS Broker).
   * @param recipient The recipient url.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public sendQueryMessage(
    recipient: string,
    requestBody: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/query',
      query: {
        recipient: recipient,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Send an IDS DescriptionRequestMessage to query metadata.
   * @param recipient The recipient url.
   * @param elementId The id of the requested resource.
   * @returns any Ok
   * @throws ApiError
   */
  public sendIdsDescription(
    recipient: string,
    elementId?: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/description',
      query: {
        recipient: recipient,
        elementId: elementId,
      },
      errors: {
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
      },
    });
  }

  /**
   * Send an IDS ContractRequestMessage to start the contract negotiation.
   * @param recipient The recipient url.
   * @param resourceIds List of ids resource that should be requested.
   * @param artifactIds List of ids artifacts that should be requested.
   * @param download Indicates whether the connector should automatically download data of an artifact.
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public sendContractRequestMessage(
    recipient: string,
    resourceIds: Array<string>,
    artifactIds: Array<string>,
    download: boolean,
    requestBody: Array<Duty | Permission | Prohibition>
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/contract',
      query: {
        recipient: recipient,
        resourceIds: resourceIds,
        artifactIds: artifactIds,
        download: download,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
      },
    });
  }

  /**
   * Send an IDS ConnectorUpdateMessage.
   * Can be used for registering or updating the connector at an IDS Broker.
   * @param recipient The recipient url.
   * @returns any Ok
   * @throws ApiError
   */
  public sendConnectorUpdateMessage(recipient: string): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/connector/update',
      query: {
        recipient: recipient,
      },
      errors: {
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Send an IDS ConnectorUnavailableMessage.
   * Can be used for unregistering the connector at an IDS Broker.
   * @param recipient The recipient url.
   * @returns any Ok
   * @throws ApiError
   */
  public sendConnectorUnavailableMessage(
    recipient: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/connector/unavailable',
      query: {
        recipient: recipient,
      },
      errors: {
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
        504: `Gateway timeout`,
      },
    });
  }

  /**
   * Download an IDS app from an IDS AppStore.
   * @param recipient The recipient url.
   * @param appId The app id.
   * @returns any Ok
   * @throws ApiError
   */
  public downloadAppFromAppStore(
    recipient: string,
    appId: string
  ): CancelablePromise<any> {
    return __request(this.OpenAPI, {
      method: 'POST',
      url: '/api/ids/app',
      query: {
        recipient: recipient,
        appId: appId,
      },
      errors: {
        400: `Bad request`,
        401: `Unauthorized`,
        417: `Expectation failed`,
        500: `Internal server error`,
        502: `Bad gateway`,
      },
    });
  }
}
