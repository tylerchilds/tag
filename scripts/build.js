import { exec } from "https://deno.land/x/exec/mod.ts";
await exec('zip -r dist/tag.zip dist');
