import { sendEmail } from "@/app/service/email";
import * as yup from "yup";

const yupSchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!yupSchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
      status: 400,
    });
  }
  // const { from, subject, message } = body;
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일을 성공적으로 보냄" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.log(error);
      return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 500,
      });
    });
}
