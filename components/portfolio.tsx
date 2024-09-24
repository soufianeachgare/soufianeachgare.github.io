"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown, Briefcase, GraduationCap, User, Code, FolderOpen, Phone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
const navItems = [
  { icon: User, label: "About", sectionId: "about" },
  { icon: Code, label: "Skills", sectionId: "skills" },
  { icon: Briefcase, label: "Experience", sectionId: "experience" },
  { icon: GraduationCap, label: "Education", sectionId: "education" },
  { icon: FolderOpen, label: "Projects", sectionId: "projects" },
]
const user_data = {
  Image_path: "",
  name: "Soufiane Achgare",
  title: "Développeur Full-Stack",
  description: "Ingénieur en informatique polyvalent avec une forte expertise en développement web et mobile, ainsi qu'en intelligence artificielle et big data. Passionné par l'innovation technologique, je suis à la recherche de nouveaux défis pour mettre en œuvre mes compétences et contribuer à des projets ambitieux. Ma maîtrise des langages de programmation, des frameworks et des outils d'analyse de données me permet de concevoir et de développer des solutions robustes et efficaces.",
  socials: [
    { name: "Github", icon: Github, url: "https://github.com/soufianeachgare", color: "#333" },
    { name: "Linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/soufianeachgare", color: "#0077B5" },
    { name: "Mail", icon: Mail, url: "mail:soufianeachgare@gmail.com", color: "#D14836" },
    { name: "Whatsapp", icon: Phone, url: "tel:+212622908964", color: "#D14836" },
  ],
}
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
  { name: "Gestion de Stock", description: "Dans le cadre de mon projet de fin d'année à Vinci, j'ai participé au développement d'une application de gestion de stock. Ce projet m'a permis de travailler en équipe, de mettre en pratique mes connaissances en développement web et d'appréhender les enjeux d'un projet réel. J'ai notamment appris à utiliser Next.js et MongoDB." },
]

const experiences = [
  {
    title: "Analyste Conception et Développement",
    company: "Le Premier Systeme",
    period: "juil. 2024 - août 2024 · 2 mois",
    description: `En tant que stagiaire développeur front-end chez Le Premier Système, j'ai eu la chance de participer à un projet innovant. Mes missions principales consistaient à :
                    -Analyser les besoins fonctionnels et les spécifications techniques
                    -Concevoir des interfaces utilisateur intuitives et esthétiques à l'aide de Figma
                    -Développer les composants front-end avec React et Material UI
                    -Collaborer étroitement avec l'équipe back-end pour assurer une intégration fluide
                  Ce stage m'a permis de consolider mes compétences en développement web et de découvrir les enjeux d'un projet en entreprise. J'ai particulièrement apprécié la possibilité de travailler sur des technologies de pointe et de contribuer à un produit final.`
  },
  {
    title: "Full-stack Developer",
    company: "IronDev",
    period: "avr. 2023 - juin 2023 · 3 mois",
    description: `Dans le cadre de mon projet de fin d'études à Vinci, j'ai développé une application de gestion de stock full-stack. J'ai choisi Next.js pour sa performance et MongoDB pour sa flexibilité. Mes missions comprenaient :
                    -La conception de l'architecture technique
                    -Le développement du frontend avec Next.js
                    -La création de la base de données MongoDB
                    -La mise en place d'une API REST pour les échanges de données
                    Ce projet m'a permis de mettre en pratique mes connaissances théoriques et d'acquérir une expérience significative en développement web. J'ai notamment appris à optimiser les performances d'une application web et à gérer un projet de manière autonome.`
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

      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex">
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
      <nav className="fixed bottom-1 transform translate-x-1 z-40 mx-auto md:hidden" style={{ right: 'calc((100% - 264px) / 2)' }}>
        <div className="absolute -top-[10%] w-[150%] -left-[25%] bg-white blur-[40px] h-full -bottom-[20px]" style={{zIndex: '-1'}}></div>
        <div className="absolute top-0 w-[100%] left-0 h-full bg-white " style={{zIndex: '-1'}}></div>
        <ul className="flex flex-row gap-4 justify-center items-center align-items-center">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <a
                href={`#${item.sectionId}`}
                className={`flex p-2 rounded-lg transition-colors duration-200 ${activeSection === item.sectionId ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="sr-only">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <header id="about" className="md:h-screen container mx-auto px-4 py-8 md:py-16 text-center items-center justify-center flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
          <motion.div
            className="mb-8 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-64 w-64 md:h-96 md:w-80 border-4 border-white shadow-lg">
              <AvatarImage src={user_data.Image_path} alt={user_data.name} />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            {user_data.socials.map((exp, index) => (
                <a key={index} href={exp.url} className={`md:hidden absolute w-10 h-10 ${(index) ==0 ||(index) ==3 ?'left-0 rounded-full bg-gray-500 ':'right-0 rounded-lg bg-blue-600'} ${(index+1)%2 ==0? ' bottom-2':'top-2'}  transition-colors duration-200 flex justify-center items-center text-white`}>
                  <exp.icon className="h-5 w-5" />
                </a>
                
              ))}
            <motion.div
              className="absolute -bottom-4 justify-center gap-4 md:flex hidden"
              style={{ right: 'calc((100% - 208px)/2)' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {user_data.socials.map((exp, index) => (
                <a key={index} href={exp.url} className={`w-10 h-10 ${(index+1)%2 ==0? 'rounded-lg bg-blue-600':'rounded-full bg-gray-500'}  transition-colors duration-200 flex justify-center items-center text-white`}>
                  <exp.icon className="h-5 w-5" />
                </a>
                
              ))}
            </motion.div>
          </motion.div>
          <div className="flex flex-col col-span-2 gap-4 text-start">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {user_data.name}
            </motion.h1>
            <motion.p
              className="text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {user_data.title}
            </motion.p>
            <motion.p
              className="text-lg px-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {user_data.description}
            </motion.p>
          </div>
        </div>

      </header>

      <section id="skills" className="md:h-screen container mx-auto px-4 py-16">
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

      <section id="experience" className="md:h-screen container mx-auto px-4 py-16">
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

      <section id="education" className="md:h-screen container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2">
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
            <ul className="space-y-2 w-full">
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
            <ul className="space-y-2 w-full">
              {langues.map((cert, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-between"
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

      <section id="projects" className="md:h-screen container mx-auto px-4 py-16">
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