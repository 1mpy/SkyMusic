import * as S from './search.styles'

export default function Search() {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  )
}
