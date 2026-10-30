const stimulir = {
  name: 'Stimulir',
  category: 'Console · Website · AI workflows',
  year: '2025–2026',
  headline: 'Designing how people understand, review, and',
  highlight: 'work with AI',
  summary: 'Product design across the Stimulir console, website, onboarding, and developer experience. As Product Engineer, I shaped the UX flows and carried the interfaces through to implementation.',
  hero: '/images/case-studies/stimulir/console-traces.png',
  heroAlt: 'Stimulir console visual with trace statistics, model routes, and an agent proposal awaiting a decision',
  heroCaption: 'Console visual from the later website preview. The example traces, costs, scores, and recommendations illustrate the interface; they are not project results.',
  scope: [
    { value: 'Console', label: 'Review and workflow UX' },
    { value: 'Website + docs', label: 'Discovery and activation' },
    { value: 'Product Engineer', label: 'My role' },
  ],
  sections: [
    {
      id: 'context', label: 'The Context', title: 'Making a complex AI product understandable and usable',
      body: [
        'Stimulir connects AI execution with human expertise. Across the engagement, the product evolved from verification and context gathering for knowledge-work tasks toward a broader story around routing, evaluating, and improving AI behaviour.',
        'My work covered the console people use, the flows connecting its capabilities, and the website that explains the product before someone signs in. These surfaces needed a shared language for what the system was doing, what a person needed to review, and what would happen next.',
      ],
    },
    {
      id: 'ownership', label: 'My Role', title: 'Product Engineer, with ownership of the experience',
      body: ['I worked across product framing, UX flows, information architecture, interaction design, visual design, and implementation. The work included the console, website, onboarding, integrations, developer documentation, and shared design language.'],
      items: [
        { title: 'Product and UX', text: 'Translated capabilities into user journeys, defined review and setup flows, and designed the information people need before making a decision.' },
        { title: 'Console and design system', text: 'Worked on task verification, context gathering, replay, workspace navigation, and reusable interface patterns across web, desktop, and mobile work.' },
        { title: 'Website and developer experience', text: 'Designed and built the public product story, calls to action, walkthroughs, and documentation paths connecting discovery to first use.' },
      ],
    },
    {
      id: 'discovery', label: 'Research & Discovery', title: 'Start with the decisions people need to make',
      body: [
        'I used workflow analysis, UX specifications, and feedback-driven interface iterations to frame the experience. The early console work focused on verification: what must someone see before approving a task, what happens when context is missing, and how can they inspect what the agent did?',
        'Those questions led to a task hierarchy built around the summary, extracted information, confidence, and available actions. Session replay and context requests provided routes into the detail when the summary was not enough.',
        'The website introduced a related discovery problem. Someone encountering Stimulir for the first time needed to understand how its capabilities fit together. I organized the explanation around a sequence of actions: route traffic, evaluate a use case, review the proposed improvement, and decide what to apply.',
      ],
      items: [
        { title: 'The person reviewing a task', text: 'Needs the relevant evidence, the missing context, and a clear distinction between reviewing information and authorizing an action.' },
        { title: 'The person setting up a workspace', text: 'Needs to know what setup requires, which integrations matter, and how to reach a first useful task.' },
        { title: 'The developer exploring the product', text: 'Needs a concrete explanation, a path into the console, and guidance that connects setup to observable activity.' },
      ],
    },
    {
      id: 'framing', label: 'The Core Challenge', title: 'Give the person enough context to stay in control',
      body: [
        'The underlying system has models, agents, integrations, context, and execution history. Presenting those capabilities as a collection of features leaves the user to work out the workflow.',
        'I designed around the decisions between those features. A reviewer needs to understand the task before approving it. A developer needs to understand the evidence behind a proposed change. A new user needs to understand the next setup step.',
      ],
      comparisons: [
        { before: 'A task that needs a decision', after: 'A summary, supporting fields, confidence, and access to deeper context' },
        { before: 'A list of setup requirements', after: 'A staged journey from business details and goals to integrations and first use' },
        { before: 'An abstract AI product explanation', after: 'A website walkthrough grounded in recognizable console actions' },
      ],
    },
    {
      id: 'journeys', label: 'User Journeys', title: 'Connecting discovery, setup, and everyday use',
      journeys: [
        { name: 'From the website to first use', need: 'Help a new visitor understand the product and choose a useful next step.', steps: ['Understand the product', 'Explore how it works', 'Start for free or talk to the team', 'Follow setup guidance', 'See the first activity'], note: 'The website offers both a self-service entry and a conversation with the founder. Documentation supports the next step.' },
        { name: 'Reviewing an AI task', need: 'Make the review decision quick to reach while keeping supporting information available.', steps: ['Open the task', 'Inspect summary and confidence', 'Review context or replay', 'Approve, reject, request context, or skip', 'Continue the queue'], note: 'The earlier console supports both swipe gestures and keyboard interaction. Extra context has its own path.' },
        { name: 'Understanding an improvement', need: 'Explain how evidence becomes a proposed change before the person decides what to apply.', steps: ['Capture traces', 'Select a use case', 'Evaluate the prompt or model', 'Compare the report', 'Review and apply a change'], note: 'This is the later website’s product-explanation flow. Illustrated scores demonstrate the interaction, not a measured project outcome.' },
      ],
    },
    {
      id: 'coverage', label: 'Design Decision 01', tocLabel: 'Console UX', title: 'Put the evidence beside the review decision',
      body: [
        'In the verification console, I organized task cards around the task type, summary, extracted details, and confidence. The reviewer can read the information in one place, then decide whether the task is ready for a decision or needs more context.',
        'The interaction model supports approve, reject, request context, and skip. Gestures provide a short path through the queue, while keyboard shortcuts support the same review pattern at a desk. Deeper task information and replay remain available when a quick review is not enough.',
      ],
      image: '/images/case-studies/stimulir/verification.jpg',
      imageAlt: 'Stimulir verification task cards with extracted information, missing context, and confidence states',
      caption: 'Original console task-card components rendered in an isolated preview with illustrative records. This shows the earlier verification experience.',
    },
    {
      id: 'context-replay', label: 'Design Decision 02', title: 'Make context gathering and inspection part of the flow',
      body: [
        'A reviewer sometimes needs to understand how the agent reached a result. I worked on the experience around session replay, task details, integrations, and Context Studio so that investigation had a place in the product.',
        'Replay provides a timeline and action history. Context requests give a task a route forward when the available information is incomplete. These are important branches of the review journey, because a person should be able to pause for understanding before making a decision.',
      ],
    },
    {
      id: 'onboarding', label: 'Design Decision 03', tocLabel: 'Setup Flows', title: 'Design setup as a sequence of useful decisions',
      body: [
        'The console’s setup model separates missing details, approval, setup, and readiness. Within setup, business context, goals, integrations, and the first task each have their own place.',
        'I worked on the flows around workspace context and connected tools, keeping the transition into the product in view. The design question was what someone needed to do next, and which information was necessary before they could proceed.',
        'This thinking also shaped the website and documentation. The public promise, the sign-up entry, and the setup guidance needed to describe a consistent path.',
      ],
    },
    {
      id: 'website', label: 'Design Decision 04', tocLabel: 'Website', title: 'Explain the product through its workflow',
      body: [
        'I designed and built the Stimulir website as a continuation of the product experience. The later preview leads with the product’s purpose, shows the console, and then explains routing, evaluation, improvement, and automation in sequence.',
        'Each step pairs the explanation with an interface example. The visitor can connect the capability to something they would actually do: inspect a trace, choose an evaluation, compare a result, or review an agent proposal.',
        'The entry points make the next action explicit: start for free, sign in, read the docs, or speak with the founder. I also worked on the earlier landing page’s early-access form, including focus and success states, and on scroll behaviour in its product explanation.',
      ],
      image: '/images/case-studies/stimulir/website.jpg',
      imageAlt: 'Stimulir website hero with a product explanation, console visual, and clear sign-up and contact actions',
      caption: 'Later website preview rendered locally from the repository. It represents the product story and entry points at that stage of the work.',
    },
    {
      id: 'explanation', label: 'Designing the Explanation', title: 'Show the decision the interface is asking for',
      body: [
        'The evaluation walkthrough explains the input before the result: choose the use case and time range, decide what to evaluate, and see the work move through its states. The next step shows the comparison and the proposed change.',
        'The explanation keeps applying a change as an explicit action. That gives the website the same emphasis as the console: show the evidence and the options before asking the person to decide.',
      ],
      image: '/images/case-studies/stimulir/evaluation-walkthrough.jpg',
      imageAlt: 'Stimulir website evaluation walkthrough pairing the explanation with an illustrative evaluation interface',
      caption: 'Product walkthrough captured from the website preview. The example evaluation and scores are illustrative.',
    },
    {
      id: 'developer-experience', label: 'Developer Experience', title: 'Carry the journey into documentation',
      body: [
        'I worked on the developer documentation and the paths into it from the website. Quickstart guidance, SDK references, CLI guidance, and product walkthroughs help bridge the gap between understanding the offer and getting it to work.',
        'The later preview also includes Watch mode: step-by-step documentation walkthroughs. The product design question stays the same across the website and docs: what does this person need to understand or do next?',
      ],
    },
    {
      id: 'iteration', label: 'Iteration & Trade-offs', title: 'Keep the experience coherent as the product evolves',
      items: [
        { title: 'Fast review and careful inspection', text: 'A short interaction works for a familiar task; uncertain cases need routes into context and replay. Both belong in the same flow.' },
        { title: 'A shared language across surfaces', text: 'The website, console, docs, and mobile work need consistent concepts while supporting different depths of information.' },
        { title: 'A clear story for a broad platform', text: 'Explaining the workflow gives the capabilities an order. The visitor can understand the progression before exploring individual features.' },
        { title: 'Feedback at the edges', text: 'Form focus, success states, native scrolling, integration callbacks, and readable status labels are part of the experience people actually use.' },
      ],
    },
    {
      id: 'outcome', label: 'The Outcome', title: 'A connected story from the website into the product',
      body: [
        'My work brought product thinking, interface design, and implementation across the console, website, onboarding, documentation, and shared design language. The case spans both the earlier verification workflows and the later public explanation of the AI improvement loop.',
        'The contribution was in making the capability understandable and actionable: what the system is doing, what information supports it, what the person can do next, and where their decision is required.',
      ],
    },
    {
      id: 'reflection', label: 'What I Took Away', title: 'The product starts before someone signs in',
      body: ['Working across the console and website changed how I think about the boundaries of product design. The explanation on the landing page, the first setup decision, and the task awaiting review are connected parts of the same journey. As Product Engineer, I could carry that thinking from the flow into the interface and its working behaviour.'],
    },
  ],
  related: { name: 'Polliplus: connecting evidence and field operations', path: '/polliplus-case-study' },
};

export default stimulir;
