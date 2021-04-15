const AWS = require('aws-sdk');

export const handler = async (event: any = {}): Promise<any> => {
    return {
        body: 'Updated lambda',
        statusCode: 500,
    };
};
