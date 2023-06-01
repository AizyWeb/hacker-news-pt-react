import { header, link } from "./Header.css"

export const Header = () => {
    return(
        <nav className={header}>
            <a href="/" className={link}>
                Hacker News
            </a>
        </nav>
    )
}