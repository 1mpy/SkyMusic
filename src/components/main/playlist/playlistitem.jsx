import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { styled } from 'styled-components'

const SlyledPlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`

const SlyledPlaylistTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

const SlyledTrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
`

const SlyledTrackTitleImg = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`

const SlyledTrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

const SlyledTrackTitleText = styled.div`
  width: 100%;
`

const SlyledTrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

const SlyledTrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`

const SlyledTrackAuthor = styled.div`
  width: 321px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

const SlyledTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`

const SlyledTrackAuthorAlbum = styled.div`
  width: 245px;
`
const SlyledTrackAuthorAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`

const SlyledTrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`

const SlyledTrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`

export default function PlaylistItem(props) {
  return (
    <SlyledPlaylistItem>
      <SlyledPlaylistTrack>
        <SlyledTrackTitle>
          <SlyledTrackTitleImg>
            {props.loading ? (
              <Skeleton width="51px" height="51px" />
            ) : (
              <SlyledTrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </SlyledTrackTitleSvg>
            )}
          </SlyledTrackTitleImg>
          <SlyledTrackTitleText>
            {props.loading ? (
              <Skeleton />
            ) : (
              <SlyledTrackTitleLink href="http://">
                {props.title} <SlyledTrackTitleSpan />
              </SlyledTrackTitleLink>
            )}
          </SlyledTrackTitleText>
        </SlyledTrackTitle>
        <SlyledTrackAuthor>
          {props.loading ? (
            <Skeleton />
          ) : (
            <SlyledTrackAuthorLink href="http://">
              {props.author}
            </SlyledTrackAuthorLink>
          )}
        </SlyledTrackAuthor>
        <SlyledTrackAuthorAlbum>
          {props.loading ? (
            <Skeleton />
          ) : (
            <SlyledTrackAuthorAlbumLink href="http://">
              {props.album}
            </SlyledTrackAuthorAlbumLink>
          )}
        </SlyledTrackAuthorAlbum>
        <div className="track__time">
          {props.loading ? (
            <Skeleton />
          ) : (
            <>
              <SlyledTrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </SlyledTrackTimeSvg>
              <SlyledTrackTimeText>{props.time}</SlyledTrackTimeText>
            </>
          )}
        </div>
      </SlyledPlaylistTrack>
    </SlyledPlaylistItem>
  )
}
