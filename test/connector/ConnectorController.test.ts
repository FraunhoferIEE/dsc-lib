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
import {describe} from 'mocha';
import {expect} from 'chai';
import {DatabaseDataSourceDesc, DSCConnector} from '../../src/index.js';

describe('Connector Controller - MessagingService', () => {
  let connectorController: DSCConnector;

  before(() => {
    connectorController = new DSCConnector(
      'localhost:8000',
      'username',
      'password'
    );
  });

  xit('Get General Description', async () => {
    const result =
      await connectorController.messagingService.sendIdsDescription(
        'https://anotherhostname:port/api/ids/data'
      );
    expect(result).to.not.equal(null);
  });

  xit('Get Resource Catalog Description', async () => {
    const result =
      await connectorController.messagingService.sendIdsDescription(
        'https://anotherhostname:port/api/ids/data',
        'https://anotherhostname:port/api/catalogs/13aebbad-dd7a-43f6-b049-305b71004258'
      );
    expect(result).to.not.equal(null);
  });

  xit('create datasource', async () => {
    const dataSource: DatabaseDataSourceDesc = {
      type: 'DATABASE',
      url: 'jdbc:postgresql://dbhostname:5432/transferdata',
      driverClassName: 'org.postgresql.Driver',
      basicAuth: {
        key: 'user',
        value: 'password',
      },
    };
    const result =
      connectorController.dataSourcesService.createDataSource(dataSource);
    expect(result).to.not.equal(null);
  });

  xit('create endpoint', async () => {
    const result = connectorController.endpointsService.createEndpoint({
      location:
        'sql:select * from table?initialDelay=10000&delay=15000&useIterator=false',
      type: 'GENERIC',
    });
    expect(result).to.not.equal(null);
  });
});
