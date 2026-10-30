# Portfolio case studies editorial review

These notes support the portfolio case studies and are not displayed on the site.

## Confirmed direction

The user identifies their role as **Product Engineer**, with ownership of UX, flows, user journeys, research and product thinking as well as code. Both stories therefore lead with product design. The user approved reasonable assumptions for later review. Product-interface screenshots were requested, not code screenshots.

The Stimulir contract has ended. Its portfolio date range now ends in 2026; the precise month is still unconfirmed. Individual project dates are shown only as 2026, supported by the repository histories.

## Research and assumptions to review

- Polliplus discovery is grounded in `tasks/user-journeys.md`, `tasks/ux-audit-and-journeys.md`, and `tasks/ux-discovery-questions.md`. The named personas in the journey document are composites, not identified interview participants. Do not turn them into participant quotes or research counts.
- The Polliplus audit describes an earlier product state. Its findings are framed as early discovery, not as a current defect report. The case does not claim the lost-report recovery or analyst-role issues were fixed by this portfolio work.
- NSAT discovery is grounded in documented client reviews, particularly `docs/BACKEND_SPEC_pasima_feedback.md`, the August client-feedback commits, `tasks/worker-sidebar-ia-audit.md`, and `tasks/ux-audit-responsive.md`.
- The user confirmed additional research took place but has not supplied participant details, methods, session dates, raw interview notes, or test results. Current copy intentionally uses the documented methods without invented quotes or counts. Add specific interview findings when available.
- User goals such as proof of report delivery, confidence about next steps, low attention in the field, and reduced navigation burden are product hypotheses synthesized from the journeys and workflow constraints. They are not presented as statistically established research findings.
- Journey lists are concise reconstructions of the implemented flows. They simplify branches and should be reviewed against the user's preferred project scope.
- Ownership statements combine the user's explicit confirmation with commits authored by Abdul-Rashid Lansah Adam. They describe contributions to team products, not sole authorship of every backend or AI feature.
- No adoption, conversion, completion-rate, time-saving, cost-saving, language-coverage, or revenue result has been invented. Outcome sections describe capabilities and design changes.
- CRM, iCARE, referrals and AI/privacy documentation contain planned work and known limitations. The cases do not claim full regulatory compliance, complete downstream integrations, or comprehensive privacy guarantees.
- The NSAT settlement-plan image renders the worker review component. The prose separately describes the client plan experience; the caption does not present the worker component as a client-portal screenshot.

## Claim sources

### Polliplus

Source root: `/Users/lansah/Documents/GitHub/polliplus/`.

| Claim | Evidence |
| --- | --- |
| Discovery, journeys, role/access and offline feedback problems | `tasks/ux-audit-and-journeys.md`, `tasks/user-journeys.md`, `tasks/ux-discovery-questions.md` |
| Silence reflects reporting activity, includes enrolled people with no report | `polliplus-frontend/apps/warroom/src/app/war/silence/page.tsx`; authored commit `2588b42` |
| Directives and individual acknowledgements; channel delivery distinctions | `polliplus-frontend/apps/warroom/src/app/war/directives/directives-console.tsx`; commits `c6cd5d4`, `7d1b67e` |
| Geography hierarchy, map fitting and trajectory labels | Frontend commits `2c28fbf`, `316e343`, `61538cd` |
| Workspace daily report and settings | Frontend commit `e2c6403` |
| Programme setup, terms and guided connections | Frontend commits `ee70c08`, `f17ec33`, `9095ef2` |
| Responsive navigation and readability | Frontend commits `d5fa36c`, `ce82cf9` |
| Release tooling | Parent commit `70cc9ed`; infra commit `7131733`; release directories are worktrees of the same project |

### NSAT

Source root: `/Users/lansah/Documents/nsat/`.

| Claim | Evidence |
| --- | --- |
| Initial client, worker and console surfaces | Authored commits `7e51abc8`, `747d936c`, `e45214ee` |
| Client feedback and simplified intake | `659b2d88`, `5252de37`; client-review specification |
| Consent and assessment entry | `e95dc35c`, `dbbfbf3d`, `92c2e3c5`, `21ca4641` |
| Password-free client access | `701ab210`, `1734834f` |
| Assessment hand-off | `aadc1eea`, `3a896bea` |
| Overview, calendar, plan and PDF | `10f84816`, `4361a939`, `0943dbbc`, `a340f7b1`, `c591a9fd`, `6ad32eb6` |
| Navigation consolidation | `5c074353`, `bafa471f`, `tasks/worker-sidebar-ia-audit.md` |
| Mobile validation and responsive work | `75b7d1db`, `64d5b6f4`, `tasks/ux-audit-responsive.md` |
| Worker-approved plan boundary | `backend/api/plans.py`; `frontend/src/components/client/SettlementPlanTab.tsx` |

## Screenshot provenance

Captured on 29 October 2026. All files are product UI images, not source-code images. Images live under `public/images/case-studies/`.

| File | Surface and data |
| --- | --- |
| `polliplus/silence-board.jpg` | Original war-room app, `/war/silence`, local preview against a temporary read-only fixture BFF. All officers, counts, activity and DEMO geography codes are illustrative. |
| `polliplus/directives.jpg` | Original war-room app, `/war/directives`, same isolated fixture server. Tasks and acknowledgements are illustrative; nothing was sent. |
| `polliplus/workspace-setup.jpg` | Original platform console, `/console/workspaces/provision`, blueprint choice. Local draft only; no workspace created or deployed. |
| `nsat/landing.jpg` | Original Next.js app, `/`, local frontend without production backend access. |
| `nsat/intake-language.jpg` | Original app, `/start`, first step. No identity information entered and no verification email requested. |
| `nsat/service-directory-prototype.jpg` | HTML prototype `docs/NSAT_DNS_Portal_Screens_2026-10-18/screens/02-worker-service-directory.html`, rendered locally. Sample data is labelled in the prototype and case caption. |
| `nsat/referral-detail-prototype.jpg` | Same HTML prototype with the service-details drawer open. No referral submitted. |
| `nsat/settlement-plan-preview.jpg` | Exact `PlanPreview` application component, rendered in an isolated temporary copy of the frontend with illustrative plan data. Product source was not modified. The preview wrapper identifies its status. |

The temporary fixture server and component preview were stored under `/tmp/portfolio-case-capture/`, outside the product repositories. Normal auth, permissions and production configuration remain unchanged. Captions distinguish running screens from prototypes and component previews.

## Verification

`npm run build` completed successfully, including prerendering both new routes. Verified the homepage and Work entry links, one rendered case heading per page, unique section IDs, valid section anchors, referenced image files, and SEO routes. Browser review covered the new Work cards and both case studies at desktop and 375-pixel mobile widths; no horizontal overflow was present on either mobile page. Eight product-interface captures were inspected. Build output reported existing browser-support dataset age notices; compilation and prerendering passed.

## Stimulir follow-up

The user requested expansion of the Stimulir console, website and UX-flow work. The previous placeholder case was replaced with a Product Engineer story using the same case-study presentation as Polliplus and NSAT. It covers research framing, three journey maps, task verification, context/replay, setup, website design, and developer experience. Home and Work cards and SEO metadata now describe that scope. The stale coming-soon badge was removed.

Sources inspected in temporary clones:

- `RashidLansah/stimulir-console`, snapshot `1c37304`: `docs/UX_DESIGN.md`, `frontend/desktop/src/pages/TaskFeed.tsx`, `components/tasks/TaskCard.tsx`, `components/tasks/SwipeArea.tsx`, `components/replay/SessionReplayViewer.tsx`, `lib/onboarding.ts`, `components/context-studio/SetupFlowCards.tsx`, and the project README.
- `RashidLansah/stimulir-site-preview`, snapshot `fd50f54`: assembled website, docs, explanatory interface illustrations and authored change history. Commit `9aaa87b` aligns the product explanation to Evaluate, percentage scores, Apply and SDK-first setup. Other authored commits cover docs links, founder contact and the assembled website.
- `stimulir/stimulir-landing`, snapshot `c666287`: earlier landing implementation and authored commits for early-access form focus and success states, native-scroll product explanations, content and SEO.

Version distinction: the available console snapshot is from May 2026; the later site preview is from October 2026. The case explicitly separates the earlier verification experience from the later public explanation. It does not pretend these are one simultaneously captured release. The newer `stimulir/Stimulir` repository mentioned in the preview history was not accessible to the connected CLI; the public-preview snapshot provides its assembled site and design visuals. No claims of current live availability are made.

Research language uses workflow analysis, the UX specification, and authored feedback iterations. No interviews, participant counts, quotes, time savings or conversion results were invented. Ownership is grounded in the user's confirmed scope and repository evidence; product reasoning is editorial synthesis for user review.

New product visuals:

| File under `public/images/case-studies/stimulir/` | Provenance |
| --- | --- |
| `console-traces.png` | Exact `assets/app-traces.png` visual from the later website preview. Illustrative product screenshot, not a live-console capture or measured project results. It was visually inspected before reuse. |
| `verification.jpg` | Original console `TaskCard` components rendered locally with generic fictional records in a temporary capture entry point. The normally closed LiveSessionModal was replaced with a null component only in the isolated capture harness to avoid importing authentication services; the task-card presentation is unchanged. No auth or production configuration was changed. |
| `website.jpg` | Website hero captured from the locally served later preview. |
| `evaluation-walkthrough.jpg` | Website Evaluate section captured locally, showing the original illustrative interface states. |

The unrelated `hero-app.png` asset in the website repository depicts Linear and was not used as Stimulir work. No source-code screenshots were included. Website forms, sign-up, approvals, outbound messages and evaluation actions were not submitted during capture.

Stimulir verification: the final `npm run build` exited successfully and prerendered all 21 configured routes. Static checks verified all three new/expanded cases, local assets, anchors and entry links. The Stimulir case was reviewed at desktop and 375-pixel mobile widths with no horizontal overflow. The prerenderer was made independent of external font, telemetry and weather availability during HTML serialization; it waits for the local React content and correct page title. Original external script and stylesheet references are retained in generated HTML, and normal visitor behaviour is unchanged.

## ACA follow-up

The user requested the ACA project as another case study. It is identified from the repository UI as InterviaIQ AI Competency Assessment, shown in the portfolio as Intervia ACA. Attribution remains Product Engineer, with a 2026 date supported by the authored history.

Source: temporary clone of `stimulir/aca`, snapshot `70bd376`, inspected with 70 commits of history. The README describes the voice-interview architecture; the frontend and newer authored history provide the individual and organisation product journeys.

| Claim | Source |
| --- | --- |
| Individual entry, assessment tiers and context | `frontend/src/app/solo/start/page.tsx`, `lib/assessment-flow.ts`, `lib/org-context.ts`; authored onboarding fixes `c078aa7`, `421386c`, `4c98b93` |
| Role-aware organisation member entry | Authored commits `d2abf03`, `c607afb`, `a537aa7`, `f0e5f72`, `e58272a`; `lib/org-invite-flow.ts` |
| Organisation setup and configuration preservation | `frontend/src/app/org/setup/page.tsx`, `lib/org-setup-config.ts`; authored `b8d8764`, `0adbfb8`, `c459e2c`, `b6650ce` |
| Simplified invitation roles and steps | Authored `e9793c6`, `3bcb564`, `6bfb8b2` |
| Results, reporting, certificates, exports and navigation | `frontend/src/app/sessions/result/client.tsx`, `lib/org-report.ts`; authored `9081810`, `d6db694`, `bb28b91`, `474498c`, `ceb49f4`, `985d362`, `1afe66c`, `9f575aa` |
| Completion versus abandonment | `lib/assessment-exit.ts`, `app/assess/page.tsx`; authored `40b893a`, `a548e3f` |
| Mobile boundary and responsive reports | Authored `57d05d0`; `app/solo/start/page.tsx` MobileBlock |
| Occupation context in question retrieval | Authored `e1b4de9`, `8f60e02` |
| Session preparation and lifecycle | `docs/user_session_flow.md`, `app/solo/setup/page.tsx`, interview components |

Research is framed as workflow analysis, journey tracing and documented feedback iterations. The repository does not provide interview transcripts, participant counts or measured usability results; none were invented. The product framing and user needs are editorial synthesis for review, consistent with the user's earlier permission to make reasonable assumptions. The website testimonial file explicitly marks its quotes as placeholders: none were used as customer evidence. No claims of accreditation, cheat prevention, assessment validity, fairness, adoption or business impact were inferred. The source history includes removal of a blockchain credential claim; that claim is not repeated.

Five product-interface captures are stored under `public/images/case-studies/aca/`:

- `landing.jpg`: public entry with demonstration assessment graphics; placeholder testimonial sections are outside the capture.
- `assessment-selection.jpg`: self-serve tier-selection UI. Visible prices and durations belong to the inspected snapshot, not a current-price recommendation.
- `organisation-setup.jpg`: the initial five-step setup UI before creating an organisation.
- `assessment-configuration.jpg`: step two, reached by entering only a generic organisation name and choosing Education locally. Platform defaults are illustrative. No launch or invite submission occurred.
- `results.jpg`: original report screen populated through a temporary read-only localhost fixture endpoint. Every score, feedback sentence, date and credential identifier is fictional, with the assessment named Illustrative AI competency assessment.

Capture adaptations were confined to the temporary clone. Its CSS import resolver rejected package-export-only LiveKit style imports, so the same installed CSS files were imported by direct local paths. External next/font Google fetches timed out, so the capture layout uses local Arial/Georgia/monospace fallbacks with the original CSS-variable names. Layout, colour, component code, and flow behaviour were retained. These are local product previews with fallback typography, not pixel-identical production captures. No pre-existing user repository, remote repository or production authentication was changed. No microphone, camera, screen-sharing, live assessment, external certificate service, invite email, or result-sharing action was activated.

ACA verification: final `npm run build` passed and prerendered all 22 configured routes. Verified the four new/expanded cases, ACA home and Work entry links, one case heading per page, unique anchors, referenced local image files and unique SEO routes. Browser review confirmed three journey maps, valid section links, and no horizontal overflow at 375-pixel mobile width.

## ACA card artwork refinement

Replaced the full-page report thumbnail on Home and Work with `aca/card-preview.svg`, a simplified vector product composition based on the report UI and its same illustrative values. It is an editorial card preview, not a production screenshot. The original screenshots inside the case study remain unchanged. The compact frame, larger score, restrained type hierarchy and competency bars are intended to read at card size; the artwork includes a Sample Report label. Final build and prerender passed. Verified both card entry points reference the new asset and the case still references the original report screenshot.
