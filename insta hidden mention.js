const puppeteer = require('puppeteer');




                            let username = "";
                            let password = "";
                            let username_of_target = "";





(async() =>{

let url = "https://www.instagram.com/";
let launch_options = { headless: false}
const browser = await puppeteer.launch({headless: false, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'});
const page = await browser.newPage();
page.setDefaultNavigationTimeout(0);
page.goto(url)
const t1 = await page.waitForSelector("label [aria-label='Phone number, username, or email']");
await t1.click();
const usernameid = await page.$('#loginForm > div > div:nth-child(1) > div > label > input')
await usernameid.type(username)

//username logger ends...............

//password logger starts.............

const t2 = await page.waitForSelector("label [aria-label='Password']");
await t2.click();
const passwordid = await page.$('#loginForm > div > div:nth-child(2) > div > label > input')
await passwordid.type(password);
await page.keyboard.press("Enter");

await page.waitForSelector("div [class='cmbtv']")
    const notnowclick = await page.$("div [class='cmbtv']");
        await notnowclick.click();

await page.waitForSelector("div [class='mt3GC']")
    const nosaveinfo = await page.$("div [class='mt3GC']");
        await nosaveinfo.click();

        page.goto("https://www.instagram.com/"+username_of_target);
        //search username...
// await page.waitForSelector('span[class="TqC_a"]');
// const search_bar = await page.$('span[class="TqC_a"]');
// await search_bar.click();
// await search_bar.type(username_of_target)
// const enterkey = await page.waitForSelector('input[class="XTCLo x3qfX"]')
// await enterkey.keyboard.press("Enter");

// await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm.NUiEW > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.dQ9Hi > button")
//     const viewasthis = await page.$('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm.NUiEW > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.dQ9Hi > button');
//         await viewasthis.click();


let j = 1
let i =0
let limit = 20;
for(i; i<limit; i++){
 
      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')

    console.log(`${j} Mention found !!!: `)

      const mention = await page.waitForSelector(`div > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(${j}) > div`)
      await mention.click();
      let data = await page.evaluate(()=>{
                
          let limit = document.querySelectorAll(`div[class="zKGE8 wLYRG"]`).length
          let user = document.querySelector('div[class="NPpif"]').innerText       

      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data);
      j++

}
})();


         

