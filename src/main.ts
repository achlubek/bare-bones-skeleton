// eslint-disable-next-line
import "./util/ts-paths-register";

import { Configuration } from "@app/configuration/Configuration";
import { ConfigurationInterface } from "@app/configuration/ConfigurationInterface";
import { Logger } from "@app/logger/Logger";

const configuration: ConfigurationInterface = new Configuration();

const logger = new Logger(configuration.getLogLevel());

logger.info("main", "Hello world");
