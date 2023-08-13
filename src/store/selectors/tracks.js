export const playlistSelector = (store) => store.player.playlist

export const trackSelector = (store) => store.player.track

export const isTrackPlayingSelector = (store) => store.player.playing

export const shufflePlaylistSelector = (store) => store.player.shuffledPlaylist

export const repeatTrackSelector = (store) => store.player.repeat
