// pages/api/set-cookie.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Set the 'token' cookie with a 1-hour duration
  res.setHeader(
    'Set-Cookie',
    `token=my-secret-token; Max-Age=${60 * 60}; HttpOnly; Path=/;`
  );

  // Respond with a success message
  res.status(200).json({ message: 'Cookie set successfully' });
};
