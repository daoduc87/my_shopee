import { Select, type ConfigProviderProps } from "antd";
import { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import _ from "lodash";
import { useGetMeQuery, useUpdateUserMutation } from "../services/rootApi";
import { useDispatch } from "react-redux";
import { saveUserData } from "../redux/slices/UserSlice";
import { useAppSelector } from "../redux/store";
import UploadAvatar from "../components/user/UploadAvatar";
import { openSnackbar } from "../redux/slices/SnackbarSlice";
import { Helmet } from "react-helmet";

interface formDataType {
  name: string;
  phone: string | number;
  address: string;
  date: number;
  month: number;
  year: number;
}
type SizeType = ConfigProviderProps["componentSize"];
export default function AccountProfile() {
  const dispatch = useDispatch();
  const myEmail = useAppSelector((state) => state.auth.userInfo.data?.email);
  const [updateUser] = useUpdateUserMutation();
  const { refetch } = useGetMeQuery();
  const [size] = useState<SizeType>("middle");
  const [image, setImage] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formDataType>({ mode: "onChange" });
  const onSubmit: SubmitHandler<formDataType> = async (formData) => {
    const dateOfBirth = new Date(formData.year, formData.month, formData.date);
    const res = await updateUser({
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      date_of_birth: dateOfBirth,
    }).unwrap();
    dispatch(saveUserData(res));
    dispatch(openSnackbar({ message: res.message }));
    refetch();
  };
  return (
    <div className="w-full rounded-md bg-white p-6 shadow">
      <Helmet>
        <title>Hồ Sơ Tài Khoản</title>
        <meta
          name="description"
          content="Đây là hồ sơ để cài đặt tài khoản người dùng"
        />
      </Helmet>
      <h2 className="text-[1.125rem] font-medium capitalize leading-[1.5rem] text-[#333]">
        Hồ sơ của tôi
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
            <div className="w-[20%] text-right text-[#555555cc]">Email</div>
            <p className="w-[80%] text-base font-normal">{myEmail}</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">Tên</div>
            <div className="w-[80%]">
              <input
                type="text"
                className="w-full rounded-sm border border-solid border-gray-200 p-3"
                {...register("name", {
                  required: "Vui lòng nhập tên",
                  maxLength: {
                    value: 160,
                    message: "Tên tối đa 160 ký tự",
                  },
                })}
              />
              {typeof errors.name?.message === "string" && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">
              Số điện thoại
            </div>
            <div className="w-[80%]">
              <input
                type="text"
                className="w-full rounded-sm border border-solid border-gray-200 p-3"
                {...register("phone", {
                  required: "Vui lòng nhập số điện thoại",
                  maxLength: {
                    value: 20,
                    message: "Số điện thoại tối đa 20 ký tự",
                  },
                })}
              />
              {typeof errors.phone?.message === "string" && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">Địa chỉ</div>
            <div className="w-[80%]">
              <input
                type="text"
                className="w-full rounded-sm border border-solid border-gray-200 p-3"
                {...register("address", {
                  required: "Vui lòng nhập địa chỉ",
                  maxLength: {
                    value: 160,
                    message: "Địa chỉ tối đa 160 ký tự",
                  },
                })}
              />
              {typeof errors.address?.message === "string" && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[20%] text-right text-[#555555cc]">Ngày sinh</div>
            <div className="flex w-[80%] justify-between">
              <Controller
                name="date"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={[
                        { value: "", label: "Chọn ngày", disabled: true },
                        ..._.range(1, 32).map((day) => ({
                          value: day,
                          label: day,
                        })),
                      ]}
                      className="h-10 w-[30%]"
                      size={size}
                      {...field}
                    />
                  );
                }}
              />

              <Controller
                name="month"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={[
                        { value: "", label: "Chọn tháng", disabled: true },
                        ..._.range(1, 13).map((month) => ({
                          value: month,
                          label: month,
                        })),
                      ]}
                      className="h-10 w-[30%]"
                      size={size}
                      {...field}
                    />
                  );
                }}
              />
              <Controller
                name="year"
                control={control}
                render={({ field }) => {
                  return (
                    <Select
                      options={[
                        { value: "", label: "Nhập năm", disabled: true },
                        ..._.range(1990, 2026).map((year) => ({
                          value: year,
                          label: year,
                        })),
                      ]}
                      className="h-10 w-[30%]"
                      size={size}
                      {...field}
                    />
                  );
                }}
              />
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
        <div className="mt-5 flex w-[17.5rem] flex-col items-center">
          <UploadAvatar image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}
