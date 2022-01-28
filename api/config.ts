export const config = {
    apiVersion: '2022-02-01',
    dynamoTables: {
        reports: <string>process.env.reportsTable,
    },
    serviceName: 'csperator',
    swaggerPath: './spec/2022-02-01.swagger.json',
};