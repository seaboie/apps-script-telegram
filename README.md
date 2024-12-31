# Apps Script & Telegram  

## Telegram Bot SDK  

- [API method Telegram](https://telegram-bot-sdk.readme.io/reference/getme)  
- [getUpdates](https://telegram-bot-sdk.readme.io/reference/getupdates)  
- [setWebhook](https://telegram-bot-sdk.readme.io/reference/setwebhook)  

## Set Webhook to be `active`  
> Open link : `https://api.telegram.org/bot<bot_token>/setWebhook?url=<webhook_url>`  

## Log values from API of telegram  ( We can get `Chat ID` too. )

- Use `curl` command
- Change `bot_token` of bot  
- type somethings in Chat bot for update data
- Run this command
```bash
curl https://api.telegram.org/bot{bot_token}/getUpdates 
```  
🎉 Use this command to receive incoming updates 
> 🔥 🔥 🔥 If have error  
```
{"ok":false,"error_code":409,"description":"Conflict: can't use getUpdates method while webhook is active; use deleteWebhook to delete the webhook first"}% 
```  
### Set Webhook to be `inactive` 
`Run` command  
```bash
curl https://api.telegram.org/bot{bot_token}/setWebhook
```  
🎉 Use this command will set webhook to be `inactive`  

and 🛠️ 🛠️ 🛠️ Type: Somethings in Chat bot message for update value  

`Run` command  
```bash
curl https://api.telegram.org/bot{bot_token}/getUpdates 
```  

again... for : 🎉 receive incoming updates.  

### Example of a Properly Formatted POST Request

```bash
{
  "update_id": 123456789,
  "message": {
    "message_id": 1,
    "from": {
      "id": 123456789,
      "is_bot": false,
      "first_name": "John",
      "last_name": "doe",
      "username": "johndoe",
      "language_code": "en"
    },
    "chat": {
      "id": 123456789,
      "first_name": "John",
      "username": "johndoe",
      "type": "private"
    },
    "date": 1609459200,
    "text": "Hello, world!"
  }
}
```  

---  




