import { useState } from 'react'
import * as S from './filter.styles'



export function FilterType(props) {
  return (
    <S.FilterBox id="style-1">
      <S.FilterList>
        {props.list.map((item) => (
          <S.FilterItem key={item}>{item}</S.FilterItem>
        ))}
      </S.FilterList>
    </S.FilterBox>
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
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterWrapper>
        <S.FilterButton
          active={SelectedFilter === 'author'}
          onClick={() => toggleSelected('author')}
          onKeyDown={() => toggleSelected('author')}
          role="button"
          tabIndex="0"
        >
          исполнителю
        </S.FilterButton>
        {SelectedFilter === 'author' && <FilterType list={Authors} />}
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterButton
          active={SelectedFilter === 'bytime'}
          onClick={() => toggleSelected('bytime')}
          onKeyDown={() => toggleSelected('bytime')}
          role="button"
          tabIndex="0"
        >
          году выпуска
        </S.FilterButton>
        {SelectedFilter === 'bytime' && <FilterType list={ByTime} />}
      </S.FilterWrapper>
      <S.FilterWrapper>
        <S.FilterButton
          active={SelectedFilter === 'genre'}
          onClick={() => toggleSelected('genre')}
          onKeyDown={() => toggleSelected('genre')}
          role="button"
          tabIndex="0"
        >
          жанру
        </S.FilterButton>
        {SelectedFilter === 'genre' && <FilterType list={Genres} />}
      </S.FilterWrapper>
    </S.CenterblockFilter>
  )
}
