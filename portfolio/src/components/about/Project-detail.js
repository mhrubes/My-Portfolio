import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

function GithubIcon() {
    return (
        <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
    )
}

// link = live demo (tlačítko jen když existuje), github = repozitář (ikona v hlavičce).
function ProjectDetail(props) {
    const { t } = useTranslation()

    let { name, nameKey, progLang, desc, link, github, year } = props

    // nameKey = volitelný překlad názvu (aboutPage.<nameKey>), jinak se použije name
    if (nameKey) name = t(`aboutPage.${nameKey}`, { defaultValue: name })

    return (
        <div className="project-card">
            <div className="project-card-header">
                <span className="project-card-name">
                    <FontAwesomeIcon icon={faFolder} className="project-card-icon" />
                    {name}
                </span>
                <span className="project-card-meta">
                    {github && (
                        <a className="project-card-github" href={github} target="_blank" rel="noreferrer" title="GitHub" aria-label={`${name} – GitHub`}>
                            <GithubIcon />
                        </a>
                    )}
                    <span className="project-card-year">{year}</span>
                </span>
            </div>
            <div className="skill-pill-row mb-2">
                {progLang.split(',').map((tech) => (
                    <span key={tech} className="skill-pill">
                        {tech.trim()}
                    </span>
                ))}
            </div>
            <p className="project-card-text">{t(`aboutPage.${desc}`)}</p>
            {link && (
                <div className="mt-auto">
                    <Link className="text-decoration-none" to={link} target="_blank">
                        <button className="btn aboutButton aboutButton--pulse btn-sm">{t('aboutPage.clickHere')}</button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ProjectDetail
