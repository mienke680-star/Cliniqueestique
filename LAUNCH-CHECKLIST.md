# Clinique Estique — Launch Checklist

This rebuild was completed using only what could be verified this session: the
three supplied PDFs, and the business facts given directly in the project
brief. The live website (`cliniqueestique.co.za`) returned 404 on every page
fetched, Instagram returned 429 (rate-limited), and Facebook required a login
— so none of those could be used as sources, despite being listed as
references. Nothing below was invented; it's flagged specifically because it
could **not** be verified and needs a human decision before launch.

## 1. Pricing — confirm currency

- [ ] **Clinique Estique treatment prices are dated 2024** in the supplied
      PDF (`Copy of CE PRICELIST.pdf`, titled "PRICE LIST 2024"). The site
      displays this date honestly and does not claim it's current. **Please
      confirm whether these prices are still valid**, or supply updated
      pricing.
- [ ] Me Si Bon prices are from `Me Si bon Pricelist nuwe 2026.pdf` — please
      confirm these are the current, correct prices.

## 2. Me Si Bon product name/spelling inconsistencies in the source PDF

These were preserved exactly as printed (not silently corrected) and are
flagged with `flagged: true` in `data/mesibon-products.ts`. Please confirm
which spelling is intentional:

- "Cardamom" printed as size "1oml" (likely 10ml)
- "Esther" (no size given — likely 10ml, to match the 30ml "Esther" variant)
- "Origano" (possibly intentional, or "Oregano")
- "Pitt Grain" (possibly "Petitgrain", a real essential oil name)
- "Roman Camomile" (possibly "Roman Chamomile")
- "Sentation All" (unclear — possibly "Sensational" or a named blend)
- "Simply Calaming" (possibly "Simply Calming")
- "Tumeric" (possibly "Turmeric")
- "Yara" (unclear — possibly a named blend, or "Ylang" typo)
- "Constipation Relief" appears twice, once as a 30ml "oil blend" (R380) and
  once again under "30ml Oils" (also R380) — likely the same product listed
  in two sections of the source PDF; kept as printed in both places.

## 3. Team roster

Names and roles (Yvette Botha, Lorraine, Christie, Hesri, Erin, Beauty) come
from the project brief's existing-site listing. **These could not be
cross-checked against a live Instagram or website this session** (both were
unreachable). Please confirm:

- [ ] All six people are still current staff
- [ ] Roles/specialities listed for each are accurate
- [ ] Whether "Beauty" is a placeholder name or an actual team member

## 4. Photography — none was available this session

No screenshots, logo files, or photos were actually attached to this
session (only the three PDFs came through), and Instagram/the website
could not be reached. Per your brief, **no stock photos, AI-generated
images, or fabricated staff/client photos were used** — instead, the site
uses an original abstract motion/illustration system in the brand palette
as a placeholder. Real photography is needed for:

- [ ] Hero background image or muted video (homepage)
- [ ] Team portraits (currently initials-in-a-circle placeholders)
- [ ] Treatment category imagery (facials, microneedling, IPL, PMU, nails,
      waxing, massage, Me Si Bon products)
- [ ] Before-and-after transformation photos (Results page is intentionally
      empty, with a note, rather than faked)
- [ ] Salon interior shots for About/homepage

## 5. Logo file — resolved

The owner supplied the real monogram as an image (`IMG_9271.jpeg`). It's
now used directly across the site (`public/brand/ce-monogram.png`) — the
only processing applied was cropping to the artwork's own edges and making
the background transparent; no pixel of the mark itself was redrawn or
recoloured. This replaced an earlier reconstructed placeholder.

- [ ] If a true vector export (SVG/EPS/AI) exists, it can replace the
      raster PNG for crisper scaling at very large sizes, but is not
      required — the current asset is the authentic mark.

## 6. Reviews & testimonials

No verified review text could be obtained (Google, Instagram, and the
website were all unreachable), so **no testimonial quotes or reviewer names
were invented**. The site shows only the one verified figure — 4.8 stars
from 83 reviews, from the Google Business screenshot you described — and
links out to the real Google reviews and Instagram instead of quoting
anything.

- [ ] If you'd like real testimonial quotes on-site, supply the verified
      text and reviewer first names/initials.
- [ ] Confirm the 4.8 / 83 review count is still current — it's stored as a
      static value in `data/business.ts` (`googleRating`), not a live feed.
      Wiring up the Google Places API is a separate, optional step if you
      want it to update automatically.

## 7. Beauty Journal content

The previous site's articles could not be migrated — every URL fetched
returned 404. The four Beauty Journal posts published are **original
general-guidance content** written for this rebuild (facial prep,
microneedling aftercare, IPL basics, essential oil safety), deliberately
avoiding medical claims. If the old site had specific articles worth
preserving for SEO, they'll need to be supplied directly.

## 8. Location & map

- [ ] The Google Map embed uses the plain street address, not a confirmed
      Google Place ID/pin. Please check the pin lands on the right building
      and swap in the exact Place embed if not.
- [ ] Parking/arrival guidance was not included since nothing was verified
      about it — let us know if there's anything specific to add.

## 9. Hosting & domain

This build is a fresh Next.js application, not yet deployed anywhere. To go
live on `www.cliniqueestique.co.za`, you'll need to choose a host (Vercel,
Netlify, etc.) and point DNS at it once you're ready to cut over from the
existing site.

---

## What was fully verified and used as-is

- Every treatment, add-on, and price in `Copy of CE PRICELIST.pdf` (2024) —
  see `data/ce-treatments.ts`.
- Every product, size, and price in `Me Si bon Pricelist nuwe 2026.pdf` —
  see `data/mesibon-products.ts`.
- Business name, address, phone, WhatsApp, email, hours, Instagram handle —
  all as given directly in the project brief (`data/business.ts`).
- Brand colours and typography from `Clinique_Estique_Guidelines.pdf`.
