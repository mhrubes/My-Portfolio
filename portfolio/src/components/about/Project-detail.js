import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ProjectDetail(props) {
    const { t } = useTranslation();

    let { name, progLang, desc, link } = props

    return (
        <div className='card m-0' style={{ minHeight: '215px' }}>
            <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{progLang}</h6>
                <p className='card-text'>{t(`aboutPage.${desc}`)}</p>
                <div className='mt-auto'>
                    <Link className='text-decoration-none' to={link} target='_blank'>
                        <button className='btn projectDetailButton'>
                            <span className=''>{t('aboutPage.clickHere')}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
