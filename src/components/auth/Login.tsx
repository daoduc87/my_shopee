import { Button } from "antd";
import HeaderAuth from "./HeaderAuth";
import { Link, useNavigate } from "react-router";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../firebaseconfig/config";
import { useForm, type SubmitErrorHandler } from "react-hook-form";
import { useLoginMutation } from "../../services/rootApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { openSnackbar } from "../../redux/slices/SnackbarSlice";
import { login } from "../../redux/slices/AuthSlice";

interface IFormData {
  email: string;
  password: string;
}
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signin, { isSuccess, isError, error }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const onSubmit: SubmitErrorHandler<IFormData> = async (formData) => {
    const res = await signin({
      email: formData.email,
      password: formData.password,
    }).unwrap();
    dispatch(
      login({
        access_token: res.data.access_token.replace("Bearer ", ""),
        refresh_token: res.data.refresh_token.replace("Bearer ", ""),
      }),
    );
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(openSnackbar({ message: "Đăng nhập thành công" }));
      navigate("/home", {
        state: {
          name: getValues.name,
        },
      });
    }
    if (isError) {
      dispatch(
        openSnackbar({
          type: "error",
          message:
            (error as any)?.data?.data?.password ||
            (error as any)?.data?.message,
        }),
      );
    }
  }, [isSuccess, isError, dispatch, navigate, getValues.name]);
  async function signInGoogle() {
    await signInWithPopup(auth, googleProvider);
    navigate("/home");
  }
  async function signInFacebook() {
    await signInWithPopup(auth, facebookProvider);
    navigate("/home");
  }
  return (
    <>
      <HeaderAuth title="Đăng nhập" />
      <div className="bg-[#ee4d2d]">
        <div className="mx-auto flex max-w-screen-xl items-center">
          <div className="relative h-[600px] w-full flex-1 bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-824ir-mei8shzqcverb4')] bg-contain bg-center bg-no-repeat">
            <form
              action=""
              className="absolute right-10 top-1/2 mr-20 w-[400px] -translate-y-1/2 rounded-md bg-white p-7"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="mb-7 text-[1.25rem] font-normal text-[#222]">
                Đăng nhập
              </h1>
              <div className="space-y-3">
                <div className="form-group w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-sm border border-solid border-gray-300 p-3"
                    {...register("email", {
                      required: "Email là bắt buộc",
                      minLength: {
                        value: 5,
                        message: "Email phải có ít nhất 5 ký tự",
                      },
                      maxLength: {
                        value: 160,
                        message: "Email không được vượt quá 160 ký tự",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email không hợp lệ",
                      },
                    })}
                  />
                  <p className="error-message">
                    {typeof errors?.email?.message === "string"
                      ? errors.email.message
                      : ""}
                  </p>
                </div>
                <div className="form-group w-full">
                  <input
                    type="text"
                    placeholder="Mật khẩu"
                    className="w-full rounded-sm border border-solid border-gray-300 p-3"
                    {...register("password", {
                      required: "Mật khẩu là bắt buộc",
                      minLength: {
                        value: 6,
                        message: "Mật khẩu phải có ít nhất 6 ký tự",
                      },
                      maxLength: {
                        value: 160,
                        message: "Mật khẩu không được vượt quá 160 ký tự",
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/,
                        message:
                          "Mật khẩu phải chứa ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt",
                      },
                    })}
                  />
                  <p className="error-message">
                    {typeof errors?.password?.message === "string"
                      ? errors.password.message
                      : ""}
                  </p>
                </div>
              </div>
              <Button className="btn-primary mt-5 w-full" htmlType="submit">
                ĐĂNG NHẬP
              </Button>
              <a href="#!" className="mt-3 block text-[0.75rem] text-[#05a]">
                Quên mật khẩu
              </a>
              <div className="mt-[10px] flex items-center gap-4">
                <div className="h-[1px] w-[136.6px] bg-[#dbdbdb]"></div>
                <p className="text-[0.75rem] text-[#ccc]">HOẶC</p>
                <div className="h-[1px] w-[136.6px] bg-[#dbdbdb]"></div>
              </div>
              <div className="mt-[19px] flex justify-between">
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-sm border border-solid border-gray-300 px-10 py-2"
                  onClick={signInFacebook}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png"
                    alt=""
                    className="h-[22px] w-[22px]"
                  />
                  <p className="text-[0.875rem]">Facebook</p>
                </div>
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-sm border border-solid border-gray-300 px-10 py-2"
                  onClick={signInGoogle}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                    alt=""
                    className="h-[22px] w-[22px]"
                  />
                  <p className="text-[0.875rem]">Google</p>
                </div>
              </div>
              <p className="mt-7 text-center text-[0.875rem] text-[#00000042]">
                Bạn mới biết đến Shopee?
                <Link to={"/register"} className="text-primaryColor">
                  Đăng ký
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
