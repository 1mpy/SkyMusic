import MainWindow from '../../components/main/main_window/MainWindow'

function Main({ loading,  tracklistError, selectedTrack, setSelectedTrack  }) {
  return (
    <div>
      <MainWindow
        loading={loading}

        tracklistError={tracklistError}
        selectedTrack= {selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </div>
  )
}
export default Main
