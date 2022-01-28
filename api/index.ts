import { config } from './config';
import { Utils } from './utils';

import { DynamoService } from './services';
import { ReportRepository } from './repositories';

import { Event } from './models';
import { Context } from 'aws-lambda';

Utils.init();

// Core services
const dynamoService = new DynamoService();
const reportRepository = new ReportRepository(dynamoService, config.dynamoTables.reports);

exports.handler = async (event: Event, context: Context) => {
    try {
        Utils.logger.addContext(context);
        Utils.logger.info({
            message: 'Received event'
        }, event);

        return await reportRepository.createReport({ report: event.body['csp-report'] });
    } catch (error) {
        Utils.logger.error({ message: 'Unhandled route error' }, error);
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(error)
        };
    }
};