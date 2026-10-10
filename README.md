# ProfitLedger

A working offline tracker for jewelry purchases, sales, inventory, fees, and profit, with Kundeeeq branding and a burgundy / beige palette.

## Run immediately

Open `index.html` in a modern browser. All scripts, styles, and icons are bundled into the HTML. No installation, login, API key, or internet connection is needed.

`ProfitLedger_Offline.html` is also included for existing offline users. Replace your previous file at the same path and use the same browser to retain access to browser-local records. Export your CSV before moving, renaming, or replacing files.

## Upload to GitHub

Extract this ZIP and upload all extracted files and folders into your repository. Keep `index.html` in the repository root. The bundled page can be hosted with GitHub Pages without a build server.

Visitors each have their own browser-local records. Hosting the page does not enable cloud storage or synchronization. The ZIP contains code and synthetic examples only, never transactions saved on your device.

## Deploy to Vercel

Upload all extracted files and folders into the repository root, including
`src/`, `tests/`, `deploy.mjs`, and `vercel.json`. Do not upload the ZIP itself.
The ZIP contains files at its root without an extra parent directory.

The included configuration deploys the bundled `index.html` into `dist/`,
without installing dependencies or rebuilding source. Use the repository root
as Vercel Root Directory. Remove existing Build Command, Install Command, and
Output Directory overrides so `vercel.json` applies, then redeploy.

After source edits, run `npm install` and `npm run build` locally and commit
the regenerated `index.html`. Offline records do not automatically appear on
the hosted URL. Export CSV from the original app and import it on the new URL.

## Edit and rebuild

Install Node.js 24 or newer, then run:

```sh
npm install
npm run build
npm test
```

The build regenerates both bundled HTML files from `src/`. Commit the regenerated files when deploying without a build pipeline.

## Features

- Purchase, sale, and expense records in PKR
- FIFO cost matching with actual purchase fees
- Product contribution, net profit, and margin calculations
- Remaining stock and inventory valuation
- CSV preview, validation, import, and export
- Offline calculation-based assistant
- Browser-local persistence and stale-version checks
- Jewelry sample mode, separate from saved records

## Data and calculation notes

Money is stored in integer paisa. Purchase fees are allocated across purchased units. Unsold goods remain inventory until sold. Product contribution subtracts the cost of sold units and selling fees. Overall net profit also deducts recorded business expenses.

Purchases and sales are assumed fully paid. Returns, unpaid balances, tax, and multiple currencies are not included. The assistant uses deterministic calculations and is not a live AI model.

The current storage key remains `profit-ledger-offline-v1` for compatibility with the earlier tracker. Clearing browser data can erase records. Export CSV backups regularly.

## Source layout

- `src/dashboard.tsx`: interface and interaction
- `src/ledger.ts`: calculations, validations, CSV, and insights
- `src/local-api.ts`: local persistence
- `src/theme.css`: Kundeeeq colors and layout
- `build.mjs`: self-contained HTML bundler
- `tests/`: financial and persistence checks
