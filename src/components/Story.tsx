import { Link } from 'wouter'
import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { story, storyFooter, storyHeader, storyLink, storyTitle } from './Story.css'


export const Story = (props:{
    id: number,
    index: number
}) => {
    const { id, index } = props

    const { data, isLoading } = useSWR(`/story/${id}`,() => getItemInfo(id))

    if (isLoading) {
        return <span>Loading...</span>
    }

    console.log(data)
    const { by, kids, score, title, url } = data

    let domain = ''

    try{
        domain = new URL(url).hostname.replace('www','')
    }catch(error){
        console.error(error)
    }

    return(
        <article className={story}>
            <header className={storyHeader}>
                <small>{index + 1}</small>
                <a
                  className={storyTitle} 
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                    {title}
                </a>
            </header>

            <footer className={storyFooter}>
                <span>{score} points</span>
                <Link href={`/article/${id}`} className={storyLink}>
                    by {by}
                </Link>
                <Link href={`/article/${id}`} className={storyLink}>
                    6 hours ago
                </Link>
                <Link href={`/article/${id}`} className={storyLink}>
                    {kids?.length ?? 0} comments
                </Link>
            </footer>
        </article>
    )
}