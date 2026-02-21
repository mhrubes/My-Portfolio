import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function ProjectDetail(props) {
    const { t } = useTranslation()

    let { name, progLang, desc, link, special, year } = props

    const cardStyle = special
        ? {
              minHeight: '215px',
              background: 'linear-gradient(to top, #d9ffa1, #f8ffb6, white)'
          }
        : { minHeight: '215px', background: 'gray' }

    const boldStyle = special
        ? {
              fontWeight: 'bold'
          }
        : {}

    const buttonClass = special ? 'btn color-sweep-animation' : 'btn projectDetailButton'

    return (
        <div className="card m-0" style={cardStyle}>
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title" style={boldStyle}>
                        {name}
                    </h5>
                    <span className="text-muted">{year}</span>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{progLang}</h6>
                <p className="card-text">{t(`aboutPage.${desc}`)}</p>
                <div className="mt-auto">
                    <Link className="text-decoration-none" to={link} target="_blank">
                        <button className={buttonClass}>
                            <span className={special && 'text-white'}>{t('aboutPage.clickHere')}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
