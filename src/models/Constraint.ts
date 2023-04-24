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

import type {AbstractConstraint} from './AbstractConstraint.js';
import type {RdfResource} from './RdfResource.js';

export type Constraint = AbstractConstraint & {
  'ids:leftOperand'?: Constraint.idsLeftOperand;
  'ids:rightOperand'?: RdfResource;
  'ids:rightOperandReference'?: string;
  'ids:unit'?: string;
  'ids:pipEndpoint'?: string;
  'ids:operator'?: Constraint.idsOperator;
  '@type'?: string;
};

export namespace Constraint {
  export enum idsLeftOperand {
    HTTPS_W3ID_ORG_IDSA_CODE_ABSOLUTE_SPATIAL_POSITION = 'https://w3id.org/idsa/code/ABSOLUTE_SPATIAL_POSITION',
    HTTPS_W3ID_ORG_IDSA_CODE_COUNT = 'https://w3id.org/idsa/code/COUNT',
    HTTPS_W3ID_ORG_IDSA_CODE_DELAY = 'https://w3id.org/idsa/code/DELAY',
    HTTPS_W3ID_ORG_IDSA_CODE_ELAPSED_TIME = 'https://w3id.org/idsa/code/ELAPSED_TIME',
    HTTPS_W3ID_ORG_IDSA_CODE_ENDPOINT = 'https://w3id.org/idsa/code/ENDPOINT',
    HTTPS_W3ID_ORG_IDSA_CODE_EVENT = 'https://w3id.org/idsa/code/EVENT',
    HTTPS_W3ID_ORG_IDSA_CODE_PATH = 'https://w3id.org/idsa/code/PATH',
    HTTPS_W3ID_ORG_IDSA_CODE_PAYMENT = 'https://w3id.org/idsa/code/PAYMENT',
    HTTPS_W3ID_ORG_IDSA_CODE_PAY_AMOUNT = 'https://w3id.org/idsa/code/PAY_AMOUNT',
    HTTPS_W3ID_ORG_IDSA_CODE_POLICY_EVALUATION_TIME = 'https://w3id.org/idsa/code/POLICY_EVALUATION_TIME',
    HTTPS_W3ID_ORG_IDSA_CODE_PURPOSE = 'https://w3id.org/idsa/code/PURPOSE',
    HTTPS_W3ID_ORG_IDSA_CODE_QUANTITY = 'https://w3id.org/idsa/code/QUANTITY',
    HTTPS_W3ID_ORG_IDSA_CODE_RECURRENCE_RATE = 'https://w3id.org/idsa/code/RECURRENCE_RATE',
    HTTPS_W3ID_ORG_IDSA_CODE_SECURITY_LEVEL = 'https://w3id.org/idsa/code/SECURITY_LEVEL',
    HTTPS_W3ID_ORG_IDSA_CODE_STATE = 'https://w3id.org/idsa/code/STATE',
    HTTPS_W3ID_ORG_IDSA_CODE_SYSTEM = 'https://w3id.org/idsa/code/SYSTEM',
    HTTPS_W3ID_ORG_IDSA_CODE_USER = 'https://w3id.org/idsa/code/USER',
  }

  export enum idsOperator {
    HTTPS_W3ID_ORG_IDSA_CODE_AFTER = 'https://w3id.org/idsa/code/AFTER',
    HTTPS_W3ID_ORG_IDSA_CODE_BEFORE = 'https://w3id.org/idsa/code/BEFORE',
    HTTPS_W3ID_ORG_IDSA_CODE_CONTAINS = 'https://w3id.org/idsa/code/CONTAINS',
    HTTPS_W3ID_ORG_IDSA_CODE_COVERED_BY = 'https://w3id.org/idsa/code/COVERED_BY',
    HTTPS_W3ID_ORG_IDSA_CODE_COVERS = 'https://w3id.org/idsa/code/COVERS',
    HTTPS_W3ID_ORG_IDSA_CODE_DEFINES_AS = 'https://w3id.org/idsa/code/DEFINES_AS',
    HTTPS_W3ID_ORG_IDSA_CODE_DISJOINT = 'https://w3id.org/idsa/code/DISJOINT',
    HTTPS_W3ID_ORG_IDSA_CODE_DURATION_EQ = 'https://w3id.org/idsa/code/DURATION_EQ',
    HTTPS_W3ID_ORG_IDSA_CODE_DURING = 'https://w3id.org/idsa/code/DURING',
    HTTPS_W3ID_ORG_IDSA_CODE_EQ = 'https://w3id.org/idsa/code/EQ',
    HTTPS_W3ID_ORG_IDSA_CODE_EQUALS = 'https://w3id.org/idsa/code/EQUALS',
    HTTPS_W3ID_ORG_IDSA_CODE_FINISHED_BY = 'https://w3id.org/idsa/code/FINISHED_BY',
    HTTPS_W3ID_ORG_IDSA_CODE_FINISHES = 'https://w3id.org/idsa/code/FINISHES',
    HTTPS_W3ID_ORG_IDSA_CODE_GT = 'https://w3id.org/idsa/code/GT',
    HTTPS_W3ID_ORG_IDSA_CODE_GTEQ = 'https://w3id.org/idsa/code/GTEQ',
    HTTPS_W3ID_ORG_IDSA_CODE_HAS_MEMBERSHIP = 'https://w3id.org/idsa/code/HAS_MEMBERSHIP',
    HTTPS_W3ID_ORG_IDSA_CODE_HAS_SITE = 'https://w3id.org/idsa/code/HAS_SITE',
    HTTPS_W3ID_ORG_IDSA_CODE_HAS_STATE = 'https://w3id.org/idsa/code/HAS_STATE',
    HTTPS_W3ID_ORG_IDSA_CODE_IN = 'https://w3id.org/idsa/code/IN',
    HTTPS_W3ID_ORG_IDSA_CODE_INSIDE = 'https://w3id.org/idsa/code/INSIDE',
    HTTPS_W3ID_ORG_IDSA_CODE_INSIDE_NETWORK = 'https://w3id.org/idsa/code/INSIDE_NETWORK',
    HTTPS_W3ID_ORG_IDSA_CODE_LONGER = 'https://w3id.org/idsa/code/LONGER',
    HTTPS_W3ID_ORG_IDSA_CODE_LONGER_EQ = 'https://w3id.org/idsa/code/LONGER_EQ',
    HTTPS_W3ID_ORG_IDSA_CODE_LT = 'https://w3id.org/idsa/code/LT',
    HTTPS_W3ID_ORG_IDSA_CODE_LTEQ = 'https://w3id.org/idsa/code/LTEQ',
    HTTPS_W3ID_ORG_IDSA_CODE_MATCHES = 'https://w3id.org/idsa/code/MATCHES',
    HTTPS_W3ID_ORG_IDSA_CODE_MEETS = 'https://w3id.org/idsa/code/MEETS',
    HTTPS_W3ID_ORG_IDSA_CODE_MEMBER_OF = 'https://w3id.org/idsa/code/MEMBER_OF',
    HTTPS_W3ID_ORG_IDSA_CODE_MET_BY = 'https://w3id.org/idsa/code/MET_BY',
    HTTPS_W3ID_ORG_IDSA_CODE_NOT = 'https://w3id.org/idsa/code/NOT',
    HTTPS_W3ID_ORG_IDSA_CODE_OVERLAPPED_BY = 'https://w3id.org/idsa/code/OVERLAPPED_BY',
    HTTPS_W3ID_ORG_IDSA_CODE_OVERLAPS = 'https://w3id.org/idsa/code/OVERLAPS',
    HTTPS_W3ID_ORG_IDSA_CODE_SAME_AS = 'https://w3id.org/idsa/code/SAME_AS',
    HTTPS_W3ID_ORG_IDSA_CODE_SHORTER = 'https://w3id.org/idsa/code/SHORTER',
    HTTPS_W3ID_ORG_IDSA_CODE_SHORTER_EQ = 'https://w3id.org/idsa/code/SHORTER_EQ',
    HTTPS_W3ID_ORG_IDSA_CODE_SPATIAL_CONTAINS = 'https://w3id.org/idsa/code/SPATIAL_CONTAINS',
    HTTPS_W3ID_ORG_IDSA_CODE_SPATIAL_EQUALS = 'https://w3id.org/idsa/code/SPATIAL_EQUALS',
    HTTPS_W3ID_ORG_IDSA_CODE_SPATIAL_MEET = 'https://w3id.org/idsa/code/SPATIAL_MEET',
    HTTPS_W3ID_ORG_IDSA_CODE_SPATIAL_OVERLAP = 'https://w3id.org/idsa/code/SPATIAL_OVERLAP',
    HTTPS_W3ID_ORG_IDSA_CODE_STARTED_BY = 'https://w3id.org/idsa/code/STARTED_BY',
    HTTPS_W3ID_ORG_IDSA_CODE_STARTS = 'https://w3id.org/idsa/code/STARTS',
    HTTPS_W3ID_ORG_IDSA_CODE_STRING_CONTAINS = 'https://w3id.org/idsa/code/STRING_CONTAINS',
    HTTPS_W3ID_ORG_IDSA_CODE_STRING_EQ = 'https://w3id.org/idsa/code/STRING_EQ',
    HTTPS_W3ID_ORG_IDSA_CODE_STRING_IS_CONTAINED = 'https://w3id.org/idsa/code/STRING_IS_CONTAINED',
    HTTPS_W3ID_ORG_IDSA_CODE_TEMPORAL_DISJOINT = 'https://w3id.org/idsa/code/TEMPORAL_DISJOINT',
    HTTPS_W3ID_ORG_IDSA_CODE_TEMPORAL_EQUALS = 'https://w3id.org/idsa/code/TEMPORAL_EQUALS',
  }
}
