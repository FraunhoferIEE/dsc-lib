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
import {OpenAPIConfig} from './core/OpenAPI.js';
('./models/Rule');
import {ArtifactsService} from './services/ArtifactsService.js';
import {BrokersService} from './services/BrokersService.js';
import {CatalogsService} from './services/CatalogsService.js';
import {ContractsService} from './services/ContractsService.js';
import {DataSourcesService} from './services/DataSourcesService.js';
import {EndpointsService} from './services/EndpointsService.js';
import {MessagingService} from './services/MessagingService.js';
import {OfferedResourcesService} from './services/OfferedResourcesService.js';
import {RepresentationsService} from './services/RepresentationsService.js';
import {RoutesApacheCamelService} from './services/RoutesApacheCamelService.js';
import {RoutesService} from './services/RoutesService.js';
import {RulesService} from './services/RulesService.js';

export {ApiError} from './core/ApiError.js';
export {CancelablePromise, CancelError} from './core/CancelablePromise.js';
export {AppEndpointView} from './models/AppEndpointView.js';
export {BrokerDesc} from './models/BrokerDesc.js';
export {BrokerView} from './models/BrokerView.js';
export {ConfigurationDesc} from './models/ConfigurationDesc.js';
export {ConfigurationView} from './models/ConfigurationView.js';
export {Constraint} from './models/Constraint.js';
export {DataSourceView} from './models/DataSourceView.js';
export {OfferedResourceDesc} from './models/OfferedResourceDesc.js';
export {OfferedResourceView} from './models/OfferedResourceView.js';
export {RequestedResourceDesc} from './models/RequestedResourceDesc.js';
export {RequestedResourceView} from './models/RequestedResourceView.js';
export {RouteDesc} from './models/RouteDesc.js';
export {RouteView} from './models/RouteView.js';

export type {OpenAPIConfig} from './core/OpenAPI.js';
export type {AbstractConstraint} from './models/AbstractConstraint.js';
export type {AgreementView} from './models/AgreementView.js';
export type {AppEndpointDesc} from './models/AppEndpointDesc.js';
export type {AppStoreDesc} from './models/AppStoreDesc.js';
export type {AppStoreView} from './models/AppStoreView.js';
export type {AppView} from './models/AppView.js';
export type {ArtifactDesc} from './models/ArtifactDesc.js';
export type {ArtifactView} from './models/ArtifactView.js';
export type {AuthenticationDesc} from './models/AuthenticationDesc.js';
export type {CatalogDesc} from './models/CatalogDesc.js';
export type {CatalogView} from './models/CatalogView.js';
export type {ConnectorRestrictionDesc} from './models/ConnectorRestrictionDesc.js';
export type {ContractDesc} from './models/ContractDesc.js';
export type {ContractRuleDesc} from './models/ContractRuleDesc.js';
export type {ContractRuleView} from './models/ContractRuleView.js';
export type {ContractView} from './models/ContractView.js';
export type {DatabaseDataSourceDesc} from './models/DatabaseDataSourceDesc.js';
export type {DataSourceDesc} from './models/DataSourceDesc.js';
export type {DeletionDesc} from './models/DeletionDesc.js';
export type {DurationDesc} from './models/DurationDesc.js';
export type {Duty} from './models/Duty.js';
export type {Endpoint} from './models/Endpoint.js';
export type {EndpointDesc} from './models/EndpointDesc.js';
export type {GenericEndpointDesc} from './models/GenericEndpointDesc.js';
export type {IntervalDesc} from './models/IntervalDesc.js';
export type {JSONObject} from './models/JSONObject.js';
export type {KeystoreDesc} from './models/KeystoreDesc.js';
export type {KeystoreView} from './models/KeystoreView.js';
export type {Link} from './models/Link.js';
export type {Links} from './models/Links.js';
export type {LoggingDesc} from './models/LoggingDesc.js';
export type {LogicalConstraint} from './models/LogicalConstraint.js';
export type {NotificationDesc} from './models/NotificationDesc.js';
export type {PagedModelAgreementView} from './models/PagedModelAgreementView.js';
export type {PagedModelAppEndpointView} from './models/PagedModelAppEndpointView.js';
export type {PagedModelAppStoreView} from './models/PagedModelAppStoreView.js';
export type {PagedModelAppView} from './models/PagedModelAppView.js';
export type {PagedModelArtifactView} from './models/PagedModelArtifactView.js';
export type {PagedModelBrokerView} from './models/PagedModelBrokerView.js';
export type {PagedModelCatalogView} from './models/PagedModelCatalogView.js';
export type {PagedModelConfigurationView} from './models/PagedModelConfigurationView.js';
export type {PagedModelContractRuleView} from './models/PagedModelContractRuleView.js';
export type {PagedModelContractView} from './models/PagedModelContractView.js';
export type {PagedModelDataSourceView} from './models/PagedModelDataSourceView.js';
export type {PagedModelObject} from './models/PagedModelObject.js';
export type {PagedModelOfferedResourceView} from './models/PagedModelOfferedResourceView.js';
export type {PagedModelRepresentationView} from './models/PagedModelRepresentationView.js';
export type {PagedModelRequestedResourceView} from './models/PagedModelRequestedResourceView.js';
export type {PagedModelRouteView} from './models/PagedModelRouteView.js';
export type {PagedModelSubscriptionView} from './models/PagedModelSubscriptionView.js';
export type {PageMetadata} from './models/PageMetadata.js';
export type {PatternDesc} from './models/PatternDesc.js';
export type {Permission} from './models/Permission.js';
export type {PermissionDesc} from './models/PermissionDesc.js';
export type {Prohibition} from './models/Prohibition.js';
export type {ProhibitionDesc} from './models/ProhibitionDesc.js';
export type {ProxyDesc} from './models/ProxyDesc.js';
export type {ProxyView} from './models/ProxyView.js';
export type {RdfResource} from './models/RdfResource.js';
export type {RepresentationDesc} from './models/RepresentationDesc.js';
export type {RepresentationModelObject} from './models/RepresentationModelObject.js';
export type {RepresentationView} from './models/RepresentationView.js';
export type {Rule} from './models/Rule.js';
export type {RestDataSourceDesc} from './models/RestDataSourceDesc.js';
export type {SecurityRestrictionDesc} from './models/SecurityRestrictionDesc.js';
export type {SubscriptionDesc} from './models/SubscriptionDesc.js';
export type {SubscriptionView} from './models/SubscriptionView.js';
export type {TruststoreDesc} from './models/TruststoreDesc.js';
export type {TruststoreView} from './models/TruststoreView.js';
export type {TypedLiteral} from './models/TypedLiteral.js';
export type {UsageNumberDesc} from './models/UsageNumberDesc.js';

export class DSCConnector {
  messagingService: MessagingService;
  endpointsService: EndpointsService;
  dataSourcesService: DataSourcesService;
  catalogsService: CatalogsService;
  offeredResourcesService: OfferedResourcesService;
  representationsService: RepresentationsService;
  artifactsService: ArtifactsService;
  contractsService: ContractsService;
  rulesService: RulesService;
  routesService: RoutesService;
  routesApacheCamelService: RoutesApacheCamelService;
  brokerService: BrokersService;

  constructor(endpointUrl: string, username: string, password: string) {
    const endpointConfig: OpenAPIConfig = {
      BASE: endpointUrl,
      VERSION: '7.1.0',
      WITH_CREDENTIALS: true,
      CREDENTIALS: 'include',
      TOKEN: undefined,
      USERNAME: username,
      PASSWORD: password,
      HEADERS: undefined,
      ENCODE_PATH: undefined,
    };

    this.messagingService = new MessagingService(endpointConfig);
    this.endpointsService = new EndpointsService(endpointConfig);
    this.dataSourcesService = new DataSourcesService(endpointConfig);
    this.catalogsService = new CatalogsService(endpointConfig);
    this.offeredResourcesService = new OfferedResourcesService(endpointConfig);
    this.representationsService = new RepresentationsService(endpointConfig);
    this.artifactsService = new ArtifactsService(endpointConfig);
    this.contractsService = new ContractsService(endpointConfig);
    this.rulesService = new RulesService(endpointConfig);
    this.routesService = new RoutesService(endpointConfig);
    this.routesApacheCamelService = new RoutesApacheCamelService(
      endpointConfig
    );
    this.brokerService = new BrokersService(endpointConfig);
  }
}
