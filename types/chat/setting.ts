export type ChatSettingType = "default" | "global" | "chat";

export type ApiType = "openai";

export type ColorMode = "system" | "light" | "dark";

export interface ChatSettingItem extends ChatSettingOption {
  id: number;
}

export interface ChatSettingOption extends ChatSetting {
  type: ChatSettingType;
}

export interface ChatSetting {
  apiType: ApiType;
  apiKey?: string;
  temperature: number;
  locale: string;
  colorMode: ColorMode;
}
