export type NewSongResponse = {
  result: Array<{ song: any; id: string; name: string }>
}

export type NameObject = { name: string }

export type NewSongResult = Array<{
  id: string
  title: string
  artists: string
  album: string
}>

export interface RankResponse {
  playlist: {
    tracks: Array<{
      ar: NameObject[]
      id: string
      name: string
      alia: string
      al: NameObject
    }>
  }
}

export type RankResult = Array<{
  id: string
  title: string
  alias: string
  artists: string
  album: string
  rank: string | number
  color: boolean
}>

export type RemdResult = Array<{
  id: string
  name: string
  imgUrl: string
  play: string
}>

export interface RemdResponse {
  result: Array<{
    id: string
    name: string
    picUrl: string
    playCount: number
  }>
}

export interface PlayListResponese {
  playlist: {
    id: string
    tags: string[]
    description: string
    name: string
    coverImgUrl: string
    tracks: Array<{
      ar: NameObject[]
      id: string
      name: string
      alia: string[]
      al: NameObject
    }>
  }
}

export interface SearchResponse {
  result: {
    songs: Array<{
      artists: NameObject[]
      id: string
      name: string
      alias: string[]
      album: NameObject
    }>
  }
}

export type CommentResponse = Array<{
  content: string[]
  likedCount: number
  user: { nickname: string; avatarUrl: string }
  time: number
}>
