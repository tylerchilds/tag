import { compress } from "https://deno.land/x/zip@v1.2.0/mod.ts";

await compress('./dist', './dist/tag.zip')
