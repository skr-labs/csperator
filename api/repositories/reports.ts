import { PutItemInput } from '@aws-sdk/client-dynamodb';
import { DynamoService } from '../services';
import { Report } from '../models';
import { Utils } from '../utils';

export class ReportRepository {
    constructor(private dynamoService: DynamoService, private reportsTableName: string) { }

    public async createReport(params: {
        report: Report
    }): Promise<Report> {
        Utils.logger.info({ message: 'Creating CSP report' });

        // put the item in dynamo
        
        return params.report;
    }
}