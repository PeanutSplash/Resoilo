import { RequestHeaders } from "h3";
import { errorHandler, setResStatus } from "~/server/utils/h3";
import { getOpenAIApiInstance } from "../utils/openai";

export default defineEventHandler(async (event) => {
  try {
    const headers = getHeaders(event);
    const response = await listModels(headers);

    setResStatus(event, response.status, response.statusText);
    return response.data;
  } catch (e: any) {
    return await errorHandler(event, e);
  }
});

async function listModels(headers: RequestHeaders) {
  const openai = getOpenAIApiInstance("models", headers);
  return openai.listModels();
}
