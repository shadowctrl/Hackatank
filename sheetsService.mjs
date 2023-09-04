import { google } from "googleapis";
import { config } from "dotenv";
config();
const scope = ["https://www.googleapis.com/auth/spreadsheets"];
const sheetId = process.env.sheetsId;

export default async function sheet(values) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./sheets_creds.json",
    scopes: scope[0],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const data = await sheets.spreadsheets.values.append({
    auth,
    spreadsheetId: sheetId,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    range: "Sheet1",
    resource: {
      values: values,
    },
  });

  return data.status;
}
