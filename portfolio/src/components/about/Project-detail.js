import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

function ProjectDetail(props) {
    const { t } = useTranslation()

    let { name, progLang, desc, link, year } = props

    return (
        <div className="project-card">
            <div className="project-card-header">
                <span className="project-card-name">
                    <FontAwesomeIcon icon={faFolder} className="project-card-icon" />
                    {name}
                </span>
                <span className="project-card-year">{year}</span>
            </div>
            <div className="skill-pill-row mb-2">
                {progLang.split(',').map((tech) => (
                    <span key={tech} className="skill-pill">
                        {tech.trim()}
                    </span>
                ))}
            </div>
            <p className="project-card-text">{t(`aboutPage.${desc}`)}</p>
            <div className="mt-auto">
                <Link className="text-decoration-none" to={link} target="_blank">
                    <button className="btn aboutButton aboutButton--pulse btn-sm">{t('aboutPage.clickHere')}</button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectDetail
