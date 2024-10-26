import { Example } from "@acme/core/example";
import type { Handler } from "aws-lambda";
import { Resource } from "sst";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `${Example.hello()} Linked to ${Resource.MyBucket.name}.`,
  };
};
