//API Endpoint Handler
import { jokes } from "../../../lib/aTotallyNormalMongoDB";

export default function handler(request, response) {
  response.status(200).json(jokes);
}
