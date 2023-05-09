import { jokes } from "../../../lib/aTotallyNormalMongoDB";

export default function handler(request, response) {
  const { currywurst } = request.query;

  const joke = jokes.find((jokeObject) => jokeObject.id === currywurst);

  if (!joke) {
    response.status(404).json({ status: "error, no joke found." });
    return;
  }

  response.json(joke);
}
