import { createApp, serveStatic } from "https://deno.land/x/servest@v1.3.1/mod.ts";
const app = createApp();
// All requests will be processed and matched files in "public" directory
// are served automatically
// Otherwise, request will be passed to next handler
app.use(serveStatic("./dist"));
app.listen({ port: 4507 });

