const nsat = {
  name: 'Intervia NSAT',
  category: 'Settlement services · Voice AI',
  year: '2026',
  headline: 'Helping newcomers move from telling their story to',
  highlight: 'knowing their next step',
  summary: 'Product design across newcomer intake, assessment, worker review, and settlement planning. As Product Engineer, I shaped the journeys, designed the interfaces, and connected them to the working platform.',
  hero: '/images/case-studies/nsat/landing.jpg',
  heroAlt: 'NSAT newcomer entry experience with clear paths to start intake or speak with a settlement counsellor',
  heroCaption: 'Newcomer entry experience captured from the running application locally.',
  scope: [
    { value: '3', label: 'Connected platform surfaces' },
    { value: '3 modes', label: 'Manual, assisted, and voice' },
    { value: 'Product Engineer', label: 'My role' },
  ],
  sections: [
    {
      id: 'context', label: 'The Context', title: 'The assessment belongs to a larger service journey',
      body: [
        'Intervia NSAT supports Canadian newcomer settlement services using the National Standardized Assessment Template. The platform connects intake, booking, assessment, worker review, and personalized settlement planning.',
        'The experience has to work for someone entering the service, a settlement worker managing casework, and an administrator supporting an organization. I worked across all three surfaces as Product Engineer, with responsibility for UX, flows, interface design, and implementation.',
      ],
    },
    {
      id: 'ownership', label: 'My Role', title: 'Shaping the service experience and carrying it into the product',
      body: ['I built the initial newcomer, worker, and administration surfaces and developed them through feedback-driven iterations. My work connected the product structure to the details people encounter: language choice, consent, booking, assessment entry, next steps, and the plan they return to.'],
      items: [
        { title: 'Research and synthesis', text: 'Worked from client reviews, domain requirements, workflow analysis, and UX audits to identify gaps in the service journey.' },
        { title: 'Experience and interface design', text: 'Designed onboarding, assessment hand-offs, portal information architecture, casework navigation, and settlement-plan presentation.' },
        { title: 'Implementation and iteration', text: 'Connected interfaces to real APIs and refined behaviour, responsive layouts, validation, and role-specific states.' },
      ],
    },
    {
      id: 'discovery', label: 'Research & Discovery', title: 'Understanding the work around the assessment',
      body: [
        'I used client and stakeholder reviews, the assessment requirements, and journey walkthroughs to understand how the service needed to work. The feedback made the hand-offs especially important: who accepts a newcomer, who owns the case, what the client sees, and how the next step becomes available.',
        'One review clarified that a routed intake is an offer to a worker, rather than an automatic assignment. That distinction changes the queue, the actions on a client record, the meaning of My Clients, and the counsellor shown to the newcomer.',
        'Other iterations simplified the landing and intake experience, carried existing information forward, clarified consent, and separated the portal overview from assessment details. I also audited navigation and responsive behaviour as the number of features grew.',
      ],
      items: [
        { title: 'Newcomer', text: 'Design around language preference, a clear explanation of what happens next, and a way to reach a person when needed.' },
        { title: 'Settlement worker', text: 'Keep intake, active assessments, reviews, and follow-ups connected while making ownership and next actions clear.' },
        { title: 'Organization administrator', text: 'Support onboarding, role-based access, service information, and oversight without placing configuration in the middle of daily casework.' },
      ],
    },
    {
      id: 'framing', label: 'The Core Challenge', title: 'Keep the journey understandable across people, modes, and hand-offs',
      body: [
        'The platform supports manual assessment, a worker-led conversation with AI assistance, and an AI-conducted voice assessment. Each mode changes how information is captured, while the newcomer still needs a clear route through the service.',
        'I designed around continuity: carry information forward, explain the current state, and make the next action visible. Worker review remains a distinct step before an AI-drafted plan is delivered to the client.',
      ],
      comparisons: [
        { before: 'An overview repeating assessment information', after: 'A portal home for notifications, appointments, and next steps, with separate assessment and plan destinations' },
        { before: 'Several assessment entry points competing in navigation', after: 'One New NSAT flow with mode selection inside the journey' },
        { before: 'Casework, configuration, and compliance sharing one navigation group', after: 'Separate Assessments, Casework, Oversight, and Reporting & Directory groups; configuration under Settings' },
      ],
    },
    {
      id: 'journeys', label: 'User Journeys', title: 'Designing the transitions as carefully as the screens',
      journeys: [
        { name: 'Entering the service', need: 'Help a newcomer understand the service and begin in a language they are comfortable using.', steps: ['Choose a language', 'Verify identity', 'Complete intake', 'Choose the support path', 'Reach the next step'], note: 'The entry experience offers both intake and access to a settlement counsellor. Language is chosen before the rest of intake.' },
        { name: 'Assessment and review', need: 'Make mode choice, consent, session progress, and worker responsibility clear.', steps: ['Choose the assessment mode', 'Review consent', 'Prepare for the session', 'Complete or resume assessment', 'Worker reviews the draft'], note: 'The design keeps AI capture, assessment progress, and worker-approved information as distinct states.' },
        { name: 'From assessment to support', need: 'Give the newcomer and worker a shared route from assessment information to practical next steps.', steps: ['Review assessed needs', 'Draft the settlement plan', 'Worker edits and approves', 'Client views or downloads it', 'Follow up and refer'], note: 'The settlement plan has its own home in the portal, with domain-based content and a follow-up schedule.' },
      ],
    },
    {
      id: 'entry', label: 'Design Decision 01', title: 'Start with language and a clear choice of support',
      body: [
        'I designed the entry experience around two understandable actions: start the intake or speak with a settlement counsellor. Inside intake, language choice comes first so the person can understand the rest of the journey.',
        'I refined the intake fields, return paths, and validation as the flow developed. One mobile issue left users unsure why Continue had not advanced; scrolling to the first invalid field made the reason visible. The design work included these recovery states alongside the main path.',
      ],
      image: '/images/case-studies/nsat/intake-language.jpg',
      imageAlt: 'NSAT intake language selection with English, French, Spanish, and Punjabi choices',
      caption: 'Language choice at the beginning of intake. Captured from the running application.',
    },
    {
      id: 'assessment', label: 'Design Decision 02', title: 'Make assessment a guided transition',
      body: [
        'I worked on the assessment-room interface with a voice orb, captions, and a section rail, as well as the preparation and hand-off around the session. Device checks, start and resume states, and a clear return to the portal help connect the conversation to the rest of the service.',
        'I also worked on consent across assessment entry points and on recording confirmation for on-site sessions. These interactions need to explain what is about to happen before someone enters a capture mode.',
      ],
    },
    {
      id: 'casework', label: 'Design Decision 03', title: 'Organize the workspace around the worker’s responsibilities',
      body: [
        'As the product grew, a single assessment category became overloaded with casework, follow-ups, and administration. I regrouped the navigation into Assessments, Casework, Oversight, and Reporting & Directory.',
        'I consolidated assessment modes into a New NSAT flow, moved account utilities into the header, and placed organization configuration and audit access behind Settings. This lets each navigation group describe the work inside it.',
        'Client feedback also informed the distinction between intake offers and accepted caseloads. The experience needed to show ownership explicitly instead of presenting every organization client as My Clients.',
      ],
      image: '/images/case-studies/nsat/service-directory-prototype.jpg',
      imageAlt: 'NSAT worker service-directory prototype with navigation grouped by assessments, casework, oversight, and reporting',
      caption: 'Interactive design prototype rendered from the repository. The sample programs, contacts, and counts are illustrative.',
    },
    {
      id: 'plan', label: 'Design Decision 04', title: 'Give the settlement plan a useful life after the session',
      body: [
        'I developed the client-facing settlement-plan experience as a status-driven document, organized by settlement domain and paired with a follow-up schedule. Client information and a branded PDF make it available beyond the portal.',
        'The portal Overview became a separate destination for notifications and next steps. A client can return for an appointment or plan without having to navigate through assessment details each time.',
        'The platform separates AI-drafted plan content from worker-approved content. That distinction matters to the experience: the draft is work for the counsellor to review before it becomes the client’s plan.',
      ],
      image: '/images/case-studies/nsat/settlement-plan-preview.jpg',
      imageAlt: 'NSAT settlement-plan review with priority needs, strengths, goals, and next actions',
      caption: 'The application’s settlement-plan review component, rendered with illustrative content in an isolated design preview.',
    },
    {
      id: 'referrals', label: 'Designing Beyond Assessment', title: 'The service information has to support the next decision',
      body: [
        'The service-directory designs connect a program to the details a worker needs before making a referral: language, location, eligibility, access, availability, and the receiving contact.',
        'The detail view keeps that context together and makes the review step explicit before a referral is sent. It is a continuation of the same product principle: help the person understand the next action and the information it depends on.',
      ],
      image: '/images/case-studies/nsat/referral-detail-prototype.jpg',
      imageAlt: 'NSAT service-details drawer showing access, eligibility, languages, contact, and referral context',
      caption: 'Repository design prototype with illustrative service information. Shown as a design artefact, rather than a claim of a completed referral integration.',
    },
    {
      id: 'iteration', label: 'Iteration & Trade-offs', title: 'Support different needs without losing the shared journey',
      items: [
        { title: 'Different assessment modes', text: 'Manual, assisted, and voice paths need their own explanations and consent while sharing understandable progress and review states.' },
        { title: 'Useful automation with worker review', text: 'Drafting can help the workflow, but review and approval need a visible place in the service.' },
        { title: 'Feature depth with readable navigation', text: 'Grouping casework and moving configuration into Settings keeps the growing product navigable.' },
        { title: 'Desktop casework with mobile entry', text: 'I refined tables, pagination, layouts, and mobile navigation so the experience could adapt across screen sizes.' },
      ],
    },
    {
      id: 'outcome', label: 'The Outcome', title: 'Connected entry, assessment, and planning experiences',
      body: [
        'My work established and refined the newcomer, worker, and administration surfaces. It connected intake and booking to the assessment journey, client records, settlement-plan presentation, and follow-up information.',
        'The iterations addressed specific workflow problems: repeated intake, unclear next steps, overloaded navigation, misleading hardcoded states, and mobile validation that gave too little feedback. I designed those changes and carried them into the application.',
      ],
    },
    {
      id: 'reflection', label: 'What I Took Away', title: 'The hand-off is part of the product',
      body: ['This project reinforced how much of a service experience sits between its main tasks. Choosing a language, understanding consent, meeting a worker, returning to a plan, and knowing who acts next all deserve deliberate design. Working as Product Engineer let me carry that thinking through the interface and into the behaviour underneath it.'],
    },
  ],
  related: { name: 'Polliplus: connecting evidence and field operations', path: '/polliplus-case-study' },
};

export default nsat;
