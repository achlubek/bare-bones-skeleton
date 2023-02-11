import { Configuration } from "@app/infrastructure/configuration/Configuration";
import { ConfigurationInterface } from "@app/infrastructure/configuration/ConfigurationInterface";
import { Logger } from "@app/infrastructure/logger/Logger";

const configuration: ConfigurationInterface = new Configuration();
const logger = new Logger(configuration.getLogLevel());

logger.info("main", "Hello world");
