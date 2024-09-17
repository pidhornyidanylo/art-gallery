This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Developer tips:

page.tsx ('/') is designed to make requests to the server and map data to <EventGenericSection /> component, which is generic and will depend on server data type.
page.tsx ('/booking') is also designed to make requests to the server and generate static page from server response (for now as i didn't configure backend, data is hardcoded).
page.tsx ('/booking/${slug}') will recieve event data ({ start and end dates }, as hardcoded in [visit]/page.tsx) from the server or from the parent route. decide by yourself. does not metter.

Although, app is quite small, i decided to put here those tips to make life easier. Cheers!
