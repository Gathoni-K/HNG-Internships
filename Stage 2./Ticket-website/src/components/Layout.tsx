//component holding all the persistent parts of our website
import Footer from './Footer';
import styles from './Layout.module.css';


const Layout = ({ children }: {children:React.ReactNode}) => {
    return (
        <div className={styles.mainLayout}>
            <main>
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout