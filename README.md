# jsonrpc-cli

`jsonrpc-cli` lets you quickly call JSON-RPC services from the command line. It uses `json5` syntax to provide args, which gives you nice quality of life improvements like unquoted object keys.

Example usage:

```
$ npx jsonrpc-cli --url https://rpc.mainnet.near.org --method network_info --arg {} --pretty
```
