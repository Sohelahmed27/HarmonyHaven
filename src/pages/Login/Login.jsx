import { Link } from 'react-router-dom';
import img from  '../../assets/signup.jpg'
import { useForm } from 'react-hook-form';
import GoogleButton from 'react-google-button'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signIn}= useContext(AuthContext)
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => {
  //   const email = data.email;
  //   const password = data.password;
  //   signIn(email, password)
  //   .then(result => {
  //     const user = result.user
  //     console.log(user)
  //   })
  // }
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
   
    const email = form.email.value;
    const password = form.password.value;
   
    console.log(email, password)

    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
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
              <form onSubmit={handleSignIn}>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                />
              </div>

            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
                />

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Register"
                  />
                </div>
              </div>
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
     
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
       
          <div className="text-center lg:text-left">
            
            <img src={img} className='w-[600px] h-[600px]' />
          </div>
          <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-[500px] h-[600px]">
            <div className="card-body">
            <h3 className="text-3xl font-bold text-center">Please login!!</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("Password", {required: true})}
                />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
               
              </div>
              </form>
              
              <p>
              New User? Please <Link className='font-bold text-primary-focus' to="/signup"> register</Link>
              </p>
              <div className="text-center w-[400px]">
              <div className="divider ">
              or</div>
            <div className="flex justify-center">
            <GoogleButton className=''></GoogleButton>
            </div>
              </div>
            </div>
           
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Login;
