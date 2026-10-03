import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Project Analyst',
    company: 'Luna Software Solutions',
    period: 'Mar 2024 – Dec 2024',
    highlights: [
      'Coordinated multiple concurrent projects by tracking critical dates, scope, cost, schedules, dependencies, resources, and deliverables for weekly stakeholder reviews.',
      'Developed and maintained Power BI and Excel dashboards to consolidate project progress, cost, capacity, risks, and forecast-versus-actual data for management decision-making.',
      'Analysed project data to identify schedule variances, delivery discrepancies, resource constraints, and cost impacts, coordinating corrective actions with delivery teams.',
      'Coordinated project changes and variations through documentation, stakeholder review, impact tracking, and closure, ensuring agreed changes were reflected in project records and delivery plans.',
      'Validated status, cost, schedule, and progress information to maintain accurate project data and reporting records for management reports.',
      'Coordinated cross-functional go-live and handover activities by managing testing, outstanding actions, documentation, and stakeholder sign-off against requirements.',
      'Standardised project documentation, reporting templates, and process controls, contributing to a 25% reduction in project turnaround time through improved process discipline.',
      'Delivered practical training to team members on reporting dashboards, project tracking processes, and new systems to improve consistency and data accuracy.',
    ]
  },
  {
    title: 'Project Coordinator',
    company: 'Luna Software Solutions',
    period: 'Jul 2022 – Feb 2024',
    highlights: [
      'Coordinated project activities from planning through delivery by tracking critical dates, milestones, dependencies, resources, costs, and deliverables across multidisciplinary workstreams.',
      'Maintained Excel-based project trackers for progress, cost, capacity, delivery status, and outstanding actions, consolidating information for project and management reporting.',
      'Coordinated requirements and specifications between stakeholders, contractors, vendors, and delivery teams to ensure scope, changes, responsibilities, and deadlines were clearly documented.',
      'Monitored project schedules and dependencies, identifying potential timeline, resource, and delivery risks early and escalating issues requiring management intervention.',
      'Managed RAID logs for assigned workstreams by recording risks, assumptions, issues, dependencies, owners, target dates, and resolution actions.',
      'Prepared project meetings, captured decisions and actions, and followed up with stakeholders to maintain accountability against agreed deadlines.',
      'Built Power BI and Excel reporting dashboards to track project progress, cost, change/variation status, deliverables, sign-off, and invoicing information.',
      'Used Microsoft Teams to coordinate distributed stakeholders and communicate project status, risks, changes, priorities, and required actions.',
      'Improved project coordination processes by maintaining standard templates, documentation, and compliance records to support consistent best-practice working.',
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-12 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Work Experience</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Coordinating concurrent workstreams, tracking schedules, managing RAID logs, and delivering robust PMO analytics.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift relative overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/25 via-primary/15 to-transparent" />
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/30"><Briefcase className="w-5 h-5 text-primary" /></div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">{exp.title}</h3>
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0"><Calendar className="w-4 h-4" /><span className="text-sm font-body">{exp.period}</span></div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground font-body text-sm sm:text-base">
                        <span className="text-primary mt-1.5 shrink-0">▹</span><span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
