var TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
var WEBHOOK_URL = 'YOUR_WEB_APP_URL';  // web app URL of your GAS deployment.
var USERS_SPREAD_SHEET_NAME = 'SPREAD_SHEET_NAME';


// Set Webhook
function setWebhook() {  // run after every deploy and updated WEBHOOK_URL
    var url = 'https://api.telegram.org/bot' + TOKEN + '/setWebhook?url=' + WEBHOOK_URL;
    UrlFetchApp.fetch(url);
}



function doPost() {

}


// Send message to Telegram
function sendTelegramNotifyMessage() {
    const token = "<bot token>";
    const chatId = "<chat Id>";
    const message = "Hello Telegram";

    const telegramURL = "https://api.telegram.org/bot" + token + "/sendMessage";

    var payload = {
        "chat_id": chatId,
        "text": message,
        "parse_mode": "Markdown"
    };

    var options = {
        "method": "post",
        "contentType": "application/json",
        "payload": JSON.stringify(payload)
    };

    UrlFetchApp.fetch(telegramURL, options);

}

//   Safe to Spread Sheet 
function saveToSpreadsheet(userData, text) {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(USERS_SPREAD_SHEET_NAME);
    spreadsheet.appendRow([userData.id, userData.first_name, userData.last_name, userData.username, text]);
}

