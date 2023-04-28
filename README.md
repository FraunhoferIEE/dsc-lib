# dsc-lib

dsc-lib is a javascript library to control / interact with [DSC-DataSpace-Connectors](https://github.com/International-Data-Spaces-Association/DataspaceConnector).

The library is implemented in TypeScript, but can be either used by Javascript or TypeScript. The client is implemented for server-side use with Node and uses node-fetch as the request library.

## Installation

```bash
npm i dsc-lib
```

## Usage

```typescript
import {DSCConnector} from 'dsc-lib';

let connectorController: DSCConnector;

const connectorController = new DSCConnector(
  'https://connectorurl:port',
  'username',
  'password'
);

await connectorController.messagingService.sendIdsDescription(
  'https://anotherConnectorsHostname:8080/api/ids/data'
);
```

    See ./test/connector for more examples

## Credits

The typescript models and services in this library have been initially generated from the official OpenAPI Spec with the help of [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen) and then have been further modified.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)
