# Apps Script & Telegram  

## Telegram Bot SDK  

- [API method Telegram](https://telegram-bot-sdk.readme.io/reference/getme)  
- [getUpdates](https://telegram-bot-sdk.readme.io/reference/getupdates)  
- [setWebhook](https://telegram-bot-sdk.readme.io/reference/setwebhook)  

## Log values from API of telegram  ( We can get `Chat ID` too. )

- Use `curl` command
- Change `token` of bot  
- type somethings in Chat bot for update data
- Run this command
```bash
curl https://api.telegram.org/bot{token}/getUpdates 
```  
🎉 Use this command to receive incoming updates 
> 🔥 🔥 🔥 If have error  
```
{"ok":false,"error_code":409,"description":"Conflict: can't use getUpdates method while webhook is active; use deleteWebhook to delete the webhook first"}% 
```  
`Run` command  
```bash
curl https://api.telegram.org/bot{token}setWebhook
```  
🎉 Use this command will set webhook to empty...  

and 🛠️ 🛠️ 🛠️ Type: Somethings in Chat bot message for update value  

`Run` command  
```bash
curl https://api.telegram.org/bot{token}/getUpdates 
```  

again... for : 🎉 receive incoming updates.  

---  




