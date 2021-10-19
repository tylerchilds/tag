import {
  copySync,
} from "https://deno.land/std@0.96.0/fs/mod.ts"

copySync("./src", "./dist", { overwrite: true })
