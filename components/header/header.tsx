import Link from 'next/link'
import s from './header.module.css'
import cn from 'classnames'

const Header = () => {
  return (
    <header>
      <div className={cn('container', s.container)}>
        <Link href="/">
          <a className={s.logo}>next-blog</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
