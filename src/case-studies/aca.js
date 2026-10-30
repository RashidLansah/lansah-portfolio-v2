const aca = {
  name: 'Intervia ACA',
  category: 'Voice assessment · Individual & team journeys',
  year: '2026',
  headline: 'Helping people prepare for an AI assessment and',
  highlight: 'understand their results',
  summary: 'Product design across individual assessments, organisation setup, invitations, and reporting. As Product Engineer, I shaped the journeys, designed the interfaces, and connected the experience to the working platform.',
  hero: '/images/case-studies/aca/results.jpg',
  heroAlt: 'Intervia AI Competency Assessment report showing an illustrative score, competency breakdown, and credential summary',
  heroCaption: 'Original result interface rendered locally with an illustrative assessment. Scores, feedback, dates, and credential details are sample data, not project outcomes.',
  scope: [
    { value: 'Individual + team', label: 'Connected assessment journeys' },
    { value: 'Entry to report', label: 'End-to-end experience' },
    { value: 'Product Engineer', label: 'My role' },
  ],
  sections: [
    {
      id: 'context', label: 'The Context', title: 'A voice assessment needs more than an interview room',
      body: [
        'ACA is the AI Competency Assessment product in InterviaIQ. It brings together role-aware preparation, a voice-based assessment, and a competency report. Individuals can assess themselves, while organisations can configure assessments and invite their teams.',
        'I worked across the experience surrounding the assessment: how people enter, choose a path, prepare, understand the result, and return to their reports. My role as Product Engineer combined product thinking, UX, interface design, and implementation.',
      ],
      image: '/images/case-studies/aca/landing.jpg',
      imageAlt: 'Intervia ACA public entry screen introducing the assessment and separate individual and team paths',
      caption: 'Public entry experience rendered from the repository snapshot. The assessment and score illustrations are demonstration UI.',
    },
    {
      id: 'ownership', label: 'My Role', title: 'Owning the flows around the core assessment',
      body: ['My work covered the public entry experience, individual onboarding, assessment selection, organisation setup, invitation journeys, dashboards, results, and reporting. I carried the design through to connected interfaces and refined the transitions as the product developed.'],
      items: [
        { title: 'Journey and information design', text: 'Separated individual, organisation-owner, and invited-member paths, with appropriate setup, navigation, and next actions for each.' },
        { title: 'Interaction and interface design', text: 'Designed assessment selection, setup steps, report presentation, sharing, certificate access, and responsive layouts.' },
        { title: 'Implementation and iteration', text: 'Connected the screens to session and organisation data, preserved setup state, and addressed return paths, layout problems, and misleading interface states.' },
      ],
    },
    {
      id: 'discovery', label: 'Research & Discovery', title: 'Trace the journey before and after the conversation',
      body: [
        'I worked through the session lifecycle, role-based journeys, and feedback-driven iterations to identify where the experience needed more structure. The core questions were practical: how does someone choose the assessment, what context should carry forward, and where do they go when the session ends?',
        'The organisation journey introduced another set of decisions. An owner configures the assessment; a member receives an invitation to take it. Those people should not be asked to make the same setup and purchasing choices.',
        'I also treated the result as a product experience of its own. Someone needs to understand the overall score, see the competency detail, and find their report again. The design work therefore extended beyond completing the voice session.',
      ],
      items: [
        { title: 'Individual candidate', text: 'Needs an understandable choice of assessment depth, preparation guidance, and a result that explains strengths and development areas.' },
        { title: 'Organisation owner', text: 'Needs to configure the assessment, invite the right people, understand progress, and access reports.' },
        { title: 'Invited team member', text: 'Needs to enter the organisation’s assessment with the right context, without being diverted into consumer pricing or owner setup.' },
      ],
    },
    {
      id: 'framing', label: 'The Core Challenge', title: 'Keep context intact across different entry paths',
      body: [
        'A self-serve candidate, an organisation owner, and an invited member can all arrive at ACA with a different purpose. A shared login or assessment screen does not mean they need the same journey.',
        'I designed around continuity: preserve the selected assessment, carry the relevant profile and organisation context forward, make preparation explicit, and provide a clear destination after completion or exit.',
      ],
      comparisons: [
        { before: 'One generic assessment entry', after: 'A self-serve selection path and an organisation-assigned assessment path' },
        { before: 'Setup defaults appearing before saved configuration is ready', after: 'Restore the existing configuration before treating it as the assessment being edited' },
        { before: 'The voice session treated as the end of the journey', after: 'Processing, result detail, report navigation, and sharing designed as connected stages' },
      ],
    },
    {
      id: 'journeys', label: 'User Journeys', title: 'Three entry paths with a coherent destination',
      journeys: [
        { name: 'Individual assessment', need: 'Help someone choose a suitable assessment and understand what they are about to do.', steps: ['Create a profile', 'Choose assessment depth', 'Review preparation and readiness', 'Take the voice assessment', 'Read the competency report'], note: 'Assessment tier and profile context carry into the session rather than being recreated at each transition.' },
        { name: 'Organisation setup', need: 'Turn the owner’s assessment requirements into a reviewable setup.', steps: ['Describe the organisation', 'Configure the assessment', 'Add members or upload a CSV', 'Choose workflow settings', 'Review before launch'], note: 'Saved assessment configuration is restored before it can be updated. The capture shows configuration only; no assessment was launched.' },
        { name: 'Invited member', need: 'Get a team member into the assessment their organisation has assigned.', steps: ['Open the invitation', 'Join or sign in', 'Complete relevant onboarding', 'Prepare for the assigned assessment', 'Complete and view the result'], note: 'The member path uses organisation context to avoid showing consumer tier choices and pricing.' },
      ],
    },
    {
      id: 'entry', label: 'Design Decision 01', tocLabel: 'Assessment Entry', title: 'Make the choice clear, then preserve it',
      body: [
        'The individual entry presents Quick, Standard, and Comprehensive options with differences in depth, time, and competency coverage. The person can choose an appropriate path before entering the preparation sequence.',
        'I worked on tier selection, onboarding resumption, and login return behaviour so the selected path survived the hand-offs. For an organisation member with an assigned assessment, the product shows that assignment instead of presenting a new consumer purchase decision.',
        'Profile context also matters to the assessment itself. My work included resolving occupation identifiers into the occupation names used by question retrieval, connecting what the person supplies during onboarding to the experience that follows.',
      ],
      image: '/images/case-studies/aca/assessment-selection.jpg',
      imageAlt: 'ACA assessment selection screen comparing Quick, Standard, and Comprehensive options',
      caption: 'Original assessment-selection UI in a local preview. The options and prices reflect the inspected repository snapshot, rather than a claim about current pricing.',
    },
    {
      id: 'preparation', label: 'Design Decision 02', title: 'Explain the session before asking someone to enter it',
      body: [
        'The preparation flow separates device readiness, the session briefing, and the final start gate. That gives the candidate a place to understand the microphone, camera, screen-sharing, and connection requirements before the assessment begins.',
        'The live experience uses a voice interface and transcript alongside session controls. My focus across the surrounding flow was to make the state understandable: preparing, joining, assessing, finishing, and waiting for the result are different moments.',
      ],
    },
    {
      id: 'onboarding', label: 'Design Decision 03', tocLabel: 'Organisation Setup', title: 'Give each organisation decision a clear place',
      body: [
        'Organisation setup is arranged as a five-step flow: organisation details, assessment configuration, invitations, workflow settings, and review. The owner can understand the structure before reaching the final launch decision.',
        'I worked on the configuration and invitation flows, including member and administrator roles, assessment details, deadlines, and saved setup state. I also addressed clipped layouts so invitation controls remained usable.',
        'One important implementation detail had a direct UX consequence. The existing assessment is only treated as the edit target after its saved configuration has loaded. This prevents a temporary loading failure from making defaults appear to be the organisation’s existing choices.',
      ],
      image: '/images/case-studies/aca/assessment-configuration.jpg',
      imageAlt: 'ACA organisation assessment configuration with competency selection, platform defaults, and threshold settings',
      caption: 'Organisation setup in a local preview with illustrative platform defaults.',
    },
    {
      id: 'organisation-context', label: 'Designing the Owner Journey', title: 'Connect the organisation to its assessment',
      body: [
        'I worked on organisation dashboards, member detail, settings, invitations, and report access. The aim was to keep the owner’s management work connected to the assessment and the people taking it.',
        'That work included simplifying invitation roles and removing an unnecessary invite-link step. The member flow could then focus on joining the organisation and preparing for the assigned assessment, while the owner retained the configuration responsibilities.',
      ],
      image: '/images/case-studies/aca/organisation-setup.jpg',
      imageAlt: 'ACA organisation setup with a five-stage navigation rail and organisation details form',
      caption: 'The first step of the running organisation setup UI. Captured locally without creating an organisation.',
    },
    {
      id: 'results', label: 'Design Decision 04', title: 'Turn the result into something people can interpret',
      body: [
        'I designed and refined the post-assessment result and Reports experience. The report brings the overall result together with a competency spectrum, strengths, development areas, and an evaluator summary.',
        'I also worked on certificate access, public sharing links, and PDF exports for organisation reports. These actions give the result a life beyond the first screen someone sees after the session.',
        'Navigation remains available on report screens, with breadcrumbs linking the report back to the dashboard and report list. The person should be able to inspect a result without losing their place in the product.',
      ],
      image: '/images/case-studies/aca/results.jpg',
      imageAlt: 'ACA competency report showing an illustrative overall result and competency detail',
      caption: 'Report UI with fictional assessment data. Scores, feedback, and credential details are illustrative.',
    },
    {
      id: 'recovery', label: 'Recovery & Responsive Design', title: 'Design an honest path when the session does not finish',
      body: [
        'Completing an assessment and abandoning it lead to different destinations. I worked on the exit flow so an abandoned session does not appear as a completed result.',
        'For a signed-in person, an abandoned assessment returns to the dashboard. For an anonymous invite-link candidate, it returns to the public landing page rather than a login bounce. The destination reflects the person’s actual access to the product.',
        'I also worked on responsive dashboards and results while explicitly gating assessment entry on mobile. A browser-based assessment that depends on desktop screen sharing needs to explain that requirement instead of offering a path the device cannot complete.',
      ],
    },
    {
      id: 'iteration', label: 'Iteration & Trade-offs', title: 'Protect the journey as the product grows',
      items: [
        { title: 'Personal assessment versus organisation assignment', text: 'Share the underlying assessment experience while preserving who chooses the configuration and who simply needs to complete it.' },
        { title: 'Responsive access versus assessment readiness', text: 'Make dashboards and results available across screen sizes, and state the device boundary for taking the assessment.' },
        { title: 'A summary score versus useful feedback', text: 'Give the result a clear hierarchy and routes into competency detail, interpretation, and report actions.' },
        { title: 'Fast setup versus preserving existing decisions', text: 'Loading and resumption behaviour are part of the design. A temporary failure must not silently replace the owner’s configuration with defaults.' },
      ],
    },
    {
      id: 'outcome', label: 'The Outcome', title: 'A connected assessment experience for individuals and teams',
      body: [
        'My contribution connected individual onboarding and assessment selection with organisation setup, invitations, results, and reporting. The iterations addressed specific breaks in the journey: lost context, inappropriate entry screens, clipped invitations, ambiguous exits, and reports that needed clearer navigation.',
        'As Product Engineer, I carried the design into working interfaces and flow behaviour, with attention to preparation, management, and reporting alongside the live assessment.',
      ],
    },
    {
      id: 'reflection', label: 'What I Took Away', title: 'The hand-offs shape the assessment experience',
      body: ['This project reinforced the value of tracing a journey across its boundaries. Sign-in, invitation acceptance, setup recovery, session exit, and report navigation all affect whether someone can complete the task they came for. Working across design and implementation let me address those transitions as part of the product.'],
    },
  ],
  related: { name: 'Intervia NSAT: designing the newcomer settlement journey', path: '/nsat-case-study' },
};

export default aca;
