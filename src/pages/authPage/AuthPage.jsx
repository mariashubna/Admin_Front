import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import styles from "./AuthPage.module.css";
import { useAuthRedux } from "@/hooks/useAuthRedux";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const AuthPage = ({ onClose }) => {
  const { login, isSignInLoading } = useAuthRedux();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");
  const isFormValid =
    !emailValue || !passwordValue || errors.email || errors.password;

  const submitHandler = async (data) => {
    try {
      await login(data);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          {...register("password")}
          error={errors.password?.message}
          required
        />

        <button
          type="submit"
          disabled={isSignInLoading || isFormValid}
          isLoading={isSignInLoading}
          className={styles.fullWidth}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
