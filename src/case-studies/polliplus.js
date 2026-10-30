const polliplus = {
  name: 'Polliplus',
  category: 'Intelligence platform',
  year: '2026',
  headline: 'Helping teams understand what is happening,',
  highlight: 'place by place',
  summary: 'Research, user journeys, and product design across a field-reporting app, an intelligence workspace, and a platform console. I carried the experience through to implementation as Product Engineer.',
  hero: '/images/case-studies/polliplus/silence-board.jpg',
  heroAlt: 'Polliplus Silence Board showing reporting coverage, last contact, and individual officer status',
  heroCaption: 'Running product UI in a local preview. Officer IDs, geography codes, counts, and reporting activity are illustrative.',
  scope: [
    { value: '3', label: 'Connected product surfaces' },
    { value: 'End to end', label: 'Discovery through delivery' },
    { value: 'Product Engineer', label: 'My role' },
  ],
  sections: [
    {
      id: 'context', label: 'The Context', title: 'Local reports need to become a shared understanding',
      body: [
        'Polliplus brings field reports, public conversations, and local news into a shared intelligence workspace for teams operating across Nigerian communities. Information is organized geographically, down to the ward and polling unit.',
        'The experience spans people with very different jobs. An officer needs to report from a phone. A coordinator needs to understand what has changed and follow up. An administrator needs to configure the workspace and keep the team connected. I worked across those journeys as Product Engineer.',
      ],
    },
    {
      id: 'ownership', label: 'My Role', title: 'Owning the experience from the user journey to the working interface',
      body: ['My work covered UX discovery, journey mapping, information architecture, interaction design, interface design, and implementation. I used the codebase to understand what the product actually did, then worked through the gaps between the intended experience and the available services.'],
      items: [
        { title: 'Discovery and product framing', text: 'Mapped role-based journeys, audited existing workflows, and developed discovery questions around reporting, trust, access, and operational follow-up.' },
        { title: 'Flows and interaction design', text: 'Worked across the war room, field-reporting journey, workspace provisioning, invitations, and WhatsApp setup.' },
        { title: 'Delivery and iteration', text: 'Built and connected interfaces, translated feedback into refinements, and contributed to the contracts and release tooling needed to deliver them.' },
      ],
    },
    {
      id: 'discovery', label: 'Research & Discovery', title: 'Following the work beyond the happy path',
      body: [
        'I started with journey mapping and a UX audit of the existing product. I traced how people entered, completed a task, received feedback, and recovered when something went wrong. I also checked role permissions and data behaviour, because those decisions determine whether a screen is usable.',
        'The early audit identified a gap after field-report submission: the reassuring confirmation did not provide a durable record of what happened next. It also found a mismatch between the analyst role and the intelligence views that role could access. These were workflow and trust problems with consequences beyond visual polish.',
        'The discovery questions focused on what would make the information useful: what officers need as proof of submission, what coordinators need before acting on a ward, and how teams distinguish a quiet area from an area they have not heard from. These questions guided the product decisions and remained priorities for further user validation.',
      ],
      items: [
        { title: 'Field officer', text: 'The design needed to respect patchy connectivity, limited attention, and the need to know whether a report had reached the team.' },
        { title: 'Coordinator', text: 'The workspace needed to support a daily check: what changed, where evidence is missing, and who needs a follow-up.' },
        { title: 'Workspace administrator', text: 'Setup needed to make geography, access, integrations, and workspace state understandable before the team could rely on them.' },
      ],
    },
    {
      id: 'framing', label: 'The Core Challenge', title: 'Showing activity was only the beginning',
      body: [
        'A map or summary score can attract attention without answering the question behind the visit. Which reports support this view? How old are they? Has an officer gone quiet? Has anyone acknowledged the instruction?',
        'I framed the experience around a connected loop: collect evidence, understand its context, decide what needs attention, and follow up. Each stage needed a clear state and a next action.',
      ],
      comparisons: [
        { before: 'A score shown without enough context', after: 'Geographic scope, evidence filters, and labels that explain what the view represents' },
        { before: 'A team visible only through incoming activity', after: 'A Silence Board that also includes enrolled officers who have never reported' },
        { before: 'An instruction treated as one send event', after: 'An individual acknowledgement state for each officer' },
      ],
    },
    {
      id: 'journeys', label: 'User Journeys', title: 'Connecting the field, the desk, and the platform',
      journeys: [
        { name: 'Field reporting', need: 'Give officers a short path to record what they see, including when the network is unreliable.', steps: ['Sign in', 'Capture sentiment and issues', 'Add context and location', 'Queue the report', 'Sync when connected'], note: 'Journey mapping exposed the need to treat submission, successful sync, and failure recovery as separate product states.' },
        { name: 'Daily coordination', need: 'Help a coordinator move from reviewing information to following up with the team.', steps: ['Review evidence by place', 'Check coverage and freshness', 'Identify reporting gaps', 'Send a directive', 'Track acknowledgement'], note: 'Coverage and acknowledgement became explicit parts of the experience.' },
        { name: 'Workspace setup', need: 'Make the configuration behind the experience understandable to its administrator.', steps: ['Define the workspace', 'Choose geography', 'Connect channels', 'Invite the team', 'Open the daily workspace'], note: 'Daily work opens with a report; configuration lives under Settings.' },
      ],
    },
    {
      id: 'coverage', label: 'Design Decision 01', title: 'Make silence visible without treating it as sentiment',
      body: [
        'An activity feed naturally shows the people who have reported. That makes it a poor way to find the people the team has not heard from. I built the Silence Board around the enrolled roster, so an officer appears before their first report.',
        'The board separates recent contact, a prolonged gap, and no report yet. It orders the list by operational silence and keeps ward identity beside each officer. The coordinator can use it to find a coverage gap without reading absence as a statement about public opinion.',
      ],
      image: '/images/case-studies/polliplus/silence-board.jpg',
      imageAlt: 'Silence Board with recent, quiet, dark, and never-reported states',
      caption: 'Running product UI with illustrative records. Status is based on reporting activity, not sentiment.',
    },
    {
      id: 'follow-up', label: 'Design Decision 02', title: 'An instruction needs a visible return path',
      body: [
        'I built the Directives desk around one ward, one task, and individual acknowledgements. Coordinators choose the destination, write the task, set its priority, and can inspect the state for each recipient.',
        'The delivery copy reflects the actual channel behaviour: a directive reaches an officer on their next WhatsApp contact and in the app inbox where enrolment is linked. An acknowledgement is recorded separately. This keeps the interface from promising immediate delivery it cannot guarantee.',
      ],
      image: '/images/case-studies/polliplus/directives.jpg',
      imageAlt: 'Polliplus Directives desk showing ward selection, task priority, and pending versus acknowledged recipients',
      caption: 'Running product UI with illustrative tasks and officers. The screenshot shows the difference between pending and acknowledged.',
    },
    {
      id: 'scope', label: 'Design Decision 03', title: 'Give every view a readable scope',
      body: [
        'I refined evidence filtering to follow the geographic hierarchy: local government, ward, then polling unit. The map fits the wards carrying signal, and trajectory labels explain when a composite reflects online sources only.',
        'These choices help someone understand what they are looking at before making a comparison. I also worked on data-quality and operational views that expose the evidence behind the summaries, keeping incomplete and unavailable states visible.',
      ],
    },
    {
      id: 'configuration', label: 'Design Decision 04', title: 'Separate the daily job from the setup work',
      body: [
        'The platform console needs deep configuration; a daily workspace needs a useful starting point. I moved workspace configuration under Settings and opened workspaces on a daily report.',
        'I also worked on guided WhatsApp connections, real-number selection, and programme setup. Programme-aware navigation and terminology let the workspace reflect the kind of work being done, while keeping the shared platform coherent.',
      ],
      image: '/images/case-studies/polliplus/workspace-setup.jpg',
      imageAlt: 'Polliplus platform console workspace-design interface',
      caption: 'Running platform-console UI in a local configuration preview. No workspace was created or deployed.',
    },
    {
      id: 'iteration', label: 'Iteration & Trade-offs', title: 'Treat the edge states as part of the design',
      body: ['I worked through feedback on small text, mobile navigation, map sizing, geographic filtering, and workspace context. A collapsible drawer and a scrolling sidebar keep navigation available on smaller screens; clearer labels keep partial data from appearing more complete than it is.'],
      items: [
        { title: 'Immediate feedback versus confirmed delivery', text: 'Fast feedback is useful, but delivery and acknowledgement need their own states. The copy must match the channel behaviour.' },
        { title: 'Summary versus supporting evidence', text: 'A compact overview needs routes into the underlying evidence and a clear explanation of scope.' },
        { title: 'Shared platform versus different workflows', text: 'Campaign and programme workspaces share infrastructure while needing different labels, navigation, and setup decisions.' },
      ],
    },
    {
      id: 'outcome', label: 'The Outcome', title: 'A more connected operational experience',
      body: [
        'My contributions connected evidence review, reporting coverage, field directives, workspace configuration, and messaging setup. The work extended across the product interface, the public product story, and the release path.',
        'I carried the design through to working screens and integrations. The resulting experience makes several previously implicit states visible: who has not reported, what a view covers, and whether an officer has acknowledged a task.',
      ],
    },
    {
      id: 'reflection', label: 'What I Took Away', title: 'Trust depends on what happens after the click',
      body: ['This project sharpened how I think about operational products. A useful interface has to account for delayed responses, missing information, and work that continues outside the screen. Being the Product Engineer let me follow those details from the journey map into the behaviour people actually encounter.'],
    },
  ],
  related: { name: 'Intervia NSAT: designing the newcomer settlement journey', path: '/nsat-case-study' },
};

export default polliplus;
