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

      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
    
      let data = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(1) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data);

      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click2 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click2.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data2 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(2) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data2);





      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click3 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click3.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data3 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(3) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data3);





      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click4 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click4.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data4 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(4) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data4);






      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click5 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click5.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data5 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(5) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data5);





      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click6 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click6.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data6 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(6) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data6);






      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click7 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click7.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data7 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(7) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data7);






      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click8 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click8.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data8 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(8) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data8);






      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click9 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click9.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data9 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(9) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data9);



      await page.waitForSelector('div[class="RR-M- h5uC0"]');
      const story_click10 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
      await story_click10.click();
      await page.waitForSelector('div[class="zKGE8 wLYRG"]')
      console.log(`Mention found !!!: `)
      let data10 = await page.evaluate(()=>{
        document.querySelector('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._53rSq > div > div > div.Igw0E.rBNOH.YBx95._4EzTm.i0EQd.O1flK.D8xaz.TxciK.yiMZG > div > div.yxA_V > div:nth-child(10) > div').click();
        let user = document.querySelector('div[class="NPpif"]').innerText       
      return{
      user,
      };

    });
      page.goto("https://www.instagram.com/"+username_of_target);
      console.log(data10);

}
)();


         
