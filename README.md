# Mapbox Vue

This is a test project in which I am testing the mapbox library in conjunction with vue.

## Project Setup

### 1. Install the necessary dependencies

```bash
pnpm install
```

### 2. Create an access token in mapbox

[Mapbox Access Tokens](https://console.mapbox.com/account/access-tokens/)

### 3. Put the access token on the following line in the file `src\composables\useMap.ts`

```ts
mapboxgl.accessToken = "";
```

### 4. Run the project

```bash
pnpm dev
```

### If you want to change the map style (Optional)

[Mapbox styles](https://docs.mapbox.com/api/maps/styles/)