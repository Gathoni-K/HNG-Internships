import styles from './SignUp.module.css';
import Layout from '../../components/Layout';
import NavBar from '../LandingPage/NavBar';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SignUp{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const SignUp = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors},
    } = useForm<SignUp>();

    const onSubmit = (data:SignUp) =>{
        console.log(data);
        navigate("/dashboard");
    }

    return (
        <div>
            <NavBar />
            <Layout>
                <div className={styles.formContainer}>

                    <div className={styles.leftSide}>
                        <img src="signUpPageBackground.jpg" />
                    </div>

                    <div className={styles.rightSide}>

                        <div className={styles.heading}>
                            <h2>Hello There!</h2> <br></br>
                            <h3>Welcome to TicketFlow!</h3>
                        </div>

                        <form className={styles.signUp} onSubmit={handleSubmit(onSubmit)}>
                            <label>Your Name: </label> <br></br>
                            <input type="text" 
                            placeholder="Enter your name here:"
                            {...register ("name", {
                                required: "Name is required",
                            })}/>
                            {errors.name && <span className={styles.error}>{errors.name.message}</span>}

                            <label>Your Email: </label> <br></br>
                            <input type="email" 
                            placeholder="johndoe@gmail.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email",
                                }
                            })}/>
                            {errors.email && <span className={styles.error}>{errors.email.message}</span>}

                            <label>Enter Password: </label> <br></br>
                            <input type="password"
                            placeholder="Enter your password here:"
                            {...register("password", {
                                required: "Password is required",
                                maxLength:{
                                    value: 15,
                                    message: "Password must be less than 15 characters",
                                },
                                minLength:{
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                }
                            })}
                            />
                            {errors.password && <span className={styles.error}>{errors.password.message}</span>}

                            <label>Confirm Password: </label> <br></br>
                            <input type="password" 
                            placeholder="Confirm password here:"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: (value) => {
                                    const password = getValues("password");
                                    return value === password || "Passwords do not match";
                                }
                            })}/>
                            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword.message}</span>}
                            

                            <button type="submit" className={styles.button}>Get Started</button>

                        </form>

                    </div>

                </div>



            </Layout>



        </div>
    )
}

export default SignUp