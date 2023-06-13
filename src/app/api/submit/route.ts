import { NextRequest } from "next/server";
import { google } from "googleapis";

interface SheetForm {
  name: string;
  email: string;
  profesi: string;
  institusi: string;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as SheetForm;
  try {
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

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "A2:D2",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.profesi, body.institusi]],
      },
    });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (err: any) {
    console.log(err);
    return new Response(null, { status: 400, statusText: "Bad Request" });
  }
}
