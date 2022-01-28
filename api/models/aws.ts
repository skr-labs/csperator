import { CspReport } from './';

export interface Event {
    version: string;
    routeKey: string;
    rawPath: string;
    rawQueryString: string;
    headers?: {
        [key: string]: string
    };
    queryStringParameters?: QueryStringParameters;
    pathParameters?: {
        [key: string]: string
    };
    requestContext?: RequestContext;
    body: CspReport;
}

export interface QueryStringParameters {
    [key: string]: string | undefined;
    $filter?: string;
    $search?: string;
    $orderby?: string;
    $skip?: string;
    $top?: string;
}

export interface RequestContext {
    accountId?: string;
    apiId?: string;
    authorizer?: Claims;
    domainName: string;
    domainPrefix: string;
    http: {
        method: string;
        path: string;
        protocol: string;
        sourceIp: string;
        userAgent: string;
    }
    stage?: string;
    requestId?: string;
    time?: string;
    timeEpoch?: number;
}

export interface Claims {
    jwt: {
        claims: {
            aud: string;
            azp: string;
            exp: string;
            gty: string;
            iat: string;
            iss: string;
            sub: string;
        }
        scopes?: string;
    }
}