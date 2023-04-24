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

import type {Constraint} from './Constraint.js';
import type {LogicalConstraint} from './LogicalConstraint.js';
import type {TypedLiteral} from './TypedLiteral.js';

export type Rule = {
  comment?: Array<TypedLiteral>;
  label?: Array<TypedLiteral>;
  properties?: Record<string, any>;
  'ids:assignee'?: Array<string>;
  'ids:assigner'?: Array<string>;
  'ids:constraint'?: Array<LogicalConstraint>;
  'ids:action': Array<
    | 'https://w3id.org/idsa/code/AGGREGATE_BY_CONSUMER'
    | 'https://w3id.org/idsa/code/AGGREGATE_BY_PROVIDER'
    | 'https://w3id.org/idsa/code/ANONYMIZE'
    | 'https://w3id.org/idsa/code/COMPENSATE'
    | 'https://w3id.org/idsa/code/DELETE'
    | 'https://w3id.org/idsa/code/DISTRIBUTE'
    | 'https://w3id.org/idsa/code/ENCRYPT'
    | 'https://w3id.org/idsa/code/GRANT_USE'
    | 'https://w3id.org/idsa/code/LOG'
    | 'https://w3id.org/idsa/code/MODIFY'
    | 'https://w3id.org/idsa/code/NEXT_POLICY'
    | 'https://w3id.org/idsa/code/NOTIFY'
    | 'https://w3id.org/idsa/code/READ'
    | 'https://w3id.org/idsa/code/TRACK_PROVENANCE'
    | 'https://w3id.org/idsa/code/USE'
    | 'https://w3id.org/idsa/code/WRITE'
  >;
  'ids:assetRefinement'?: Constraint | LogicalConstraint;
  'ids:target'?: string;
  'ids:description'?: Array<TypedLiteral>;
  'ids:title'?: Array<TypedLiteral>;
  '@id': string;
  '@type': string;
};
