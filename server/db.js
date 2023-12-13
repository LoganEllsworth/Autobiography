import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";
import { DB_TYPES } from "./constants.js";

const client = new DynamoDBClient({ region: "us-west-2"});
const docClient = DynamoDBDocumentClient.from(client);

export const createContactRequest = async ({ email, subject, message }) => {
    const uuid = crypto.randomUUID();
    const command = new PutCommand({
        TableName: "autobio-db",
        Item: {
            id: uuid,
            type: DB_TYPES.CONT_REQ,
            email,
            subject,
            message,
        }
    });

    const response = await docClient.send(command);

    return response;
}

export const createLog = async () => {
    const uuid = crypto.randomUUID();
    const command = new PutCommand({
        TableName: "autobio-db",
        Item: {
            id: uuid,
            type: DB_TYPES.LOG,
        }
    });

    const response = await docClient.send(command);

    return response;
}