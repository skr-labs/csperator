import {
    DynamoDBClient,
    GetItemCommand, GetItemInput, GetItemCommandOutput,
    PutItemCommand, PutItemInput, PutItemCommandOutput,
    QueryCommand, QueryCommandInput, QueryCommandOutput,
    ScanCommand, ScanInput, ScanCommandOutput
} from '@aws-sdk/client-dynamodb';

export class DynamoService {
    private client: DynamoDBClient;

    constructor(region?: string, dynamo?: DynamoDBClient) {
        const options = {
            region: region ? region : `us-east-1`
        }
        this.client = dynamo ? dynamo : new DynamoDBClient(options);
    }

    public async get(params: GetItemInput): Promise<GetItemCommandOutput> {
        return this.client.send(new GetItemCommand(params));
    }

    public async put(params: PutItemInput): Promise<PutItemCommandOutput> {
        return this.client.send(new PutItemCommand(params));
    }

    public async query(params: QueryCommandInput): Promise<QueryCommandOutput> {
        return this.client.send(new QueryCommand(params));
    }

    public async scan(params: ScanInput): Promise<ScanCommandOutput> {
        return this.client.send(new ScanCommand(params));
    }
}