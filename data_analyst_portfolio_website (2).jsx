import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  BarChart3,
  Database,
  LayoutDashboard,
  Download,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  const skills = [
    "SQL",
    "Python",
    "Power BI",
    "MS Excel",
    "Tableau (Basic)",
    "Data Cleaning",
    "EDA",
    "KPI Tracking",
    "Dashboard Development",
    "Data Visualization",
    "Data Modeling",
    "Dashboard Automation",
  ];

  const stats = [
    { label: "Internships", value: "2" },
    { label: "Dashboards Built", value: "3+" },
    { label: "Projects", value: "3" },
    { label: "Graduation", value: "2026" },
  ];

  const projects = [
    {
      title: "End-to-End Cricket World Cup 2022 Player Analysis",
      tools: ["SQL", "Power BI"],
      description:
        "Collected, cleaned, and analyzed player performance data. Built interactive dashboards to visualize trends and present insights through data storytelling.",
      highlights: [
        "Data cleaning & transformation",
        "Interactive player performance dashboard",
        "Insight-driven visual storytelling",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "Sales Performance Dashboard",
      tools: ["SQL", "Power BI"],
      description:
        "Analyzed sales data to identify revenue trends and top-performing products. Designed KPI dashboards to support strategic business decisions.",
      highlights: [
        "Revenue trend analysis",
        "Top product identification",
        "KPI-focused dashboard design",
      ],
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      title: "Customer Churn & Risk Analysis Dashboard",
      tools: ["SQL", "Python", "Power BI"],
      description:
        "Built an end-to-end churn analysis workflow to identify drivers of customer attrition and visualize revenue risk for stakeholder reporting.",
      highlights: [
        "Churn driver analysis",
        "Risk visualization",
        "Stakeholder-ready reporting",
      ],
      icon: <Database className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center"
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white border px-3 py-1 text-sm text-slate-600 shadow-sm">
                <Sparkles className="w-4 h-4" /> Aspiring Data Analyst
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Praveen K</h1>
              <p className="text-xl font-medium text-slate-700">Data Analyst • SQL • Power BI • Python</p>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Motivated and detail-oriented Data Analyst with hands-on internship experience in SQL, Power BI,
                Python, and Excel. I transform raw data into actionable insights through KPI tracking, dashboard
                development, and data storytelling to support smarter business decisions.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a href="mailto:praveenkicha01@gmail.com">
                  <Button className="rounded-2xl">
                    <Mail className="w-4 h-4 mr-2" /> Contact Me
                  </Button>
                </a>
                <a href="#projects">
                  <Button variant="secondary" className="rounded-2xl">
                    View Projects <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Button variant="outline" className="rounded-2xl" disabled>
                  <Download className="w-4 h-4 mr-2" /> Resume (Add PDF Link)
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 pt-2 text-sm">
                <a
                  href="https://linkedin.com/in/praveen-kannan-6862382a2"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 bg-white shadow-sm hover:shadow transition"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  href="https://github.com/Praveenmarshal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 bg-white shadow-sm hover:shadow transition"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Stats card */}
            <Card className="rounded-2xl shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border bg-slate-50 p-4 text-center">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} className="rounded-xl px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Internship Experience
        </h2>
        <div className="grid gap-4">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Data Analytics Intern — ProSolutions Company, Trichy</h3>
              <p className="text-sm text-slate-500">June 2024 – August 2024</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Analyzed structured datasets using SQL to support KPI analysis and business reporting.</li>
                <li>Performed data cleaning and transformation to improve reporting accuracy.</li>
                <li>Built 3 interactive Power BI dashboards analyzing 1,000+ rows to track performance metrics.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-2">
              <h3 className="text-lg font-semibold">Python & SQL Intern — ProSolutions Company, Trichy</h3>
              <p className="text-sm text-slate-500">January 2025 – May 2025</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Conducted data analysis and automation using Python and SQL to identify trends and insights.</li>
                <li>Applied exploratory data analysis (EDA) techniques to uncover actionable patterns.</li>
                <li>Generated reporting outputs to support data-driven business decisions.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="rounded-2xl h-full shadow-sm hover:shadow-md transition">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-800">
                    {project.icon}
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{project.description}</p>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="rounded-xl">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h2>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg">B.Tech — Artificial Intelligence & Data Science</h3>
            <p className="text-slate-700">Vetrivinayaha College of Engineering and Technology | Anna University</p>
            <p className="text-sm text-slate-500">2022 – 2026</p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Praveen K — Data Analyst Portfolio</p>
          <div className="flex items-center gap-3">
            <a href="mailto:praveenkicha01@gmail.com" className="hover:underline inline-flex items-center gap-1">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a
              href="https://linkedin.com/in/praveen-kannan-6862382a2"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/Praveenmarshal"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
