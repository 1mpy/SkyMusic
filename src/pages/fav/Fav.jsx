import CenterBlock from '../../components/main/center_block/center'
import MainWindow from '../../components/main/main_window/MainWindow'

function Fav({loading, tracklistError}) {
  return (
    <div>
      {/* <MainWindow loading={loading} tracklistError={tracklistError}> */}
        <CenterBlock
          tracklistError={tracklistError}
          loading={loading}
          title={'Мои любимые треки'}
        />
      {/* </MainWindow> */}
    </div>
  )
}

export default Fav
