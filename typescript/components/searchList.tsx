import useSWR from 'swr'
import { get } from '../apis/request'
import { useDebounce } from '../utils/hooks'
import * as PARSE from '../utils/index'
import Song from './song'

interface Props {
  searchValue: string
}

/**
 * 搜索结果
 */
const searchList = ({ searchValue }: Props) => {
  const debounceValue = useDebounce(searchValue, 1000)
  const { data, error } = useSWR(
    debounceValue ? `/search?keywords=${debounceValue}` : null,
    get,
  ) as { data: { result: { songs: any[] } }; error?: any }

  if (error) {
    return <div>error: {error}</div>
  }

  if (!data) {
    return <div>loading...</div>
  }

  if (
    !Array.isArray(data?.result?.songs) ||
    data?.result?.songs?.length === 0
  ) {
    return <div>搜索结果为空</div>
  }

  const searchResult = PARSE.search(data)

  return (
    <>
      {searchResult.map((value) => (
        <Song data={value} key={value.id} />
      ))}
    </>
  )
}

export default searchList
