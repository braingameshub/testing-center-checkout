var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/checkout.ts
// Stripe Price IDs for each test type
var PRICE_MAP = {
  // IQ Tests
  "qiq": "price_1TNbrWJ2OPfwlqFbIYHjYHe8",
  "quantum-iq": "price_1TNbreJ2OPfwlqFbeGw3v65Z",
  "financial-iq": "price_1TNbrlJ2OPfwlqFbKx9aqh97",
  "couples-iq": "price_1TNbrsJ2OPfwlqFbbdKfI6og",
  "stress-iq": "price_1TNbrzJ2OPfwlqFbVWZhMN6d",
  "qiq-careers": "price_1TNbs7J2OPfwlqFboq9If9L3",
  "bible-iq": "price_1TNbsEJ2OPfwlqFbh9uVmEzB",
  // College Prep
  "sat": "price_1TO34NJ2OPfwlqFbY7MN79sh",
  "act": "price_1TO34OJ2OPfwlqFbRNTzUjn0",
  "psat": "price_1TO34OJ2OPfwlqFbQto8KD9d",
  // AP Tests
  "ap-biology": "price_1TO34PJ2OPfwlqFbMuUuwFgW",
  "ap-calculus-ab": "price_1TO34QJ2OPfwlqFbjwNeeitj",
  "ap-calculus-bc": "price_1TO34QJ2OPfwlqFb5Hd1yjEa",
  "ap-chemistry": "price_1TO34RJ2OPfwlqFb6F8GYAAe",
  "ap-chinese": "price_1TO34RJ2OPfwlqFbDUga1kuz",
  "ap-chinese-language": "price_1TO34RJ2OPfwlqFbDUga1kuz",
  "ap-computer-science-a": "price_1TO34SJ2OPfwlqFbEjMQ3wDO",
  "ap-computer-science-principles": "price_1TO34TJ2OPfwlqFb19qDAoJD",
  "ap-english-language": "price_1TO34TJ2OPfwlqFbTolGMFXZ",
  "ap-english-literature": "price_1TO34UJ2OPfwlqFbjIzGngHy",
  "ap-environmental-science": "price_1TO34VJ2OPfwlqFbTX4bTC6v",
  "ap-european-history": "price_1TO34VJ2OPfwlqFbhkKxKlOl",
  "ap-french": "price_1TO34WJ2OPfwlqFbYadrgfDX",
  "ap-french-language": "price_1TO34WJ2OPfwlqFbYadrgfDX",
  "ap-german": "price_1TO34XJ2OPfwlqFbBUCSXVGy",
  "ap-german-language": "price_1TO34XJ2OPfwlqFbBUCSXVGy",
  "ap-government": "price_1TO34XJ2OPfwlqFb4FNuZvg5",
  "ap-comparative-government": "price_1TO34YJ2OPfwlqFbaJcPEjaO",
  "ap-human-geography": "price_1TO34ZJ2OPfwlqFbWUqBIOFu",
  "ap-italian": "price_1TO34ZJ2OPfwlqFbOxqq9KAe",
  "ap-italian-language": "price_1TO34ZJ2OPfwlqFbOxqq9KAe",
  "ap-japanese": "price_1TO34aJ2OPfwlqFbFMgETBhM",
  "ap-japanese-language": "price_1TO34aJ2OPfwlqFbFMgETBhM",
  "ap-latin": "price_1TO34aJ2OPfwlqFb4HhBVlxl",
  "ap-macroeconomics": "price_1TO34bJ2OPfwlqFbfF6tuN0n",
  "ap-microeconomics": "price_1TO34cJ2OPfwlqFb3gN7jmqt",
  "ap-music-theory": "price_1TO34cJ2OPfwlqFb2dcQDR9K",
  "ap-physics-1": "price_1TO34dJ2OPfwlqFbHykSSMMe",
  "ap-physics-2": "price_1TO34eJ2OPfwlqFb2s7tQKK7",
  "ap-physics-c-em": "price_1TO34eJ2OPfwlqFbTvJOBdAm",
  "ap-physics-c-mech": "price_1TO34fJ2OPfwlqFbLNlg5360",
  "ap-psychology": "price_1TO34fJ2OPfwlqFbj7Wd42sJ",
  "ap-research": "price_1TO34gJ2OPfwlqFbnnB62zIO",
  "ap-seminar": "price_1TO34gJ2OPfwlqFbNZpN5pQZ",
  "ap-spanish-language": "price_1TO34hJ2OPfwlqFb3MkNqDFG",
  "ap-spanish-literature": "price_1TO34iJ2OPfwlqFb1HKxGEM4",
  "ap-statistics": "price_1TO34iJ2OPfwlqFbW3y3PV1I",
  "ap-studio-art-2d": "price_1TO34jJ2OPfwlqFbsQCNrzS5",
  "ap-studio-art-3d": "price_1TO34jJ2OPfwlqFb5sR3AFHU",
  "ap-studio-art-drawing": "price_1TO34kJ2OPfwlqFbYCAVvpVh",
  "ap-us-history": "price_1TO34lJ2OPfwlqFbaU7bM5yT",
  "ap-world-history": "price_1TO34lJ2OPfwlqFbfnw8kLEC",
  "ap-african-american-studies": "price_1TO34mJ2OPfwlqFbaFzk7qvB",
  "ap-art-history": "price_1TO6OSJ2OPfwlqFbjyc3eeWz",
  "ap-precalculus": "price_1TO6OTJ2OPfwlqFbBbdyFNLy",
  // Graduate School
  "gre": "price_1TO34mJ2OPfwlqFbg4XI4E5j",
  "gmat": "price_1TO34nJ2OPfwlqFbOGQ9AXsB",
  "lsat": "price_1TO34oJ2OPfwlqFbrGZ5ZFAf",
  "mcat": "price_1TO34oJ2OPfwlqFb9X5aiss1",
  // Military & Government
  "asvab": "price_1TO3cNJ2OPfwlqFbIPeqAWWH",
  "civil-service": "price_1TO3cNJ2OPfwlqFb3pXrqxP3",
  "ged": "price_1TO3cOJ2OPfwlqFboO6zjWIP",
  // Language
  "toefl": "price_1TO64uJ2OPfwlqFboQhwYECJ",
  "ielts": "price_1TO64uJ2OPfwlqFbtVZVaLHI"
};

// Slug aliases — map alternate slugs used by marketing pages / question-bank
// filenames to the canonical slug that has a Stripe Price + a delivering
// question bank. Incoming ?test=<slug> is normalized through this before any
// lookup, so the buy-button slug, the checkout slug, and the test-runtime slug
// can never drift apart again. (Fixes the 2026-06 revenue-blocking 400s on the
// AP world-language and AP Computer Science buy buttons.)
//
// IMPORTANT — alias direction: the stored test_type MUST equal the slug the
// test-runtime (testing-center-api) keys its bundled question bank on. The only
// confirmed datapoint is that "ap-spanish-language" (long form, matching its
// ap-spanish-language.json bank file) delivers end-to-end — so AP world
// languages are served by their LONG slug. We therefore do NOT alias the AP
// language long forms to short; instead they are first-class entries in
// PRICE_MAP/PRICE_CENTS below so checkout accepts AND stores the long form.
//
// The aliases that remain map a marketing-page/buy-button slug to the canonical
// slug that already has a Stripe Price AND a matching bank. Computer Science
// buttons used a short "ap-cs-*" form while the bank/checkout use the full
// "ap-computer-science-*" form (= the ap-computer-science-*.json bank), so those
// normalize forward to the long canonical. The professional/physics entries are
// safety nets: their buy buttons and Stripe catalog already use the short slug
// (so any prior purchases stored short); mapping the long bank-filename form to
// that same short slug keeps every inbound variant resolving to one canonical.
var SLUG_ALIASES = {
  "ap-cs-a": "ap-computer-science-a",
  "ap-cs-principles": "ap-computer-science-principles",
  "ap-physics-c-mechanics": "ap-physics-c-mech",
  "aws-cloud-practitioner": "aws-cloud",
  "cpa-exam": "cpa",
  "nclex-rn": "nclex",
  "real-estate-license": "real-estate",
  // AP world languages are delivered by their LONG slug (the ap-*-language.json
  // bank, confirmed end-to-end for ap-spanish-language). The short marketing
  // slugs had no matching bank, so a purchase via the short slug stored a
  // test_type the runtime could not serve (pay-without-delivery). Alias the
  // short forms forward to the long canonical so every inbound variant resolves
  // to a deliverable bank. (Audit 2026-06-14.)
  "ap-chinese": "ap-chinese-language",
  "ap-french": "ap-french-language",
  "ap-german": "ap-german-language",
  "ap-italian": "ap-italian-language",
  "ap-japanese": "ap-japanese-language"
};
function canonicalSlug(slug) {
  return (slug && SLUG_ALIASES[slug]) || slug;
}
__name(canonicalSlug, "canonicalSlug");

// Full price map in cents for all tests (used for retests and new tests without Stripe price IDs yet)
var PRICE_CENTS = {
  // IQ Tests
  "qiq": 4999, "quantum-iq": 4999, "financial-iq": 4999, "couples-iq": 4999,
  "stress-iq": 4999, "qiq-careers": 4999, "bible-iq": 2900,
  // Consumer Psychology
  "eq-assessment": 4999, "career-aptitude": 6900, "personality-assessment": 4999,
  "memory-brain-age": 4999,
  // College Prep
  "sat": 9900, "act": 9900, "psat": 6900,
  // All AP tests at $49.99
  "ap-biology": 4999, "ap-calculus-ab": 4999, "ap-calculus-bc": 4999, "ap-chemistry": 4999,
  "ap-chinese": 4999, "ap-chinese-language": 4999,
  "ap-computer-science-a": 4999, "ap-computer-science-principles": 4999,
  "ap-english-language": 4999, "ap-english-literature": 4999, "ap-environmental-science": 4999,
  "ap-european-history": 4999, "ap-french": 4999, "ap-french-language": 4999,
  "ap-german": 4999, "ap-german-language": 4999, "ap-government": 4999,
  "ap-comparative-government": 4999, "ap-human-geography": 4999,
  "ap-italian": 4999, "ap-italian-language": 4999,
  "ap-japanese": 4999, "ap-japanese-language": 4999,
  "ap-latin": 4999, "ap-macroeconomics": 4999, "ap-microeconomics": 4999,
  "ap-music-theory": 4999, "ap-physics-1": 4999, "ap-physics-2": 4999,
  "ap-physics-c-em": 4999, "ap-physics-c-mech": 4999, "ap-psychology": 4999,
  "ap-research": 4999, "ap-seminar": 4999, "ap-spanish-language": 4999,
  "ap-spanish-literature": 4999, "ap-statistics": 4999, "ap-studio-art-2d": 4999,
  "ap-studio-art-3d": 4999, "ap-studio-art-drawing": 4999, "ap-us-history": 4999,
  "ap-world-history": 4999, "ap-african-american-studies": 4999, "ap-art-history": 4999,
  "ap-precalculus": 4999,
  // Graduate School
  "gre": 9900, "gmat": 9900, "lsat": 11900, "mcat": 14900,
  // Military & Government
  "asvab": 4999, "civil-service": 4999, "ged": 4999, "dmv-permit": 2900,
  "us-citizenship": 4999,
  // Language
  "toefl": 4999, "ielts": 4999,
  // Professional
  "comptia-a-plus": 9900, "nclex": 7900, "cpa": 9900, "series-7": 9900,
  "real-estate": 7900, "bar-exam-mbe": 19900, "pmp": 9900, "aws-cloud": 4900,
  "cissp": 9900, "fe-exam": 7900, "phr-shrm": 7900, "cma-medical": 7900,
  "ptce": 6900, "personal-trainer": 7900, "insurance-pc": 6900, "cdl-permit": 4900
};

// Human-readable test names for Stripe line items
var TEST_NAMES = {
  "qiq": "QIQ Test", "quantum-iq": "Quantum IQ Test", "financial-iq": "Financial IQ Test",
  "couples-iq": "Couples IQ Test", "stress-iq": "Stress IQ Test", "qiq-careers": "QIQ Career Test",
  "bible-iq": "Bible IQ Test", "eq-assessment": "EQ Assessment", "career-aptitude": "Career Aptitude Test",
  "personality-assessment": "Personality Assessment", "memory-brain-age": "Memory & Brain Age Test",
  "sat": "SAT Mirrored Preparation Test", "act": "ACT Mirrored Preparation Test", "psat": "PSAT Mirrored Preparation Test",
  "gre": "GRE Mirrored Preparation Test", "gmat": "GMAT Mirrored Preparation Test", "lsat": "LSAT Mirrored Preparation Test",
  "mcat": "MCAT Mirrored Preparation Test", "asvab": "ASVAB Mirrored Preparation Test", "civil-service": "Civil Service Exam",
  "ged": "GED Mirrored Preparation Test", "dmv-permit": "DMV Permit Mirrored Preparation Test",
  "us-citizenship": "US Citizenship Test",
  "toefl": "TOEFL Mirrored Preparation Test", "ielts": "IELTS Mirrored Preparation Test",
  "comptia-a-plus": "CompTIA A+ Mirrored Preparation Test", "nclex": "NCLEX-RN Mirrored Preparation Test",
  "cpa": "CPA Exam Mirrored Preparation Test", "series-7": "Series 7 Mirrored Preparation Test",
  "real-estate": "Real Estate License Mirrored Preparation Test", "bar-exam-mbe": "Bar Exam (MBE) Mirrored Preparation Test",
  "pmp": "PMP Mirrored Preparation Test", "aws-cloud": "AWS Cloud Practitioner Mirrored Preparation Test",
  "cissp": "CISSP Mirrored Preparation Test", "fe-exam": "FE Exam Mirrored Preparation Test",
  "phr-shrm": "PHR/SHRM-CP Mirrored Preparation Test", "cma-medical": "CMA Medical Assistant Mirrored Preparation Test",
  "ptce": "Pharmacy Tech (PTCE) Mirrored Preparation Test", "personal-trainer": "Personal Trainer Mirrored Preparation Test",
  "insurance-pc": "Insurance License (P&C) Mirrored Preparation Test", "cdl-permit": "CDL Permit Mirrored Preparation Test"
};

// Build test names for AP tests
Object.keys(PRICE_CENTS).forEach(function(k) {
  if (k.startsWith("ap-") && !TEST_NAMES[k]) {
    TEST_NAMES[k] = "AP " + k.replace("ap-", "").replace(/-/g, " ").replace(/\b\w/g, function(c) { return c.toUpperCase(); }) + " Mirrored Preparation Test";
  }
});

async function handleCheckout(request, env) {
  const url = new URL(request.url);
  const rawTestType = url.searchParams.get("test_type") || url.searchParams.get("test");
  const testType = canonicalSlug(rawTestType);
  const isRetest = url.searchParams.get("retest") === "true";
  const credentialId = url.searchParams.get("credential");

  // Validate test type exists in either PRICE_MAP or PRICE_CENTS
  if (!testType || (!PRICE_MAP[testType] && !PRICE_CENTS[testType])) {
    return new Response(JSON.stringify({
      error: "Invalid test_type",
      valid: Object.keys(PRICE_CENTS)
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Handle retest flow
  if (isRetest) {
    if (!credentialId) {
      return new Response(JSON.stringify({ error: "Missing credential ID for retest" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Validate credential ID against database
    try {
      const row = await env.DB.prepare(
        `SELECT session_id, display_id, test_type, status FROM sessions WHERE display_id = ? AND status = 'completed' LIMIT 1`
      ).bind(credentialId).first();

      if (!row) {
        return new Response(JSON.stringify({ error: "Invalid or incomplete credential ID. You must complete the original test before retesting." }), {
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }

      // Verify the credential matches the requested test type (compare canonical slugs)
      if (canonicalSlug(row.test_type) !== testType) {
        return new Response(JSON.stringify({ error: "Credential ID does not match the requested test type." }), {
          status: 403,
          headers: { "Content-Type": "application/json" }
        });
      }
    } catch (err) {
      console.error("DB error validating credential:", err);
      return new Response(JSON.stringify({ error: "Unable to validate credential" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Create retest checkout at exactly half price using price_data (dynamic pricing)
    const fullPriceCents = PRICE_CENTS[testType];
    if (!fullPriceCents) {
      return new Response(JSON.stringify({ error: "Price not configured for this test type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const retestPriceCents = Math.round(fullPriceCents / 2); // Exact half, no rounding issues since all prices are even cents or .99
    const testName = TEST_NAMES[testType] || testType;

    const params = new URLSearchParams();
    params.set("mode", "payment");
    params.set("payment_method_types[0]", "card");
    params.set("line_items[0][price_data][currency]", "usd");
    params.set("line_items[0][price_data][unit_amount]", String(retestPriceCents));
    params.set("line_items[0][price_data][product_data][name]", testName + " (Retest)");
    params.set("line_items[0][price_data][product_data][description]", "Half-price retest of " + testName);
    params.set("line_items[0][quantity]", "1");
    params.set("success_url", env.SUCCESS_URL);
    params.set("cancel_url", env.CANCEL_URL);
    params.set("metadata[test_type]", testType);
    params.set("metadata[is_retest]", "true");
    params.set("metadata[original_credential]", credentialId);

    const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });

    if (!stripeRes.ok) {
      const err = await stripeRes.text();
      console.error("Stripe retest error:", err);
      return new Response(JSON.stringify({ error: "Failed to create retest checkout session" }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    const session = await stripeRes.json();
    return Response.redirect(session.url, 303);
  }

  // Standard checkout flow
  // If test has a Stripe price ID, use it (existing behavior)
  if (PRICE_MAP[testType]) {
    const priceId = PRICE_MAP[testType];
    const params = new URLSearchParams();
    params.set("mode", "payment");
    params.set("payment_method_types[0]", "card");
    params.set("line_items[0][price]", priceId);
    params.set("line_items[0][quantity]", "1");
    params.set("success_url", env.SUCCESS_URL);
    params.set("cancel_url", env.CANCEL_URL);
    params.set("metadata[test_type]", testType);

    const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });

    if (!stripeRes.ok) {
      const err = await stripeRes.text();
      console.error("Stripe error:", err);
      return new Response(JSON.stringify({ error: "Failed to create checkout session" }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      });
    }

    const session = await stripeRes.json();
    return Response.redirect(session.url, 303);
  }

  // For new tests without Stripe price IDs, use dynamic price_data
  const priceCents = PRICE_CENTS[testType];
  const testName = TEST_NAMES[testType] || testType;

  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("payment_method_types[0]", "card");
  params.set("line_items[0][price_data][currency]", "usd");
  params.set("line_items[0][price_data][unit_amount]", String(priceCents));
  params.set("line_items[0][price_data][product_data][name]", testName);
  params.set("line_items[0][price_data][product_data][description]", "Authentic mirrored preparation test by US Testing Center - the ALA Mirror Method");
  params.set("line_items[0][quantity]", "1");
  params.set("success_url", env.SUCCESS_URL);
  params.set("cancel_url", env.CANCEL_URL);
  params.set("metadata[test_type]", testType);

  const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params.toString()
  });

  if (!stripeRes.ok) {
    const err = await stripeRes.text();
    console.error("Stripe error:", err);
    return new Response(JSON.stringify({ error: "Failed to create checkout session" }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }

  const session = await stripeRes.json();
  return Response.redirect(session.url, 303);
}
__name(handleCheckout, "handleCheckout");

// src/webhook.ts
var CHARSET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function generateDisplayId() {
  let id = "";
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  for (let i = 0; i < 6; i++) {
    id += CHARSET[bytes[i] % CHARSET.length];
  }
  return id;
}
__name(generateDisplayId, "generateDisplayId");
function generateSessionId() {
  const random = crypto.getRandomValues(new Uint8Array(8));
  const hex = Array.from(random).map((b) => b.toString(16).padStart(2, "0")).join("");
  return `tc_${Date.now().toString(36)}_${hex}`;
}
__name(generateSessionId, "generateSessionId");

// Idempotent provisioning. Given a paid Stripe Checkout Session object, return
// the existing DB row if one already exists for this stripe_session_id (so a
// webhook retry, or the success-page fallback racing the webhook, can never
// mint a second credential for one payment), otherwise insert and return a new
// row. This is the single source of truth used by BOTH the webhook and the
// /validate success-page fallback.
async function provisionSession(env, stripeSession) {
  const existing = await env.DB.prepare(
    `SELECT session_id, display_id, stripe_session_id, test_type, user_email, payment_verified, status, created_at, expires_at
     FROM sessions WHERE stripe_session_id = ? LIMIT 1`
  ).bind(stripeSession.id).first();
  if (existing) return { row: existing, created: false };

  const testType = canonicalSlug(stripeSession.metadata && stripeSession.metadata.test_type) || "unknown";
  // Stripe Checkout always collects the buyer's email; it lands in
  // customer_details.email. (The old code read session.customer_email, which is
  // only populated when pre-filled — so every purchase stored an empty email.)
  const email = (stripeSession.customer_details && stripeSession.customer_details.email)
    || stripeSession.customer_email
    || "";
  const sessionId = generateSessionId();
  const displayId = generateDisplayId();
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString();

  // The api worker serves/scores questions strictly off sessions.total_questions
  // (it never reads CONFIG), so it MUST be set here from the test config or the
  // buyer is served the schema default (50) instead of the test's real count.
  let totalQuestions = 50;
  try {
    const cfgStr = env.CONFIG ? await env.CONFIG.get(`test_config_${testType}`) : null;
    const n = cfgStr && JSON.parse(cfgStr).total_questions;
    if (Number.isInteger(n) && n > 0) totalQuestions = n;
  } catch (_) {
    // fall back to the schema default if config is missing/unparseable
  }

  try {
    await env.DB.prepare(
      `INSERT INTO sessions (session_id, display_id, stripe_session_id, test_type, user_email, payment_verified, total_questions, created_at, expires_at)
       VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?)`
    ).bind(sessionId, displayId, stripeSession.id, testType, email, totalQuestions, now, expiresAt).run();
  } catch (err) {
    // Lost the insert race against a concurrent webhook/validate — fall back to
    // whatever row won, so the caller still gets one consistent credential.
    const raced = await env.DB.prepare(
      `SELECT session_id, display_id, stripe_session_id, test_type, user_email, payment_verified, status, created_at, expires_at
       FROM sessions WHERE stripe_session_id = ? LIMIT 1`
    ).bind(stripeSession.id).first();
    if (raced) return { row: raced, created: false };
    throw err;
  }

  return {
    row: {
      session_id: sessionId,
      display_id: displayId,
      stripe_session_id: stripeSession.id,
      test_type: testType,
      user_email: email,
      payment_verified: 1,
      status: null,
      created_at: now,
      expires_at: expiresAt
    },
    created: true
  };
}
__name(provisionSession, "provisionSession");

async function verifyStripeSignature(payload, sigHeader, secret) {
  const parts = {};
  for (const item of sigHeader.split(",")) {
    const [key2, val] = item.split("=", 2);
    if (key2 && val) parts[key2] = val;
  }
  const timestamp = parts["t"];
  const signature = parts["v1"];
  if (!timestamp || !signature) return false;
  const signedPayload = `${timestamp}.${payload}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const mac = await crypto.subtle.sign("HMAC", key, encoder.encode(signedPayload));
  const expected = Array.from(new Uint8Array(mac)).map((b) => b.toString(16).padStart(2, "0")).join("");
  if (expected.length !== signature.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return mismatch === 0;
}
__name(verifyStripeSignature, "verifyStripeSignature");
async function handleWebhook(request, env) {
  const body = await request.text();
  const sigHeader = request.headers.get("stripe-signature");
  if (!sigHeader) {
    return new Response(JSON.stringify({ error: "Missing stripe-signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const valid = await verifyStripeSignature(body, sigHeader, env.STRIPE_WEBHOOK_SECRET);
  if (!valid) {
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }
  const event = JSON.parse(body);
  if (event.type !== "checkout.session.completed") {
    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const session = event.data.object;
  // Only provision once payment is actually captured.
  if (session.payment_status && session.payment_status !== "paid") {
    return new Response(JSON.stringify({ received: true, skipped: "unpaid" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const isRetest = session.metadata?.is_retest === "true";
  const originalCredential = session.metadata?.original_credential || "";

  try {
    const { row } = await provisionSession(env, session);
    return new Response(JSON.stringify({
      sessionId: row.session_id,
      displayId: row.display_id,
      isRetest,
      originalCredential
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Webhook provisioning error:", err);
    // Return 500 so Stripe retries; provisionSession is idempotent.
    return new Response(JSON.stringify({ error: "Provisioning failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
__name(handleWebhook, "handleWebhook");

// src/index.ts
function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.CORS_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}
__name(corsHeaders, "corsHeaders");

// Retrieve a Checkout Session straight from Stripe. Used by /validate as a
// fallback when the webhook-created row is not in D1 yet (Stripe redirects the
// buyer to the success page immediately, but the webhook is asynchronous and
// can lag by seconds — without this the buyer would see "Could not validate
// payment session" right after paying).
async function retrieveStripeSession(env, stripeSessionId) {
  const res = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(stripeSessionId)}`,
    { headers: { "Authorization": `Bearer ${env.STRIPE_SECRET_KEY}` } }
  );
  if (!res.ok) return null;
  return res.json();
}
__name(retrieveStripeSession, "retrieveStripeSession");

async function handleValidate(request, env) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session_id");
  if (!sessionId) {
    return new Response(JSON.stringify({ error: "Missing session_id parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders(env) }
    });
  }
  try {
    let row = await env.DB.prepare(
      `SELECT session_id, display_id, stripe_session_id, test_type, user_email, payment_verified, status, created_at, expires_at
       FROM sessions
       WHERE stripe_session_id = ? OR session_id = ?
       LIMIT 1`
    ).bind(sessionId, sessionId).first();

    // Race fallback: row not in D1 yet. If this is a real, paid Stripe Checkout
    // Session, provision it now (idempotent with the webhook) so the buyer is
    // never blocked on the success page by webhook latency.
    if (!row && sessionId.startsWith("cs_")) {
      const stripeSession = await retrieveStripeSession(env, sessionId);
      if (stripeSession && (stripeSession.payment_status === "paid" || stripeSession.status === "complete")) {
        const provisioned = await provisionSession(env, stripeSession);
        row = provisioned.row;
      } else if (stripeSession) {
        // Found at Stripe but not paid yet (e.g. async payment processing).
        return new Response(JSON.stringify({ error: "Payment not completed yet", payment_status: stripeSession.payment_status || stripeSession.status }), {
          status: 402,
          headers: { "Content-Type": "application/json", ...corsHeaders(env) }
        });
      }
    }

    if (!row) {
      return new Response(JSON.stringify({ error: "Session not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json", ...corsHeaders(env) }
      });
    }
    return new Response(JSON.stringify(row), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders(env) }
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("D1 query error:", message);
    return new Response(JSON.stringify({ error: "Database error", detail: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders(env) }
    });
  }
}
__name(handleValidate, "handleValidate");
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(env)
      });
    }
    try {
      if (path === "/checkout" && request.method === "GET") {
        return handleCheckout(request, env);
      }
      // /retest is documented as a route; route it through the same handler
      // (it reads ?retest=true&credential=...&test=...).
      if (path === "/retest" && request.method === "GET") {
        const u = new URL(request.url);
        u.searchParams.set("retest", "true");
        return handleCheckout(new Request(u.toString(), request), env);
      }
      if (path === "/webhook" && request.method === "POST") {
        return handleWebhook(request, env);
      }
      if (path === "/validate" && request.method === "GET") {
        return handleValidate(request, env);
      }
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json", ...corsHeaders(env) }
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders(env) }
      });
    }
  }
};
export {
  index_default as default
};
