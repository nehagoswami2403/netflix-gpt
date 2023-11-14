import OpenAI from 'openai';
import { OPEN_AI_GPT_SECRET_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPEN_AI_GPT_SECRET_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true
});

export default openai;