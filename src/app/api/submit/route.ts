import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

interface SheetForm {
  name: string;
  email: string;
  profesi: string;
  institusi: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body as SheetForm;
  console.log(req);
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email:
          "emteka-spreadsheet@googl-sheet-emteka.iam.gserviceaccount.com",
        private_key:
          "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDpMP38/s0UgbO6\nCeVfod3YqZswXJaIeaHf3+vNJpbBbGWDtVCuQwXgH4SOJqqIWZExG2homtaHcLA7\nUOWTGGbidc+GskgANzERkZLiI+tLLlSnEklx190ixV8aKR4rZcFzwp4L8eZnOrSq\nn8zEQ/2QM4xgNgBfhiOOFoNWPlUdaG1sKs06kmbZyE+PnZBWf8jIwABQEnnopd9W\n59idlq4fZ3zr/cG5yJHrmSOqTo0v2CG1tjyOLw+AhEKjb30Cq9mEb/FIJwiGwzTa\ngMyxKn4MgyO5mTocAd9SaIk32L5z0NJr4ASWUo60rcp6rhH2D0aXEZbDwyOsRW/r\nODppykwZAgMBAAECggEAAsZXogeMJtbQ7daeo+/X+nMw4AycqUdn6DM7aeewJTa7\nfIDkqAuEdIwbdoTk7utrQV4rSgyxnySgTDcPDEbe499KrAvPXy/zmwW+7YbyOU+g\np+jyoR1USczMcBIWLvuufMik5c0n6d7hIHih+0yN0LCfASlorA+mDlOb63j2vVCn\nemAWDvAdhzT2Dl8uuc22lahYT7q5jEwNuEO1rJPWINr9yrFLOJgnB8oYfROUZ0EB\nUbHzxebiWtqUmKj784d626tT1Auz+i7k+XCDVQLrsZ2P2XQeJBZJpHbBbZA1se2x\nCOQR7u43qSCV4y87mBZT0ANtgxbIv/ByKgRs3H22KwKBgQD6CWMqVKaHaUIGithT\nX94eWFs6K73ngNrNvzgUJ8DPyuTd+eit2aZN9IYL+ooqE5renGsN8m4e2Pk0+CAL\nuHPNWURs+yFMWfnkUaNH8J4La9n5rJkN676WvE5ihKDAietbmNRoAqtsUw8yqdBF\nB1Z8skAdkhGRflNZOfcOJRV3awKBgQDuwMFBuIH14BZBy/SITqEZxEqFqodBCmuW\n/JmFAkdwWYEmaIHD3ian/62CbdDsRkngcOinvDOIg1g95sGlUTCkxIXnGUEJMV6g\nzDh4mRKXG+YgJImwXIx34oOsJhHhvvv2jRacoZwbbdlZduEn7IEfykIsQ0S++G1g\ndPyabqWfiwKBgQDu8iWogHkckwScB/gvxUAZs8qKzt6O7F8tnH3VFSB386fAUmGA\nMq1xdircK7P5/f5Umxrbm0CNjkCp1C2bxcw1BAgWNfBebOYYwcPOri37MDiBF+a0\nnQPoPVCTabfOCH+5a1Yhh9uWi9HMUuhL73VBeX84Qy0y44x3iqOFCv92vQKBgEby\nqrsv7Ba3r4V/6Tu0OfVhOk/8O9MdGJm2mJxI8Be30UQrnBwrYMtdlB8FKSd9P6jd\nhJWLvLidZ1SFxReuR8k+yRfCjmv/6sHXzhQwULDsznbQxMXOysM5Ya1/ZqLx0QgU\nJxsGf1A7VXJbfE8T3c8nmIB0wPIK+t3GBeaSaM8/AoGAZILhEcdokdMVhbegHG5u\nb45goL8+1oEBYyAM1knRz54jlRtZecshsoZ0nwIwvZazSYwvJiGyOinnDpWaqU7I\nxz72OvBrGXBkHsjXj2NjoJXqNSPJNuSOLGO75zmh+bpxpQ3uIMknio3726NTSFil\nKTJR//X0ZYUmeLVU+D8PPe8=",
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
      spreadsheetId: "1hr5SBb0mb5FxPzSnRwhiAl6nww2Sbd6rIhgolM3YGO0",
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.email, body.profesi, body.institusi]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (err: any) {
    console.log(err);
    return res.status(500).send({ message: err.message });
  }
}
