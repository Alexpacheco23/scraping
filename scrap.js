const puppeteer = require('puppeteer');

(async () => {

//  const url ='https://www.superpages.com/houston-tx/self-storage';
  const url = 'https://www.superpages.com/houston-tx';  
const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    //await page.goto('https://www.superpages.com/houston-tx');
    await page. setDefaultNavigationTimeout(0);
    await page.goto(url);
    //await page.screenshot({path: 'img/example.png'});
   
  probar  =  await page.evaluate(()=>{
    const articulos = document.getElementsByClassName('row expand-area sp-trim-height');
    const newArray = Array.from(articulos);
       
    const uniUrl = [];
    
      for (let i = 0; i< newArray.length ; i++){
        uniUrl.push(Array.from(newArray[i].childNodes));
        }

        
        let listUrl = [];
        for(let h=0;h<uniUrl.length;h++){
          for(let k=0;k<uniUrl[h].length;k++){
            listUrl.push(uniUrl[h][k].href)
          }
        }
        

      //   let tener = [];
      //   let r = 0;
      //  while(r<uniUrl.length){
      //   for(let nombres of uniUrl[r]){
        
      //     tener.push(nombres.href);
      //   }
      //  r+=1
      //  }
        

      
      return listUrl;
    });
     
  console.log(probar)
    //await browser.close();
  })();


  //const articulos = document.getElementsByTagName('article');
 
  // const 

  /*
obtener link de todos los parametros
con article
document.getElementsByTagName('article')[0].getElementsByClassName('row expand-area sp-trim-height')[0].getElementsByTagName('a')[0].href
sin article

document.getElementsByClassName('row expand-area sp-trim-height')[0].getElementsByTagName('a')[0].href

Xpath

Nombre de la empresa: document.getElementsByClassName('business-name')[3].getElementsByTagName('span')[0]
numero de telefono: document.getElementsByClassName('con-group')[0].querySelector('.phone').querySelector('.call-number').innerText

direccion: document.getElementsByClassName('street-address')[0].innerText


  */