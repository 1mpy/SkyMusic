import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SideBar(props) {
  const user = { name: 'Sergey Ivanov' }
  console.log(props)
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{user?.name}</p>
        <div className="sidebar__avatar" />
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            {props.loading ? (
              <Skeleton width="250px" height="150px" />
            ) : (
              <a className="sidebar__link" href="/#">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className="sidebar__item">
            {props.loading ? (
              <Skeleton width="250px" height="150px" />
            ) : (
              <a className="sidebar__link" href="/#">
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
          <div className="sidebar__item">
            {props.loading ? (
              <Skeleton width="250px" height="150px" />
            ) : (
              <a className="sidebar__link" href="/#">
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
