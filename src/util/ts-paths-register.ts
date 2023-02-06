import * as tsConfigPaths from "tsconfig-paths";

// prettier-ignore
let runningInTsNode = false;
// prettier-ignore

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
if (process[Symbol.for("ts-node.register.instance")]) {
  runningInTsNode = true;
}
// prettier-ignore-start

const baseUrl = "./";
tsConfigPaths.register({
  baseUrl,
  paths: {
    "@app/*": [`./${runningInTsNode ? "src" : "dist"}/*`],
    "@test/*": ["./test/*"],
  },
});
