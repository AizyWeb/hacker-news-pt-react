import  useSWR  from 'swr'
import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStories () {
    const { data, error, isLoading } = useSWR('stories', () => getTopStories(1, 3))



    return (
        <>
          <ul style={{listStyle: 'none'}}>
            {data?.map((id:number, index: number) => {
                <li key={id}>
                    <Story id={id} index={index} />
                </li>
            })}
            {/* {isLoading && <li>Loading...</li>} */}
          </ul>
        </>
    )
}