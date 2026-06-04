# testing-center-checkout

Cloudflare Worker that creates Stripe Checkout sessions for the **ustestingcenter.com** catalog (158 mirrored preparation tests) and processes the resulting webhook events.

**Live:** `https://testing-center-checkout.tp-730.workers.dev/`
**Deploy:** `wrangler deploy`

## What it does

| Route | Method | Purpose |
|---|---|---|
| `/checkout?test=<slug>` | GET | Looks up the Stripe Price for the test slug and 303-redirects to a freshly-minted Stripe Checkout session |
| `/webhook` | POST | Receives `checkout.session.completed` from Stripe; verifies signature; mints a `session_id` row in D1 (`testing-center-db`) |
| `/validate?session_id=...` | GET | Returns whether a session has been paid (used by the take-test flow) |
| `/retest?credential=...` | GET | Half-price retest flow for prior completers within 12 months |

## Bindings (see `wrangler.toml`)

| Binding | Resource | Purpose |
|---|---|---|
| `DB` | D1 database `testing-center-db` (`54587cfa-1da9-41a3-bc08-db76bad13609`) | Stores paid-session records, retest credentials |
| `CANCEL_URL` | `https://ustestingcenter.com/` | Stripe cancel destination |
| `SUCCESS_URL` | `https://ustestingcenter.com/take-test/?session_id={CHECKOUT_SESSION_ID}` | Stripe success destination |
| `CORS_ORIGIN` | `https://ustestingcenter.com` | CORS allow-list |

## Required Cloudflare Worker secrets (set via `wrangler secret put`)

| Secret | Used for |
|---|---|
| `STRIPE_SECRET_KEY` | Authenticates Stripe API calls when creating checkout sessions |
| `STRIPE_WEBHOOK_SECRET` | HMAC-verifies inbound `/webhook` payloads from Stripe |
| `MAILGUN_API_KEY` | Sends post-purchase emails via Mailgun |

These live only in Cloudflare's secret store. They are never written to source.

## Pricing model

The compiled `index.js` contains:

- **`PRICE_MAP`** — Stripe Price ID per test slug (60+ tests with explicit Stripe prices, mostly $49.99 for college-prep/AP, $99-$149 for graduate exams, $29 for shorter assessments)
- **`PRICE_CENTS`** — Fallback price-in-cents map for slugs without an explicit Stripe Price ID; the worker creates an ad-hoc one-time Price at runtime for these

Adding a new test type means adding a Stripe Price (preferred) or just a `PRICE_CENTS` entry, then redeploying.

## History

The pre-2026-06-04 deployed version had a 7-test allowlist (only IQ products). After the external audit on 2026-06-04, the worker was redeployed with the full 158-test PRICE_MAP. The `/checkout?test=sat`, `?test=mcat`, etc. paths now successfully create Stripe Live sessions.

## Operated by

Advanced Learning Academy LLC, Carmel, IN 46033 · team@advancedlearning.academy
