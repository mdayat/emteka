import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

import type { MailingListData } from "@customTypes/mailingList";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method Not Allowed" });
  }

  const { nama, email, institusi, profesi }: MailingListData = req.body;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "A2:D2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[nama, email, profesi, institusi]],
      },
    });

    res.status(200).json({ response });
  } catch (err: any) {
    console.error(err);

    if (err.code === "ECONNREFUSED" || err.code === "ENOTFOUND") {
      return res.status(503).json({
        error: "Connection Error",
      });
    }

    return res.status(500).json({
      error: "Internal Server Error",
      message: "Terjadi kesalahan. Silakan coba lagi nanti.",
    });
  }
}
