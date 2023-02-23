export const config = {
  runtime: "edge",
};

export default async function (req) {
  return Response.json({ name: "John Doe" });
}