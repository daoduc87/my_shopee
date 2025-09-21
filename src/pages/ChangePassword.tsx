import { useForm, type SubmitHandler } from "react-hook-form";
import { useUpdateUserMutation } from "../services/rootApi";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/slices/SnackbarSlice";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface formDataType {
  old_password: string;
  new_password: string;
  confirm_password: string;
}
export default function ChangePassword() {
  const dispatch = useDispatch();
  const [updateUser, { isError }] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formDataType>({ mode: "onChange" });
  const onSubmit: SubmitHandler<formDataType> = async (formData) => {
    const res = await updateUser({
      password: formData.old_password,
      new_password: formData.new_password,
    }).unwrap();
    dispatch(openSnackbar({ message: res.message }));
  };
  useEffect(() => {
    if (isError) {
      dispatch(
        openSnackbar({ type: "error", message: "Nhập sai mật khẩu cũ" }),
      );
    }
  }, [isError, dispatch]);
  return (
    <div className="w-full rounded-md bg-white p-6 shadow">
      <Helmet>
        <title>Đổi Mật Khẩu</title>
        <meta
          name="description"
          content="Đây là trang để đổi mật khẩu của bạn"
        />
      </Helmet>
      <h2 className="text-[1.125rem] font-medium capitalize leading-[1.5rem] text-[#333]">
        Đổi Mật Khẩu
      </h2>
      <p className="mt-1 text-[#555]">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>
      <div className="mt-10 flex">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 space-y-8 pl-6 pr-[50px]"
        >
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">
              Mật khẩu cũ
            </div>
            <div className="w-[80%]">
              <input
                type="text"
                className="w-full rounded-sm border border-solid border-gray-200 p-3"
                {...register("old_password", {
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
              {typeof errors.old_password?.message === "string" && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.old_password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">
              Mật khẩu mới
            </div>
            <div className="w-[80%]">
              <input
                type="text"
                className="w-full rounded-sm border border-solid border-gray-200 p-3"
                {...register("new_password", {
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
              {typeof errors.new_password?.message === "string" && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.new_password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">
              Nhập lại mật khẩu
            </div>
            <div className="w-[80%]">
              <input
                type="text"
                className="w-full rounded-sm border border-solid border-gray-200 p-3"
                required
                {...register("confirm_password", {
                  validate: (val: string) => {
                    if (watch("new_password") != val) {
                      return "Mật khẩu không trùng hợp";
                    }
                  },
                })}
              />
              {typeof errors.confirm_password?.message === "string" && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-[20%]"></div>
            <div className="w-[80%]">
              <button
                type="submit"
                className="rounded bg-primaryColor px-6 py-3 text-white"
              >
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
