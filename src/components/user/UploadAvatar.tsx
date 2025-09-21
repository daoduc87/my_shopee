import { useCallback } from "react";
import UserAvatar from "../UserAvatar";
import { useDropzone } from "react-dropzone";
import {
  useGetMeQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
} from "../../services/rootApi";
interface IPropUploadAvatarType {
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}
export default function UploadAvatar({
  image,
  setImage,
}: IPropUploadAvatarType) {
  const [uploadAvatar] = useUploadAvatarMutation();
  const [updateUser] = useUpdateUserMutation();
  const { data, refetch } = useGetMeQuery();
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleUploadAvatar = async () => {
    const res = await uploadAvatar({ image }).unwrap();
    await updateUser({ avatar: res.data });
    refetch();
    setImage(null);
  };
  return (
    <>
      <UserAvatar
        size={100}
        image={image ? URL.createObjectURL(image) : data?.data?.avatar}
      />
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          !image && (
            <button className="mt-5 rounded-sm border border-solid border-gray-200 px-6 py-3">
              Chọn Ảnh
            </button>
          )
        )}
      </div>
      {image && (
        <button
          type="button"
          className="mt-3 rounded bg-primaryColor px-6 py-2 text-white"
          onClick={handleUploadAvatar}
        >
          Tải lên
        </button>
      )}
      <p className="mt-5 text-[#999]">Dụng lượng file tối đa 1 MB</p>
      <p className="text-[#999]">Định dạng:.JPEG, .PNG</p>
    </>
  );
}
