import { motion, AnimatePresence } from 'framer-motion';
import { CloseIcon } from './Icons';

function SidePanel({ isOpen, onClose, project }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="side-panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="side-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="side-panel-header">
              <button className="side-panel-close" onClick={onClose}>
                <CloseIcon size={24} />
              </button>
            </div>

            <div className="side-panel-content">
              <div className="side-panel-icon">
                {project.icon}
              </div>

              <h2 className="side-panel-title">{project.name}</h2>
              <p className="side-panel-tagline">{project.tagline}</p>

              <div className="side-panel-section">
                <h3 className="side-panel-section-title">User Pains</h3>
                <ul className="side-panel-list">
                  {project.userPains.map((pain, index) => (
                    <li key={index}>{pain}</li>
                  ))}
                </ul>
              </div>

              <div className="side-panel-section">
                <h3 className="side-panel-section-title">Motivations</h3>
                <ul className="side-panel-list">
                  {project.motivations.map((motivation, index) => (
                    <li key={index}>{motivation}</li>
                  ))}
                </ul>
              </div>

              <div className="side-panel-section">
                <h3 className="side-panel-section-title">Solution</h3>
                <p className="side-panel-text">{project.solution}</p>
              </div>

              <div className="side-panel-section">
                <h3 className="side-panel-section-title">Impact</h3>
                <ul className="side-panel-list">
                  {project.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="side-panel-stage">
                <span className="side-panel-stage-badge">{project.stage}</span>
                <p className="side-panel-stage-text">Case study coming soon</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SidePanel;
