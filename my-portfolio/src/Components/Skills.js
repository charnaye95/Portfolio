import React from 'react'
import { motion } from "framer-motion"
import reactSkill from '../assets/images/icons8-react-native-color.svg'
import javascriptSkill from '../assets/images/icons8-javascript.svg'
import nodeSkill from '../assets/images/icons8-node-js.svg'
import htmlSkill from '../assets/images/icons8-html-5.svg'
import cssSkill from '../assets/images/icons8-css3.svg'
import gitSkill from '../assets/images/icons8-git.svg'
import pythonSkill from '../assets/images/icons8-python.svg'
import postgresSkill from '../assets/images/icons8-postgresql.svg'
import mongoSkill from '../assets/images/icons8-mongodb-a-cross-platform-document-oriented-database-program-75.png'
import csharpSkill from '../assets/images/icons8-c-sharp-logo-48.png'
import netSkill from '../assets/images/icons8-.net-framework-48.png'
import vueSkill from '../assets/images/icons8-vue.js-48.png'
import typescriptSkill from '../assets/images/icons8-typescript-48.png'
import sqlSkill from '../assets/images/icons8-sql-48.png'
import grafanaSkill from '../assets/images/icons8-grafana-48.png'
import claudeSkill from '../assets/images/icons8-claude-ai-48.png'
import jiraSkill from '../assets/images/icons8-jira-48.png'
import bitbucketSkill from '../assets/images/icons8-bitbucket-48.png'

const skills = [
  { name: 'C#', icon: csharpSkill },
  { name: '.NET', icon: netSkill },
  { name: 'Vue.js', icon: vueSkill },
  { name: 'TypeScript', icon: typescriptSkill },
  { name: 'JavaScript', icon: javascriptSkill },
  { name: 'React', icon: reactSkill },
  { name: 'Node.js', icon: nodeSkill },
  { name: 'HTML', icon: htmlSkill },
  { name: 'CSS', icon: cssSkill },
  { name: 'SQL', icon: sqlSkill },
  { name: 'PostgreSQL', icon: postgresSkill },
  { name: 'MongoDB', icon: mongoSkill },
  { name: 'Cypress', mark: 'C' },
  { name: 'NUnit', mark: 'N' },
  { name: 'Grafana', icon: grafanaSkill },
  { name: 'Postman', mark: 'P' },
  { name: 'REST APIs', mark: 'API' },
  { name: 'Claude Code', icon: claudeSkill },
  { name: 'GitHub Copilot', mark: 'AI' },
  { name: 'Git/GitHub', icon: gitSkill },
  { name: 'Bitbucket', icon: bitbucketSkill },
  { name: 'Jira', icon: jiraSkill },
  { name: 'Python', icon: pythonSkill },
]


function Skills() {
  return (
    <motion.div className='banner' id='skills'
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}>
      <div>
        <h2 className='title'>
          Skills
        </h2>
      </div>
      <div className='skills-container'>
        <div className='skills'>
          {skills.map(({ name, icon, mark }) => (
            <motion.div
              key={name}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
              className='skill-item'
            >
              {icon
                ? <img src={icon} alt='' />
                : <span className='skill-placeholder' aria-hidden='true'>{mark}</span>}
              <p className='skill-text'>{name}</p>
            </motion.div>
          ))}
        </div>

      </div>

    </motion.div>
  )
}

export default Skills