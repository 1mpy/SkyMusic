import { useParams } from 'react-router-dom'
import CenterBlock from '../../components/main/center_block/center'
import MainWindow from '../../components/main/main_window/MainWindow'

function Category({ loading, tracklistError }) {
  const params = useParams()
  const playlistType =
    params.id === `:1`
      ? 'Плейлист дня'
      : params.id === ':2'
      ? '100 танцевальных хитов'
      : 'Инди-заряд'

  return (
    <div>
      {/* <MainWindow loading={loading} tracklistError={tracklistError}> */}
        <CenterBlock
          tracklistError={tracklistError}
          loading={loading}
          title={playlistType}
        />
      {/* </MainWindow> */}
    </div>
  )
}
export default Category
