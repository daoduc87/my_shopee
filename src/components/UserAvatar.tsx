import { Avatar } from "antd";
import { useAppSelector } from "../redux/store";
import { useGetMeQuery } from "../services/rootApi";

interface IPropUserAvatar {
  email?: string;
  image?: string;
  size?: number;
  className?: string;
}
export default function UserAvatar({
  email,
  image,
  size = 33,
  className = "",
}: IPropUserAvatar) {
  const { data } = useGetMeQuery();
  console.log({ data });
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const isMe = !email && !image;
  const avatarFullName = isMe ? userInfo?.data?.email : email;
  const avatarImage = isMe ? data?.data?.avatar : image;
  const avatar = avatarFullName?.[0]?.toUpperCase();
  return (
    <Avatar
      src={avatarImage}
      style={{ width: size, height: size }}
      className={`rounded-[50%] ${className}`}
    >
      {avatar}
    </Avatar>
  );
}
