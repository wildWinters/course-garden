import ky from "ky";

const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  retry: {
    limit: 3,
  },
  hooks: {
    beforeRequest: [() => console.log("before url")],
    afterResponse: [() => console.log("after response")],
  },
});
