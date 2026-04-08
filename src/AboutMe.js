import './App.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import SidePanel from './SidePanel';
import {
  CompanyIcon,
  WorkBriefcaseIcon,
  CodeIcon,
  BrainIcon,
  PlantIcon,
  MentorTeachIcon,
  WorldIcon,
  SportsIcon,
  RocketIcon,
  GamepadIcon,
  ReadingIcon,
  HeadphonesIcon,
  WaveIcon,
  LeafIcon,
  CalendarIcon,
  PiggyBankIcon,
  MenuBoardIcon,
  HouseIcon,
  UtensilsIcon
} from './Icons';

function AboutMe() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Side projects data
  const sideProjects = [
    {
      id: 1,
      name: 'Cropperly',
      tagline: 'Agri-marketplace connecting farmer cooperatives to buyers',
      icon: <LeafIcon size={72} />,
      userPains: [
        'Farmers struggle to access fair markets for their produce',
        'Lack of transparency in pricing and logistics',
        'No escrow protection leads to payment disputes',
        'Cooperatives have limited digital tools for coordination'
      ],
      motivations: [
        'Desire to get fair prices for their hard work',
        'Need for reliable and trustworthy buyers',
        'Want to reduce post-harvest losses',
        'Looking for simple tools to manage their operations'
      ],
      solution: 'Cropperly is an agri-marketplace that connects farmer cooperatives directly to verified buyers. It features integrated logistics tracking, escrow payment protection, and cooperative management tools to ensure fair trade and reduce friction in agricultural commerce.',
      impact: [
        'Enables direct farmer-to-buyer transactions',
        'Protects farmers with escrow payments',
        'Reduces post-harvest losses through better logistics',
        'Empowers cooperatives with digital coordination tools'
      ],
      stage: 'In Development'
    },
    {
      id: 2,
      name: 'MeetingMind',
      tagline: 'AI-powered meeting preparation assistant for macOS',
      icon: <CalendarIcon size={72} />,
      userPains: [
        'No time to properly prepare for back-to-back meetings',
        'Missing context on attendees and their priorities',
        'Forgetting follow-ups from previous interactions',
        'Walking into meetings unprepared affects credibility'
      ],
      motivations: [
        'Want to make meaningful contributions in meetings',
        'Need to build stronger professional relationships',
        'Desire to be seen as prepared and knowledgeable',
        'Looking to maximize limited time before meetings'
      ],
      solution: 'MeetingMind is a macOS menu bar app that automatically generates comprehensive briefings before your meetings. It pulls context from your calendar, email history, and past interactions to deliver personalized prep materials so you\'re always ready.',
      impact: [
        'Saves hours of manual meeting preparation',
        'Improves meeting outcomes with better context',
        'Strengthens professional relationships',
        'Reduces anxiety from being unprepared'
      ],
      stage: 'Prototype'
    },
    {
      id: 3,
      name: 'Susu Collection System',
      tagline: 'Digitizing traditional savings groups',
      icon: <PiggyBankIcon size={72} />,
      userPains: [
        'Traditional Susu collectors use paper records prone to loss',
        'Customers have no visibility into their savings balance',
        'Cash handling creates security and trust issues',
        'No formal records make it hard to build credit history'
      ],
      motivations: [
        'Want to save money in a trusted, familiar system',
        'Need easy access to their savings records',
        'Desire to build a verifiable financial history',
        'Looking for convenience without losing the personal touch'
      ],
      solution: 'A web application that modernizes the traditional Susu savings collection system. It digitizes record-keeping, provides real-time balance tracking, and maintains the trusted collector-customer relationship while adding security and transparency.',
      impact: [
        'Eliminates paper-based record losses',
        'Provides customers with 24/7 balance visibility',
        'Builds verifiable savings history for financial inclusion',
        'Maintains cultural relevance while adding modern convenience'
      ],
      stage: 'MVP Complete'
    },
    {
      id: 4,
      name: 'The Magnolia Menu Board',
      tagline: 'Digital menu system for restaurants',
      icon: <MenuBoardIcon size={72} />,
      userPains: [
        'Printing new menus for every price change is expensive',
        'Static menus can\'t showcase specials effectively',
        'Managing multiple display screens is complicated',
        'No easy way to schedule menu changes throughout the day'
      ],
      motivations: [
        'Want professional-looking menus that attract customers',
        'Need to update prices and items instantly',
        'Desire to highlight high-margin items dynamically',
        'Looking for an affordable digital signage solution'
      ],
      solution: 'A complete digital menu board system featuring an Admin Dashboard for easy menu management and a TV Display App for beautiful presentation. Restaurants can update menus in real-time, schedule different menus for different times, and showcase specials prominently.',
      impact: [
        'Eliminates printing costs for menu updates',
        'Increases sales of featured items',
        'Enables dynamic pricing and promotions',
        'Professional presentation improves brand perception'
      ],
      stage: 'In Development'
    },
    {
      id: 5,
      name: 'Apolomiduu',
      tagline: 'Real estate platform for property discovery',
      icon: <HouseIcon size={72} />,
      userPains: [
        'Property listings scattered across multiple platforms',
        'Difficulty verifying property authenticity',
        'Limited information about neighborhoods and amenities',
        'No centralized place to compare properties effectively'
      ],
      motivations: [
        'Want to find the perfect property without endless searching',
        'Need trustworthy information to make big decisions',
        'Desire to understand what living in an area is really like',
        'Looking for a streamlined property hunting experience'
      ],
      solution: 'Apolomiduu is a real estate platform that aggregates verified property listings with rich neighborhood insights. It helps users discover, compare, and evaluate properties with comprehensive information about amenities, pricing trends, and community characteristics.',
      impact: [
        'Centralizes property search in one platform',
        'Reduces fraud with verified listings',
        'Empowers informed decisions with neighborhood data',
        'Saves time in the property hunting journey'
      ],
      stage: 'Concept'
    },
    {
      id: 6,
      name: 'Digital Menu Waiter',
      tagline: 'Contactless ordering for restaurants',
      icon: <UtensilsIcon size={72} />,
      userPains: [
        'Long wait times for servers to take orders',
        'Difficulty communicating dietary restrictions',
        'Menu items descriptions often unclear',
        'Splitting bills is always complicated'
      ],
      motivations: [
        'Want a seamless, modern dining experience',
        'Need to order at their own pace without pressure',
        'Desire clear information about ingredients and allergens',
        'Looking for easy payment and bill splitting options'
      ],
      solution: 'A contactless ordering system that lets diners browse menus, customize orders, and pay directly from their phones. Features include detailed item descriptions, allergen information, easy customization, and seamless bill splitting.',
      impact: [
        'Reduces wait times for both ordering and payment',
        'Improves accuracy of orders and dietary accommodations',
        'Increases table turnover for restaurants',
        'Enhances dining experience with self-service convenience'
      ],
      stage: 'Concept'
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Disable body scroll when panel is open
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPanelOpen]);

  return (
    <div className="about-page">
      {/* Vertical Dashed Lines */}
      <div className="vertical-line vertical-line-left"></div>
      <div className="vertical-line vertical-line-right"></div>

      {/* Global Sidebar */}
      <Sidebar />

      {/* Breadcrumb Navigation */}
      <nav className="about-nav">
        <div className="about-breadcrumb">
          <Link to="/" className="about-breadcrumb-link">Home</Link>
          <span className="about-breadcrumb-separator">/</span>
          <span className="about-breadcrumb-current">About</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-profile-image">
            <img src="/images/lansah-profile.png" alt="Lansah" />
          </div>
          <h1 className="about-headline">
            Hi, I'm Lansah. I'm a senior product designer and builder focused on AI-native, 0-to-1, fintech, and B2B SaaS products. I design them, then I help ship them.
          </h1>
        </motion.div>
      </section>

      {/* Two Column Section - Current & Previous */}
      <section className="about-two-column">
        <motion.div
          className="about-column about-column-bordered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <CompanyIcon size={72} />
          </motion.div>
          <h2 className="about-section-title">
            Currently exploring opportunities across AI, education, fintech, consumer, and B2B SaaS
          </h2>
          <p className="about-section-text">
            I use AI-native tools like Claude Code and Cursor to move from product thinking to working product faster. I am most valuable in roles where I can combine product strategy, interface design, systems thinking, and builder energy.
          </p>
        </motion.div>

        <motion.div
          className="about-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <WorkBriefcaseIcon size={72} />
          </motion.div>
          <h2 className="about-section-title">
            Previously, Founding Product Designer at Jenesys
          </h2>
          <p className="about-section-text">
            From 2023 to 2025, I led product design for AI-powered financial workflows, reconciliation systems, and B2B dashboards that helped Jenesys reach $1M ARR.
          </p>
        </motion.div>
      </section>

      {/* Career Journey Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <h2 className="about-section-title">My path to product was anything but linear</h2>
            <p className="about-section-text">
              I studied Biochemistry and earned an MPhil in Molecular Medicine. Along the way, I've been a Radio DJ, high school Biology and Chemistry teacher, pharma sales rep, graphic designer, digital marketer, and even started a business that failed.
            </p>
          </div>
          <div className="about-illustration">
            <BrainIcon size={200} />
          </div>
        </motion.div>
      </section>

      {/* Design Journey Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <h2 className="about-section-title">All those experiences led me to building products</h2>
            <p className="about-section-text">
              Every role taught me something about people, how they think, what they need, and why they behave the way they do. Now I channel all of that into designing and shipping products that actually work for humans, especially in AI, fintech, education, and workflow-heavy software.
            </p>
          </div>
          <div className="about-illustration">
            <CodeIcon size={200} />
          </div>
        </motion.div>
      </section>

      {/* Product Expertise Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <h2 className="about-section-title">I build products that solve real problems and look good doing it</h2>
            <p className="about-section-text">
              With 7+ years across fintech, education, AI, and B2B SaaS, I bring a deep understanding of how products succeed in competitive markets. I study user needs, analyze what is working and what is not, and use that insight to shape product decisions from concept through launch. I have taken products from zero to one, guided teams through full product lifecycles, and shipped across web and mobile.
            </p>
          </div>
          <div className="about-illustration">
            <WorkBriefcaseIcon size={200} />
          </div>
        </motion.div>
      </section>

      {/* Bespoke User Interfaces Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <h2 className="about-section-title">Every product deserves an interface that feels like it was made just for its users</h2>
            <p className="about-section-text">
              I design bespoke user interfaces that are visually refined, intentional, and built around how people actually think and behave. I combine strong visual craft with behavioral design so the final product is not just usable, but strategically aligned with what users need to do and what the business needs to achieve.
            </p>
          </div>
          <div className="about-illustration">
            <PlantIcon size={200} />
          </div>
        </motion.div>
      </section>

      {/* Strategy Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
            <h2 className="about-section-title">Good design without strategy is just decoration</h2>
            <p className="about-section-text">
              I start every engagement by understanding the business problem, the market landscape, and where the real opportunity sits. From there, I develop a product strategy that connects user needs to business goals. I do not just hand over a strategy deck. I stay involved through execution, making sure the shipped product reflects the thinking behind it.
            </p>
          </div>
          <div className="about-illustration">
            <BrainIcon size={200} />
          </div>
        </motion.div>
      </section>

      {/* Social Impact & Mentorship */}
      <section className="about-two-column">
        <motion.div
          className="about-column about-column-bordered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <PlantIcon size={72} />
          </motion.div>
          <h2 className="about-section-title">
            I care about products that create real impact
          </h2>
          <p className="about-section-text">
            <a href="https://medium.com/design-bootcamp/designing-a-confidence-based-feedback-ui-f5eba0420c8c" target="_blank" rel="noopener noreferrer" className="about-link">Here's something I wrote</a> about designing interfaces that communicate AI uncertainty and keep users in control.
          </p>
        </motion.div>

        <motion.div
          className="about-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <MentorTeachIcon size={72} />
          </motion.div>
          <h2 className="about-section-title">
            I mentor 20+ designers on ADPList
          </h2>
          <p className="about-section-text">
            UX strategy, visual storytelling, career development. I've been mentoring on <a href="https://adplist.org" target="_blank" rel="noopener noreferrer" className="about-link">ADPList</a> for over 2 years. Shoot me a line if you'd like to connect.
          </p>
        </motion.div>
      </section>

      {/* Passions Section */}
      <section className="about-full-width">
        <motion.div
          className="about-full-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-text-content">
          <h2 className="about-section-title">
            Beyond fintech, I'm drawn to healthcare, education, AI, and complex data systems
          </h2>
          <p className="about-section-text">
            These are the spaces where thoughtful product design has the most leverage, especially when the work involves trust, complexity, or underserved users. That is the kind of problem space I enjoy most.
          </p>
          </div>
          <div className="about-illustration">
            <WorldIcon size={200} />
          </div>
        </motion.div>
      </section>

      {/* Side Projects Section */}
      <section className="about-side-projects">
        <motion.h2
          className="about-side-projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Side Projects
        </motion.h2>
        <motion.p
          className="about-side-projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Products I'm designing and shipping on the side
        </motion.p>

        <div className="about-side-projects-grid">
          {sideProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="about-side-project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openProject(project)}
            >
              <div className="about-side-project-icon">
                {project.icon}
              </div>
              <h3 className="about-side-project-name">{project.name}</h3>
              <p className="about-side-project-tagline">{project.tagline}</p>
              <span className="about-side-project-stage">{project.stage}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Interests - Two Column */}
      <section className="about-two-column">
        <motion.div
          className="about-column about-column-bordered"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <SportsIcon size={72} />
          </motion.div>
          <h2 className="about-section-title">
            Outside of work, I'm a football fanatic. Messi is the GOAT
          </h2>
          <p className="about-section-text">
            I play and watch football religiously. Proud Barca supporter. I also enjoy exploring new cuisines and traveling to new places.
          </p>
        </motion.div>

        <motion.div
          className="about-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <RocketIcon size={72} />
          </motion.div>
          <h2 className="about-section-title">
            And a builder at heart
          </h2>
          <p className="about-section-text">
            I am not interested in handing off polished mockups and disappearing. I like being close to the product, close to the constraints, and close to shipping. The side projects above are part of how I keep that builder muscle active.
          </p>
        </motion.div>
      </section>

      {/* Three Column - Currently */}
      <section className="about-three-column">
        <motion.div
          className="about-small-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GamepadIcon size={72} />
          </motion.div>
          <h3 className="about-small-title">Playing:</h3>
          <p className="about-small-text">
            FIFA, God of War, Ghost of Tsushima
          </p>
        </motion.div>

        <motion.div
          className="about-small-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <HeadphonesIcon size={72} />
          </motion.div>
          <h3 className="about-small-title">Listening to:</h3>
          <p className="about-small-text">
            Afrobeats, Hip-hop, Lofi beats, Jazz
          </p>
        </motion.div>

        <motion.div
          className="about-small-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-icon-wrapper"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ReadingIcon size={72} />
          </motion.div>
          <h3 className="about-small-title">Reading:</h3>
          <p className="about-small-text">
            Sci-fi, Manga
          </p>
        </motion.div>
      </section>

      {/* Footer Section */}
      <section className="about-footer" id="contact">
        <motion.div
          className="about-footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="about-footer-icon">
            <WaveIcon size={120} />
          </div>
          <div className="about-footer-text">
            <p className="about-footer-heading">
              Have a product to design or ship? Reach out.
            </p>
            <p className="about-footer-heading">
              All the best,<br />
              Lansah
            </p>
            <p className="about-footer-small">
              This site was designed and built by me. Feel free to <a href="https://linkedin.com/in/rashid-lansah" className="about-link">visit my LinkedIn.</a>
              <br />
              Copyright © Lansah. All rights reserved.
            </p>
          </div>
        </motion.div>
        <div className="about-footer-image">
          <img src="/images/lansah-profile.png" alt="Lansah" />
        </div>
      </section>

      {/* Side Panel for Project Details */}
      <SidePanel
        isOpen={isPanelOpen}
        onClose={closePanel}
        project={selectedProject}
      />
    </div>
  );
}

export default AboutMe;
