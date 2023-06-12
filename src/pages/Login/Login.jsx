import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from  '../../assets/signup.jpg'
import { useForm } from 'react-hook-form';
import GoogleButton from 'react-google-button'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
  const[error, setError] = useState('')
  const {signIn}= useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    signIn(email, password)
    .then(result => {
      const user = result.user
      console.log(user)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully logged in',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true });
      setError(error)
    })
  }
 
 
  return (
    <div>
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={img} className="w-[600px] h-[700px]" />
          </div>
          <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-[500px] h-[700px]">
            <div className="card-body">
              <h3 className="text-3xl font-bold text-center">
                Please Log!!
              </h3>
              <form onSubmit={ handleSubmit(onSubmit)}>
            
              <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered"
          name="email"
          {...register("email", { required: true })}
        />
      </div>

            
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            name="password"
            {...register("password", { required: true })}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {/* Toggle password visibility */}
            <p>Show password</p>
            <FaEye
            onClick={() => {
                const passwordInput = document.querySelector('input[name="password"]');
                passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
              }}
             ></FaEye>
            
          </span>
        </div>
      </div>


                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                  />
                </div>
             {error && <p>Password is incorrect</p>}
              </form>
              <p>
                New User? Please{" "}
                <Link className="font-bold text-primary-focus" to="/signup">
                  {" "}
                  register
                </Link>
              </p>
              <div className="text-center w-[400px]">
                <div className="divider ">or</div>
                <div className="flex justify-center">
                  <GoogleButton className=""></GoogleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
    </div>
  );
};

export default Login;
