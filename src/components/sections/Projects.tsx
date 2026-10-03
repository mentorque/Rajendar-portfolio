import { motion } from 'framer-motion';
import { LayoutDashboard, Waves } from 'lucide-react';

const projects = [
  {
    title: 'Project Performance & Management Reporting Dashboard',
    subtitle: 'Executive Visibility & Decision-Making Dashboard',
    period: 'Luna Software Solutions',
    description: 'Developed an integrated Power BI and Excel dashboard system to consolidate multi-project progress, cost, capacity, risks, and forecast-versus-actual data.',
    highlights: [
      'Consolidated complex cross-project metrics into intuitive weekly views for leadership reviews',
      'Tracked forecast vs actual spend, resource capacity, and schedule variance across concurrent workstreams',
      'Structured reporting workflows to ensure real-time visibility into critical milestones and actions',
    ],
    tags: ['Power BI', 'Microsoft Excel', 'KPI Dashboards', 'Forecast vs Actual', 'RAID Tracking'],
    icon: LayoutDashboard,
  },
  {
    title: 'Groundwater Contamination Study',
    subtitle: 'Environmental & Civil Engineering Analysis (Pallikaranai, Chennai)',
    period: 'Bharath Institute / Engineering Capstone',
    description: 'Investigated environmental groundwater contamination using structured project planning, systematic data collection, chemical analysis, and technical reporting.',
    highlights: [
      'Managed end-to-end project schedules, milestone deliverables, and sampling protocols',
      'Coordinated technical data collection, chemical parameter testing, and statistical analysis',
      'Synthesised analytical findings into formal documentation and presentations for stakeholders',
    ],
    tags: ['Civil Engineering', 'Project Planning', 'Data Collection', 'Technical Documentation', 'Root Cause Analysis'],
    icon: Waves,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Featured Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Highlighting key initiatives in PMO reporting dashboards and structured engineering analysis.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group w-full flex">
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift flex flex-col relative overflow-hidden w-full">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"><project.icon className="w-6 h-6 text-primary" /></div>
                    <span className="text-xs text-muted-foreground font-body">{project.period}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 font-body flex-grow">{project.description}</p>
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-body"><span className="text-primary shrink-0">✦</span><span>{highlight}</span></li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {project.tags.map((tag, idx) => <span key={idx} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-body">{tag}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
