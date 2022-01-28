export interface CspReport {
    'csp-report': Report;
}

export interface Report {
    'blocked-uri': string;
    disposition: string | 'enforce' | 'report';
    'document-uri': string;
    'effective-directive': string;
    'original-policy': string;
    referrer: string;
    'script-sample': string;
    'status-code': string;
    'violated-directive': string;
}