"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, Briefcase, GraduationCap, User, Code, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const navItems = [
  { icon: User, label: "About", sectionId: "about" },
  { icon: Code, label: "Skills", sectionId: "skills" },
  { icon: Briefcase, label: "Experience", sectionId: "experience" },
  { icon: GraduationCap, label: "Education", sectionId: "education" },
  { icon: FolderOpen, label: "Projects", sectionId: "projects" },
]

const skills = [
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", domain: "Backend" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", domain: "Language" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", domain: "Language" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", domain: "Language" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", domain: "Backend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", domain: "Frontend" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", domain: "Frontend" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", domain: "Frontend" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", domain: "Language" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", domain: "Backend" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", domain: "DevOps" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", domain: "API" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg", domain: "API" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", domain: "Database" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", domain: "Database" },
  { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", domain: "Database" },
]

const projects = [
  { name: "My Professional CV", description: "Mon CV professionnel sous forme de page GitHub." },
  {
    name: "Flent", description: `Flent-RCMS offre une suite complète de fonctionnalités, allant de la gestion de flotte à
                    l'optimisation des réservations et des paiements en ligne via PayPal. Grâce à une interface
                    intuitive, des sites de réservation personnalisés et un suivi GPS en temps réel, c'est une solution
                    complète pour améliorer les opérations de location de voitures.` },
  { name: "Linkme", description: "Outil permettant de créer un lien unique et unifié pour partager du contenu sur différentes plateformes." },
  { name: "E-buvette", description: "Dans le cadre de mon projet de fin d'année à l'ISGA, j'ai participé au développement d'une application de commande en ligne pour une buvette universitaire. Ce projet m'a permis de travailler en équipe, de mettre en pratique mes connaissances en développement web et d'appréhender les enjeux d'un projet réel. J'ai notamment appris à utiliser Spring Boot et à concevoir une architecture MVC." },
]

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description: "Lead development of multiple web applications using React, Node.js, and GraphQL. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description: "Developed and maintained various client projects using MERN stack. Collaborated with design team to implement responsive UI/UX designs."
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2015 - 2017",
    description: "Assisted in the development of WordPress themes and plugins. Gained experience in front-end technologies and PHP."
  }
]

const education = [
  {
    degree: "Diplôme d'ingénieur en informatique",
    institution: "Groupe ISGA",
    year: "2025",
    description: "Specialized in Software Engineering and Machine Learning"
  },
  {
    degree: "Licence professionnelle en génie logicielle",
    institution: "Ecole Supérieure Vinci",
    year: "2023",
    description: "Graduated with honors, Minor in Business Administration"
  },
  {
    degree: "Diplome de technicien supérieur en informatique",
    institution: "Groupe EFET",
    year: "2022",
    description: "Graduated with honors, Minor in Business Administration"
  },
  {
    degree: "DEUG en Sciences Chimie Pysique",
    institution: "Université Ibn Zohr",
    year: "2022",
    description: "Graduated with honors, Minor in Business Administration"
  },
  {
    degree: "Bachaloria en Sciences Physiques",
    institution: "Groupe EFET",
    year: "2020",
    description: "Graduated with honors, Minor in Business Administration"
  }
]

const certifications = [
  { name: "Problem Solving (Basic) Certificate", year: "2024" },
  { name: "Python (Basic) Certificate", year: "2024" },
  { name: "Mastering Laravel Framework and PHP", year: "2023" },
  { name: "Création de sites web avec HTML5 et CSS3", year: "2023" },
  { name: "Programmation avec JavaScript", year: "2023" }
]
const langues = [
  { name: "Arabe", year: "Maternelle" },
  { name: "Francais", year: "Courant" },
  { name: "Anglais", year: "Intermédiaire" },
]
const domains = Array.from(new Set(skills.map(skill => skill.domain)))

export function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("")
  const filteredSkills = selectedDomain
    ? skills.filter(skill => skill.domain === selectedDomain)
    : skills

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50"
        style={{ scaleX }}
      />

      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <a
                href={`#${item.sectionId}`}
                className={`block p-2 rounded-full transition-colors duration-200 ${activeSection === item.sectionId ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header id="about" className="h-screen container mx-auto px-4 py-16 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jane Doe
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer | UI/UX Enthusiast
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </motion.div>
      </header>

      <section id="skills" className="h-screen container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {domains.map(domain => (
            <Badge
              key={domain}
              variant={selectedDomain === domain ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedDomain(selectedDomain === domain ? null : domain)}
            >
              {domain}
            </Badge>
          ))}
        </div>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              <span className="font-medium text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="experience" className="h-screen container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="mr-2" />
                    {exp.title}
                  </CardTitle>
                  <CardDescription>{exp.company} | {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="h-screen container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-2 grid md:grid-cols-2 gap-4 col-span-2">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="mr-2" />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription>{edu.institution} | {edu.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Badge className="mr-2">{cert.year}</Badge>
                  {cert.name}
                </motion.li>
              ))}
            </ul>
            <br />
            <h3 className="text-2xl font-semibold mb-4">Langues</h3>
            <ul className="space-y-2">
              {langues.map((cert, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-space-between"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {cert.name}
                  <Badge className="mr-2">{cert.year}</Badge>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section id="projects" className="h-screen container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className={`text-gray-600 ${expandedProject === index ? '' : 'line-clamp-2'}`}>
                  {project.description}
                </p>
              </div>
              <div className="px-6 py-2 bg-gray-100 flex justify-center">
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${expandedProject === index ? 'rotate-180' : ''}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}