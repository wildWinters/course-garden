import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://<your-dsn>@sentry.io/<project-id>", // встав свій DSN
  tracesSampleRate: 1.0, // для performance monitoring
});
