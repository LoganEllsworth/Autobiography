import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({ region: "us-west-2" });

export const getDocument = async ({ docName }) => {
    const command = new GetObjectCommand({
        Bucket: "loganells-documents",
        Key: docName,
    });

    const response = await client.send(command);

    return response;
}