import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://<your-dsn>@sentry.io/<project-id>",
  tracesSampleRate: 1.0,
});
