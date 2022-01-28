import { Logger } from '@aws-lambda-powertools/logger';
import { Tracer } from '@aws-lambda-powertools/tracer';
import { Metrics } from '@aws-lambda-powertools/metrics';

import { config } from '../config';

export class Utils {
    public static logger: Logger;
    public static tracer: Tracer;
    public static metrics: Metrics;

    public static init() {
        this.logger = new Logger({ serviceName: config.serviceName });
        this.tracer = new Tracer({ serviceName: config.serviceName });
        this.metrics = new Metrics({ serviceName: config.serviceName });
    }
}