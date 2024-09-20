import { RequestHeaders } from "h3";
import { aesCrypto } from "~/server/api/crypto.post";
import { Configuration, OpenAIApi } from "openai";
import { ApiRequestModel } from "~/types";
import { createAxiosInstance } from "./axios";

const runtimeConfig = useRuntimeConfig();

// 创建OpenAI配置
function createOpenAIConfiguration(
  model: ApiRequestModel,
  headers: RequestHeaders
) {
  // 判断是否使用环境变量
  const useEnv = runtimeConfig.public.useEnv === "yes";

  // 根据环境变量或请求头获取API配置
  const apiKey = useEnv
    ? runtimeConfig.apiKey
    : aesCrypto({ message: headers["x-cipher-api-key"]!, type: "de" });

  // 返回配置对象
  return new Configuration({
    apiKey,
    basePath: "https://chat.mgod.top/v1",
  });
}

// 获取OpenAI API实例
export function getOpenAIApiInstance(
  model: ApiRequestModel,
  headers: RequestHeaders
) {
  const configuration = createOpenAIConfiguration(model, headers);
  const axiosInstance = createAxiosInstance();

  return new OpenAIApi(configuration, undefined, axiosInstance);
}
