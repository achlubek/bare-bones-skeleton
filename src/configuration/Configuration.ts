import { ConfigurationInterface } from "@app/configuration/ConfigurationInterface";
import { loadRequiredString } from "@app/configuration/envLoadingUtils";
import { LogLevel, availableLogLevels } from "@app/logger/LoggerInterface";

export class Configuration implements ConfigurationInterface {
  private readonly logLevel: LogLevel;

  public constructor() {
    const parsedLogLevel = loadRequiredString("LOG_LEVEL");
    if (!availableLogLevels.includes(parsedLogLevel)) {
      throw new Error(`"LOG_LEVEL" env var is not a valid log level`);
    }
    this.logLevel = parsedLogLevel;
  }

  public getLogLevel(): LogLevel {
    return this.logLevel;
  }
}
