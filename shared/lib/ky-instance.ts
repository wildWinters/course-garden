import ky from "ky";

export const kyInstance = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/",
  credentials: "include",
  retry: {
    limit: 3,
  },
  hooks: {
    beforeRequest: [],
    afterResponse: [],
  },
});
