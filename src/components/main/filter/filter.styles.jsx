import { useState } from 'react'

export function FilterType(props) {
  return (
    <div className="filter__box" id="style-1">
      <ul className="filter__list">
        {props.list.map((item) => (
          <li className="filter__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Filter() {
  const Authors = [
    'Michael Jackson',
    'Frank Sinatra',
    'Calvin Harris',
    'Zhu',
    'Arctic Monkeys',
    'Nero',
    'Dynoro',
    'Outwork',
    'Mr. Gee',
    'Ali Bakgor',
    'Стоункат',
    'Psychopath',
    'Jaded',
    'Will Clarke',
    'AR/CO',
  ]
  const Genres = [
    'Рок',
    'Хип-Хоп',
    'Техно',
    'Инди',
    'Drum and bass',
    'Psychedelic trance',
    'Trance',
    'Progressive Trance',
    'Chillout',
    'Lounge',
    'Ambient',
    'Synthwave',
    'Dubstep',
    'Classic',
    'Punk',
  ]
  const ByTime = ['более новые', 'более старые']

  const [SelectedFilter, setFilter] = useState(true)
  const toggleSelected = (filter) => {
    setFilter(SelectedFilter === filter ? null : filter)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__wrapper">
        <div
          className={
            SelectedFilter === 'author'
              ? 'filter__button  _btn-text active'
              : 'filter__button  _btn-text'
          }
          onClick={() => toggleSelected('author')}
          onKeyDown={() => toggleSelected('author')}
          role="button"
          tabIndex="0"
        >
          исполнителю
        </div>
        {SelectedFilter === 'author' && <FilterType list={Authors} />}
      </div>
      <div className="filter__wrapper">
        <div
          className={
            SelectedFilter === 'bytime'
              ? 'filter__button  _btn-text active'
              : 'filter__button  _btn-text'
          }
          onClick={() => toggleSelected('bytime')}
          onKeyDown={() => toggleSelected('bytime')}
          role="button"
          tabIndex="0"
        >
          году выпуска
        </div>
        {SelectedFilter === 'bytime' && <FilterType list={ByTime} />}
      </div>
      <div className="filter__wrapper">
        <div
          className={
            SelectedFilter === 'genre'
              ? 'filter__button  _btn-text active'
              : 'filter__button  _btn-text'
          }
          onClick={() => toggleSelected('genre')}
          onKeyDown={() => toggleSelected('genre')}
          role="button"
          tabIndex="0"
        >
          жанру
        </div>
        {SelectedFilter === 'genre' && <FilterType list={Genres} />}
      </div>
    </div>
  )
}
