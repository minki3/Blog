export interface BannerType {
  message: string;
  state: "success" | "error";
}

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerType;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "!!" : "..";
  return (
    <p
      className={`p-2 rounded-lg text-center ${
        isSuccess ? "bg-green-300 " : " bg-red-300"
      }`}
    >
      {message}
      {icon}
    </p>
  );
}
