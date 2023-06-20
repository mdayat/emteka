import { NextRequest } from "next/server";
import { google } from "googleapis";
import { type WaitingListData } from "src/types/waitingList";

export async function POST(req: NextRequest) {
  const { nama, email, institusi, profesi }: WaitingListData = await req.json();

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

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (err: any) {
    console.log(err);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
