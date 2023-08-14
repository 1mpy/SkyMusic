import CenterBlock from '../../components/main/center_block/center'
import MainWindow from '../../components/main/main_window/MainWindow'

function Main({ loading, tracklistError, selectedTrack, setSelectedTrack }) {
  return (
    <div>
      {/* <MainWindow
        loading={loading}
        tracklistError={tracklistError}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      > */}
        <CenterBlock
          tracklistError={tracklistError}
          loading={loading}
          title={'Треки'}
        />
      {/* </MainWindow> */}
    </div>
  )
}
export default Main
