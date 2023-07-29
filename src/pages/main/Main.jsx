import MainWindow from '../../components/main/main_window/MainWindow'

function Main({ loading, list,  tracklistError, selectedTrack, setSelectedTrack  }) {
  return (
    <div>
      <MainWindow
        loading={loading}
        list={list}
        tracklistError={tracklistError}
        selectedTrack= {selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  )
}
export default Main
