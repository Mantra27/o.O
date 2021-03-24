const puppeteer = require('puppeteer');

                                  let username = " ";
                                  let password = " ";
                                  let usename_of_target =" ";



(async() =>{

let url = "https://www.instagram.com/";
let launch_options = { headless: false}
const browser = await puppeteer.launch(launch_options);
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

        page.goto("https://www.instagram.com/"+usename_of_target);
        //search username...
// await page.waitForSelector('span[class="TqC_a"]');
// const search_bar = await page.$('span[class="TqC_a"]');
// await search_bar.click();
// await search_bar.type("mantra.epic")
// const enterkey = await page.waitForSelector('input[class="XTCLo x3qfX"]')
// await enterkey.keyboard.press("Enter");

// await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm.NUiEW > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.dQ9Hi > button")
//     const viewasthis = await page.$('#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div.Igw0E.IwRSH.eGOV_._4EzTm.NUiEW > div > div > div > div.Igw0E.IwRSH.eGOV_._4EzTm.dQ9Hi > button');
//         await viewasthis.click();


await page.waitForSelector('div[class="RR-M- h5uC0"]');
const story_click = await page.waitForSelector('div[class="RR-M- h5uC0"]');
await story_click.click();
await page.waitForSelector('div[class="zKGE8 wLYRG"]')
console.log("1st Mention found !!!")
const mention = await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._-6eR1 > div > div > div > div > div.yxA_V > div:nth-child(1) > div")
await mention.click();
let data = await page.evaluate(()=>{
let user = document.querySelector('div[class="NPpif"]').innerText       
return{
user,
};
});
page.goto("https://www.instagram.com/mantra.epic");
console.log(data);

  await page.waitForSelector('div[class="RR-M- h5uC0"]');
  const story_click2 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
  await story_click2.click();
  await page.waitForSelector('div[class="zKGE8 wLYRG"]')
  console.log("2nd Mention found !!!")
  const mention2 = await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._-6eR1 > div > div > div > div > div.yxA_V > div:nth-child(2) > div")
  await mention2.click();
  let data2 = await page.evaluate(()=>{
  let user2 = document.querySelector('div[class="NPpif"]').innerText       
  return{
  user2,
  };
  });
  page.goto("https://www.instagram.com/mantra.epic")
  console.log(data2);


    //Mention 3...................
    await page.waitForSelector('div[class="RR-M- h5uC0"]');
    const story_click3 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
    await story_click3.click();
    await page.waitForSelector('div[class="zKGE8 wLYRG"]')
    console.log("3rd Mention found !!!")
    const mention3 = await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._-6eR1 > div > div > div > div > div.yxA_V > div:nth-child(3) > div")
    await mention3.click();
    let data3 = await page.evaluate(()=>{
    let user3 = document.querySelector('div[class="NPpif"]').innerText       
    return{
    user3,
    };
    });
    page.goto("https://www.instagram.com/mantra.epic")
    console.log(data3);

    //Mention 4........
    try{
    await page.waitForSelector('div[class="RR-M- h5uC0"]');
    const story_click4 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
    await story_click4.click();
    await page.waitForSelector('div[class="zKGE8 wLYRG"]')
    console.log("4rd Mention found !!!")
    const mention4 = await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._-6eR1 > div > div > div > div > div.yxA_V > div:nth-child(4) > div")
    await mention4.click();
    let data4 = await page.evaluate(()=>{
    let user4 = document.querySelector('div[class="NPpif"]').innerText       
    return{
    user4,
    };
    });
    page.goto("https://www.instagram.com/mantra.epic")
    console.log(data4);
  }
  catch(exception){
    
  }

    //Mention 5.....
    await page.waitForSelector('div[class="RR-M- h5uC0"]');
    const story_click5 = await page.waitForSelector('div[class="RR-M- h5uC0"]');
    await story_click5.click();
    await page.waitForSelector('div[class="zKGE8 wLYRG"]')
    console.log("5rd Mention found !!!")
    const mention5 = await page.waitForSelector("#react-root > section > div.Igw0E.rBNOH.YBx95.vwCYk > div > section > div > div._-6eR1 > div > div > div > div > div.yxA_V > div:nth-child(5) > div")
    await mention5.click();
    let data5 = await page.evaluate(()=>{
    let user5 = document.querySelector('div[class="NPpif"]').innerText       
    return{
    user5,
    };
    });
    page.goto("https://www.instagram.com/mantra.epic")
    console.log(data5);

    
})();


         


