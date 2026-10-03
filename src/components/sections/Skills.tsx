import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Project Coordination & Delivery',
    color: 'from-purple-500 to-indigo-600',
    skills: [
      'End-to-End Coordination',
      'Project Planning',
      'Schedule & Milestone Tracking',
      'Deliverables & Dependencies',
      'Change & Variation Management',
      'Project Handover & Go-Live',
    ],
  },
  {
    title: 'Reporting & Data Analysis',
    color: 'from-indigo-600 to-purple-600',
    skills: [
      'Power BI Dashboards',
      'Advanced Excel',
      'Forecast vs Actual',
      'KPI Reporting',
      'Project Status Reports',
      'Cost & Progress Tracking',
      'Management Reporting',
    ],
  },
  {
    title: 'Project Controls & Quality',
    color: 'from-purple-600 to-violet-600',
    skills: [
      'RAID Logs',
      'Risk & Issue Management',
      'Resource & Capacity Tracking',
      'Process Standardisation',
      'SOP Documentation',
      'Root Cause Analysis',
      'Best Practice Implementation',
    ],
  },
  {
    title: 'Tools & Methodologies',
    color: 'from-violet-600 to-purple-500',
    skills: [
      'Microsoft Project',
      'Jira',
      'Microsoft Teams',
      'Agile & Scrum',
      'Kanban & Waterfall',
      'Stakeholder Management',
      'Vendor & Contractor Coordination',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Skills & Expertise</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Proven capabilities in project coordination, PMO controls, data reporting, and stakeholder management.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }}>
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 pt-2">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-primary/20 hover:text-primary transition-colors cursor-default">{skill}</motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
