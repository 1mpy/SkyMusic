import { styled } from 'styled-components'

import PlaylistItem from './playlistitem'

const SlyledContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`

export default function Playlist(props) {
  const list = [
    { title: 'Guilt', author: 'Nero', album: 'Welcome Reality', time: '4:44' },
    {
      title: 'Elektro',
      author: 'Dynoro, Outwork, Mr. Gee',
      album: 'Elektro',
      time: '2:22',
    },
    {
      title: 'I’m Fire',
      author: 'Ali Bakgor',
      album: 'I’m Fire',
      time: '2:22',
    },
    {
      title: 'Non Stop',
      subtitle: '(Remix)',
      author: 'Стоункат, Psychopath',
      album: 'Non Stop',
      time: '4:12',
    },
    {
      title: 'Run Run',
      subtitle: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      album: 'Run Run',
      time: '2:54',
    },
    {
      title: 'Eyes on Fire',
      subtitle: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      album: 'Eyes on Fire',
      time: '5:20',
    },
    {
      title: 'Mucho Bien',
      subtitle: '(Hi Profile Remix)',
      author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      album: 'Mucho Bien',
      time: '3:41',
    },
    {
      title: 'Knives n Cherries',
      author: 'minthaze',
      album: 'Captivating',
      time: '1:48',
    },
    {
      title: 'How Deep Is Your Love',
      author: 'Calvin Harris, Disciples',
      album: 'How Deep Is Your Love',
      time: '3:32',
    },
    {
      title: 'Morena',
      author: 'Tom Boxer',
      album: 'Soundz Made in Romania',
      time: '3:36',
    },
    { title: 'Guilt', author: 'Nero', album: 'Welcome Reality', time: '4:44' },
  ]
  return (
    <SlyledContentPlaylist>
      {list.map((item) => (
        <PlaylistItem
          title={item?.title}
          subtitle={item?.subtitle}
          author={item?.author}
          album={item?.album}
          time={item?.time}
          loading={props.loading}
        />
      ))}
    </SlyledContentPlaylist>
  )
}
