import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
// import axios from "axios";
import Loading from "../Share/Loading";
import login from "../../Images/Login/login.jpg";
import { toast } from "react-toastify";
import { FaUserAlt } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = async (data) => {
    const email = data.email;
    await signInWithEmailAndPassword(data.email, data.password);
    // const { accessToken } = await axios.post(
    //   "https://boxberry.onrender.com/login",
    //   {
    //     email,
    //   }
    // );
    // console.log(accessToken);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="card w-96 bg-slate-200 shadow-2xl ">
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold">
            {" "}
            <FaUserAlt className="text-primary" /> LogIn
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "use a proper email",
                  },
                })}
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "must be 6 character or longer",
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs btn-primary "
              type="submit"
              value="Log in"
            />
          </form>
          <p>
            <small>
              New to <span>Groca-Grocery</span>?
              <Link className="text-sky-600" to="/signup">
                Create an account
              </Link>
            </small>
          </p>
          <div class="divider">OR</div>
          {/* <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-primary"
          >
            Continue With Google
          </button> */}
        </div>
      </div>
    </div>
    // <div className="flex justify-center h-screen bg-slate-700">
    //   <div className="w-4/12 pt-40">
    //     <img className="w-11/12 rounded-xl" src={login} alt="" />
    //   </div>
    //   <div className="flex justify-center items-center ">
    //     <div className="card w-96 shadow-2xl bg-violet-50">
    //       <div className="card-body">
    //         <h2 className="text-center text-2xl">Login</h2>
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //           <div className="form-control w-full max-w-xs">
    //             <label className="label">
    //               <span className="label-text">Email</span>
    //             </label>
    //             <input
    //               type="email"
    //               placeholder="Your Email"
    //               className="input input-bordered bg-white w-full max-w-xs"
    //               {...register("email", {
    //                 required: {
    //                   value: true,
    //                   message: "Email is Required",
    //                 },
    //                 pattern: {
    //                   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    //                   message: "Provide a valid Email",
    //                 },
    //               })}
    //             />
    //             <label className="label">
    //               {errors.email?.type === "required" && (
    //                 <span className="label-text-alt text-red-500">
    //                   {errors.email.message}
    //                 </span>
    //               )}
    //               {errors.email?.type === "pattern" && (
    //                 <span className="label-text-alt text-red-500">
    //                   {errors.email.message}
    //                 </span>
    //               )}
    //             </label>
    //           </div>
    //           <div className="form-control w-full max-w-xs">
    //             <label className="label">
    //               <span className="label-text">Password</span>
    //             </label>
    //             <input
    //               type="password"
    //               placeholder="Password"
    //               className="input input-bordered bg-white w-full max-w-xs"
    //               {...register("password", {
    //                 required: {
    //                   value: true,
    //                   message: "Password is Required",
    //                 },
    //                 minLength: {
    //                   value: 6,
    //                   message: "Must be 6 characters or longer",
    //                 },
    //               })}
    //             />
    //             <label className="label">
    //               {errors.password?.type === "required" && (
    //                 <span className="label-text-alt text-red-500">
    //                   {errors.password.message}
    //                 </span>
    //               )}
    //               {errors.password?.type === "minLength" && (
    //                 <span className="label-text-alt text-red-500">
    //                   {errors.password.message}
    //                 </span>
    //               )}
    //             </label>
    //           </div>

    //           {signInError}
    //           <input
    //             className="btn btn-orange-500 w-full text-white"
    //             type="submit"
    //             value="Login"
    //           />
    //         </form>
    //         <p>
    //           <small>
    //             New to BoxBerry Motor?{" "}
    //             <Link to="/createAccount" className="text-orange-600 font-bold">
    //               Create New Account
    //             </Link>
    //           </small>
    //         </p>
    //         <div className="divider">OR</div>
    //         <button
    //           onClick={() => signInWithGoogle()}
    //           className="btn btn-outline font-black"
    //         >
    //           Continue With Google
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
