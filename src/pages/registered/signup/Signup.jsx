import { Link, useNavigate } from 'react-router-dom';
import logInLogo from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import Socal from '../socal/Socal';


const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const hendelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        const loading = toast.loading('sign up...')

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                // ...
                toast.success('successfuly sign up', { id: loading })
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                toast.error('error', { id: loading })
            });
    }
    return (
        <div className="block md:flex flex-row-reverse justify-center gap-4 container w-full mx-auto">
            <img src={logInLogo} alt="logInLogo" height={400} width={400} className='' />
            <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-10 shadow-lg  text-black">
                <h1 className="text-3xl font-semibold">Sign up</h1>
                <form onSubmit={hendelSubmit} className="space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            Username
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="username_2"
                            placeholder="Enter username"
                            name="username"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="username_2" className="block font-medium">
                            email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="email_2"
                            placeholder="Enter email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                        <label htmlFor="password_2" className="block font-medium">
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                            id="password_2"
                            placeholder="Enter password"
                            name="password"
                            type="password"
                        />
                        <div className="flex justify-end text-xs">
                            <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <button type='submit' className="w- rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                </form>
                <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
                    Alrady have an account?
                    <Link to={'/login'} className="font-semibold underline">
                        Log In
                    </Link>
                </p>
                <div className="my-8 flex items-center">
                    <hr className="flex-1 border-gray-400" />
                    <div className="mx-4 text-gray-400">OR</div>
                    <hr className="flex-1 border-gray-400" />
                </div>
                {/* Social icons */}
                <Socal />
            </div>
        </div>
    );
};

export default Signup;