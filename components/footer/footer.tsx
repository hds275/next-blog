import s from './footer.module.css'
import cn from 'classnames'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={cn('container', s.footer__container)}>
        &copy; {new Date().getFullYear()} Next-Blog. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
