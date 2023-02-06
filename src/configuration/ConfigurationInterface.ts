import { LogLevel } from "@app/logger/LoggerInterface";

export interface ConfigurationInterface {
  getLogLevel(): LogLevel;
}
