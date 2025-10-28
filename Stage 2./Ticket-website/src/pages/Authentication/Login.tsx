import styles from './Login.module.css';
import Layout from '../../components/Layout';
import NavBar from '../LandingPage/NavBar';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


interface loginForm {
    name: string;
    email: string;
}


const Login = () => {

    const navigate =  useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm<loginForm>();

    const onSubmit = (data: loginForm) => {
        console.log(data);
        navigate("/dashboard");
    }

    
    return (
        <div className={styles.loginPage}>

            <NavBar />

            <Layout>

            <div className={styles.formContainer}>

                <div className={styles.imageContainer}>
                    <img src="loginPageBackground.jpg" />

                </div>

                <div className={styles.loginForm}>

                    <div className={styles.header}>
                        <h2>Welcome Back!!</h2>
                        </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                        <label>Your Name:</label> <br></br>
                        <input type="text" 
                        placeholder="Enter Your Name Here: "
                        {...register("name", {
                            required: "Name cannot be empty",
                        })}/>
                        {errors.name && <span className={styles.error}>{errors.name.message}</span>}

                        <label>Your Email:</label> <br></br>
                        <input type="email" 
                        placeholder="johndoe@gmail.com"
                        {...register("email", {
                            required: "Email cannot be empty",
                            pattern:{
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email address"
                            } 
                        })}/>
                        {errors.email && <span className={styles.error}>{errors.email.message}</span>}

                        <button type="submit" className={styles.button}>
                            Submit
                        </button>

                    </form>

                    <div className={styles.signUp}>
                        <h5>Do not have an Account?</h5>

                        <Link to="/signUp" className={styles.button}>Sign Up</Link>

                    </div>
                </div>

            </div>

            </Layout>
        </div>
    )
}

export default Login