import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/signup.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  const { signUp, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

  const {
    register,
    reset,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    signUp(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log("User updated");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "USer created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((err) => console.log(err));
    });

   
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");      
    })
    .catch((error) => {    
      console.log(error);
    });
  } 



  return (
    <div>
      <div className="hero min-h-screen bg-base-200 h-[1000px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={img} className="w-[600px] h-[700px]" />
          </div>
          <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-[500px] h-[700px]">
            <div className="card-body">
              <h3 className="text-3xl font-bold text-center ">
                Please Register!!
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    name="email"
                    {...register("email", { required: true })}
                  />

                  {errors.email?.type === "required" && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo_URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="photo"
                    className="input input-bordered"
                    name="photo"
                    {...register("photo", { required: true })}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-600">Photo is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/,
                    })}
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      password must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      password must be a uppercase, a spacial characters
                    </span>
                  )}

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="input input-bordered"
                      name="confirmPassword"
                      {...register("confirmPassword", { required: true })}
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-600">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>

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
                Already have an account? Please{" "}
                <Link className="font-bold text-primary-focus" to="/login">
                  {" "}
                  login
                </Link>
              </p>
              <div className="text-center w-[400px]">
                <div className="divider ">or</div>
                <div className="flex justify-center">
                  <GoogleButton onClick={handleGoogleSignIn} className=""></GoogleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
