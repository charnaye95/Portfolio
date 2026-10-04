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
import csharpSkill from '../assets/images/icons8-c-sharp-logo.svg'
import netSkill from '../assets/images/icons8-.net-framework.svg'
import vueSkill from '../assets/images/icons8-vue-js.svg'
import typescriptSkill from '../assets/images/icons8-typescript.svg'
import sqlSkill from '../assets/images/icons8-sql.svg'
import grafanaSkill from '../assets/images/icons8-grafana.svg'
import claudeSkill from '../assets/images/icons8-claude-code.svg'

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
  { name: 'Grafana', icon: grafanaSkill },
  { name: 'Postman', mark: 'P' },
  { name: 'Claude Code', icon: claudeSkill },
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