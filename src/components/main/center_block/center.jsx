import Search from '../search_bar/search'
import Filter from '../filter/filter'
import SideBar from '../side_menu/sideBar'
import Playlist from '../playlist/playlist'

export function CenterBlock() {
  return (
    <div class="main__centerblock centerblock">
      <Search />
      <h2 class="centerblock__h2">Треки</h2>
      <Filter />
      <div class="centerblock__content">
        <div class="content__title playlist-title">
          <div class="playlist-title__col col01">Трек</div>
          <div class="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div class="playlist-title__col col03">АЛЬБОМ</div>
          <div class="playlist-title__col col04">
            <svg class="playlist-title__svg" alt="time">
              <use xlink:href="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <Playlist />
        <SideBar />
      </div>
    </div>
  )
}
