import { useState } from 'react'
import { styled } from 'styled-components'

const StyledFilterBox = styled.div`
  position: absolute;
  width: 248px;
  height: 305px;
  border-radius: 12px;
  padding: 34px;
  background-color: rgb(49, 49, 49);
  top: 50px;
  overflow-y: scroll;
  z-index: 10;
`

const StyledCenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

const StyledFilterWrapper = styled.div`
  position: relative;
  margin-right: 10px;
`

// const StyledFilterButton = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid #ffffff;
//   border-radius: 60px;
//   padding: 6px 20px;
// `

export function FilterType(props) {
  return (
    <StyledFilterBox id="style-1">
      <ul className="filter__list">
        {props.list.map((item) => (
          <li className="filter__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </StyledFilterBox>
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
    <StyledCenterblockFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <StyledFilterWrapper>
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
      </StyledFilterWrapper>
      <StyledFilterWrapper>
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
      </StyledFilterWrapper>
      <StyledFilterWrapper>
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
      </StyledFilterWrapper>
    </StyledCenterblockFilter>
  )
}
