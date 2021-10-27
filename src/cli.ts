#!/usr/bin/env node
import { parseArgs } from "zod-args";
import { z } from "zod";
import json5 from "json5";
import { createZodJsonRpcClient } from "zod-json-rpc/lib/client";

async function main() {
  const { url, method, arg, pretty } = parseArgs({
    url: z.string(),
    method: z.string(),
    arg: z.string(),
    pretty: z.boolean(),
  });

  const parsedArg = json5.parse(arg);
  const request = createZodJsonRpcClient<any>(url);
  const response = await request(method, parsedArg);
  if (pretty) {
    console.log(JSON.stringify(response, undefined, 2));
  } else {
    console.log(JSON.stringify(response));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
