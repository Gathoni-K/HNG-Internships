import NavBar from './NavBar';
import Layout from '../../components/Layout';
import HeroSection from './HeroSection';


const LandingPage = () => {
    return (
        <div>
            <Layout>
                <NavBar />
                <HeroSection />
            </Layout>
        </div>
    )
    }

export default LandingPage