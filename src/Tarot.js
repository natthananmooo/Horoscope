import React, { useState } from "react";
import "./Tarot.css";


const Page1=()=>{
    const [num, setNum] = useState(0); 
    
    const randomNumberInRange = (min, max) => { 
        return Math.floor(Math.random()  
                * (max - min + 1)) + min; 
    }; 

    
  
    const handleClick = () => { 
        setNum(randomNumberInRange(1, 22)); 
    }; 

    const getTarot = (num) => {
        if (num == 0) 
        {
          return (<div><br></br><h3 >Major Arcana</h3>
              <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169993888392556594/bc2ca1867bab57ed.jpeg?ex=65576cb8&is=6544f7b8&hm=ab747637d380699cbc5f6f983d1068f983dddb069646a17bd86e777b21fceb01&" width="800" height="800"/>
              <h4 class="textT"><br/>ไพ่ Major Arcana หรือเป็นไพ่สำรับใหญ่หรือสำรับหลักในการทำนาย บางครั้งอาจใช้เพียงไพ่ 22 ใบนี้ในการทำนายก็ได้เช่นกัน โดยไพ่สำรับนี้จะอ้างอิงตำนานต่าง ๆ และเน้นทำนายไปยังสถานการณ์ต่าง ๆ เป็นหลัก ไม่ได้เจาะจงเรื่องเงิน งาน ความรู้ หรือความเครียดเพียงเรื่องเดียว ไพ่ Major Arcana มีทั้งหมด 22 ใบ</h4></div>);
        }else if (num ==1 ) {
          return (<div><br></br><h3>The Magician</h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169942437146394686/01.jpg?ex=65573ccd&is=6544c7cd&hm=e144fe266e588ad35b2e3d4ba2a8aead64405fa0277b345c6f5cd777434308c1&" class ="center"/>
            <h4 class="textT"><br/>ความทะเยอทะยาน การลงมือทำ ไพ่บอกว่าเพื่อน ๆ เก่งมาก อยากทำอะไรก็ลุยให้เต็มที่เลย เพราะไฟในตัวมีเยอะพอ ๆ กับความสามารถ ดังนั้นลุยได้เลยไม่ต้องยั้ง  </h4></div>
            );
        } else if (num == 2) {
          return (<div><br></br><h3>The High Priestess </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169942609171578931/02.jpg?ex=65573cf6&is=6544c7f6&hm=8276be09a4f6b4870ca702bfa360385514fbd878ac4b1d68a930f36de53fc02b&" class ="center"/>
            <h4 class="textT"><br/>ความฉลาด มีความรู้ความสามารถ เป็นตัวแทนของคนเก่งมากความสามารถ แต่มักซ่อนสิ่งนั้นเอาไว้ภายในรูปลักษณ์นิ่งเงียบที่แสดงให้ภายนอกได้เห็น</h4></div>
            );
        } else if(num == 3){
          return (<div><br></br><h3>The Empress</h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169963702284464264/The_Empress__Tarot_Parlor.jpg?ex=6557509b&is=6544db9b&hm=e62050343cfadc321b814e9d3164fae86a06a3bb1a4e3454788b2fe3d92d0c27&" class ="center"/>
            <h4 class="textT"><br/>ความอุดมสมบูรณ์ ความเป็นแม่ เปิดได้ไพ่ใบนี้บอกเลยว่าจะเจอแต่ความสุขความสบาย เงินทองมั่งมี หรืออาจหมายถึงโอกาสตั้งครรภ์ได้ด้วย</h4></div>
            );
        }else if(num == 4){
          return (<div><br></br><h3>The Emperor</h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169963920753172601/The_Emperor_-_Tarot_Card_Pendant_Necklace.jpg?ex=655750cf&is=6544dbcf&hm=3f102565bd555133d8e9c8726b904fe296bc09fbd4389b9c69e2a23710efa244&" class ="center"/>
            <h4 class="textT"><br/>การมีอำนาจ ชอบสั่ง และไม่ยอมใคร เพื่อน ๆ อาจอยู่ในสถานการณ์ที่ต้องยอมทำตามผู้ใหญ่ ถูกบังคับจากคนมีอำนาจมากกว่าก็เป็นได้ และยังหมายถึงความมั่นคงได้อีกด้วย  อ่านต่อได้ที่ </h4></div>
            );
        }else if (num == 5) {
            return (<div><br></br><h3 >The Hierophant</h3>
                <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169964098847527003/5_The_Smith-Waite_Tarot_Centennial_Edition_________.jpg?ex=655750fa&is=6544dbfa&hm=b2f8d7d62d6e57cb507bab35c25249f1c998d5e07356bcc384ae8481b1d24362&" class ="center"/>
                <h4 class="textT"><br/>การมีความรู้ การแต่งงาน การรวมเป็นหนึ่ง พระคือตัวแทนของผู้มีความรู้และยังเป็นตัวแทนในการแต่งงานรวมเป็นครอบครัวเดียวกัน อาจหมายถึงการเป็นที่พึ่งพาของคนอื่น ๆ   อ่านต่อได้ที่ </h4></div>
            );
        }else if (num == 6) {
            return (<div><br></br><h3>The Lovers </h3>
                <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169964412585656430/The_Alchemical_Marriage_-_Greening_the_Spirit.jpg?ex=65575144&is=6544dc44&hm=eb837072a343b185bf535810f3b395696f408148163e7a92262390411103c520&" class ="center"/>
                <h4 class="textT"><br/>ความรัก การตัดสินใจ แน่นอนว่าใบนี้ต้องหมายถึงความรัก ได้พบเจอความรัก หรือต้องตัดสินใจเลือกสิ่งใดสิ่งหนึ่ง</h4></div>);;
        }else if (num == 7) {
            return (<div><br></br><h3>The Chariot</h3>
                <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169942070987849749/00.jpg?ex=65573c76&is=6544c776&hm=da5c29e0b638b88b2a5ac41e17488c1ad97b7365c12f6f64738fddd420584a3c&" class ="center"/>
                <h4 class="textT"><br/>ความแน่วแน่ มุ่งมั่น ขยัน ทุ่มเท เมื่อเจอไพ่ใบนี้ เพื่อน ๆ ก็ต้องทำตัวให้แข็งแกร่งยิ่งกว่าม้าศึกถึงจะประสบความสำเร็จในสิ่งที่ทำ</h4></div>);;
        }else if (num == 8) {
            return (<div><br></br><h3>Strength</h3>
                <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169964786352668713/Your_Tarot_Birth_Card__Meaning_-_Life_Path_8__Strength___Justice.jpg?ex=6557519d&is=6544dc9d&hm=fb526ec10facf6ca8897d933e2fb310bdf07de778297ff0d1c0e7e2a83daf754&" class ="center"/>
                <h4 class="textT"><br/>ความแข็งแกร่ง บริหารจัดการเก่ง ไพ่นี้คือตัวแทนของหญิงสาวสุดแกร่ง มีอะไรเข้ามาก็ไม่อาจทำอะไรเธอได้ แถมยังจัดการสิ่งต่าง ๆ ได้เป็นอย่างดีอีกด้วย</h4></div>);;
        }
        else if (num == 9) {
            return (<div><br></br><h3>The Hermit</h3>
                <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169969074739085332/-6.jpg?ex=6557559c&is=6544e09c&hm=579de22ca8e4973086f6bab35b8c6b8883f0cc01909c34dce4a421638a42bb0c&" class ="center"/>
                <h4 class="textT"><br/>ความสันโดษ โดดเดี่ยว วิเคราะห์ เมื่อเจอไพ่ใบนี้ก็คงเลี่ยงไม่พ้นการอยู่ตัวคนเดียว การใช้เวลารักษาเยียวยาจิตใจ หรือแม้แต่การใช้เวลาเพื่อคิดวิเคราะห์สิ่งต่าง ๆ รอบตัว อย่าได้ใจร้อนทำสิ่งใดเด็ดขาด </h4></div>);;
        }
        else if (num == 10) {
            return (<div><br></br><h3>The Wheel of Fortune</h3>
                <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169969432290922587/Tarot_Cards_List__All_78_Tarot_Cards__Their_Secret_Meaning.jpg?ex=655755f1&is=6544e0f1&hm=54600a4aab41b87d1d19a4e44f1728537ae28f244960270442c2ba69909eec26&" class ="center"/>
                <h4 class="textT"><br/>โชคชะตา เปลี่ยนแปลง หากไพ่ใบนี้ปรากฏขึ้น เพื่อน ๆ ต้องเตรียมตัวให้ดี เพราะมีโอกาสเกิดเรื่องที่ไม่คาดฝันได้ มีการเปลี่ยนแปลงที่เราไม่อาจขัดขวางได้ อาจจะเป็นเรื่องดีหรือไม่ดีก็ได้เช่นกัน </h4></div>);;
        }
        else if (num ==11) 
      {
          return (<div><br></br><h3>justice </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169969583080357898/Justice_-_Daily_Tarot_Girl.jpg?ex=65575615&is=6544e115&hm=99f8274ae7140f900b2cf300040ee08a24eefffadc60dcf1945bd76b8759bcdc&" class ="center"/>
            <h4 class="textT"><br/>การตัดสินใจ เท่าเทียม กฎหมาย หากเปิดเจอไพ่นี้แสดงว่าเพื่อน ๆ จะได้รับความยุติธรรม มีการตัดสินใจที่ก่อให้เกิดความเท่าเทียม หรืออาจจะเจอกับเรื่องราวเกี่ยวกับกฎหมายก็ได้เช่นกัน</h4></div>
            );
      }
      else if (num ==12) 
      {
          return (<div><br></br><h3>The Hanged Man </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169969673467596810/Tarot_Cards_List_from_the_original_Rider-Waite_Tarot_Deck.jpg?ex=6557562b&is=6544e12b&hm=e619b7b45078bff805c84abb92e26f409a3e6e98db54e7195767c9b2c43c8da9&" class ="center"/>
            <h4 class="textT"><br/>การรอคอย เสียสละ เพื่อน ๆ อาจได้เจอกับสถานการณ์ที่ไม่อาจตัดสินใจทำอะไรได้ ต้องอยู่นิ่ง ๆ ต้องรอคอย หรืออาจจะต้องเสียสละความสุขส่วนตัวบางอย่าง</h4></div>
            );
      }
      
      else if (num ==13) 
      {
          return (<div><br></br><h3>Death </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169971657708941342/The_Death_.jpg?ex=65575804&is=6544e304&hm=6a00736b2f942b8d8ee3861a9b4cbc7c47463d158c6ed0c014ddd79f80ce8911&" class ="center"/>
            <h4 class="textT"><br/>การเปลี่ยนแปลง เกิดใหม่ เรื่องร้าย ๆ จะกลายเป็นดีนะคะ สิ่งต่าง ๆ ที่ว่าร้ายแรงแล้วจะเริ่มเปลี่ยนแปลงไปในทางที่ดีขึ้นทีละนิด</h4></div>
            );
      }
      else if (num ==14) 
      {
          return (<div><br></br><h3>Temperance </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970096530276472/-7.jpg?ex=65575690&is=6544e190&hm=75ef2efba23da4238d85ee5c0eb5be05064dcba856853dff1a8f435fac814a16&" class ="center"/>
            <h4 class="textT"><br/>การต่อรอง ผสมผสาน สมดุล ไพ่อยากแนะนำให้เพื่อน ๆ สร้างความสมดุลให้ชีวิต ต้องต่อรองและยอมอ่อนข้อบ้างเพื่อให้ได้สิ่งที่ต้องการ</h4></div>
            );
      }
      else if (num ==15) 
      {
          return (<div><br></br><h3>The Devil </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970193380941904/The_Devil_Tarot_Card_Meaning_-_Major_Arcana_-_TarotLuv.jpg?ex=655756a7&is=6544e1a7&hm=cdaf19dc2a210aa98beea8c2d4cb07e245f5378129b163a1996a7dc935804e6a&" class ="center"/>
            <h4 class="textT"><br/>การควบคุม ผูกมัด ไร้ความหวัง ระวังให้ดี เมื่อไพ่ใบนี้ปรากฏขึ้นมา เพราะเพื่อน ๆ อาจเจอกับการควบคุม ถูกผูกมัดโดยไม่เต็มใจจนทำให้หมดพลังใจและหมดความหวัง  </h4></div>
            );
      }
      else if (num ==16) 
      {
          return (<div><br></br><h3>The Tower </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970260569501757/-8.jpg?ex=655756b7&is=6544e1b7&hm=f5c3432211558438e97085657c0b5f6226a997bda74b83b1fae7aaa33e701d32&" class ="center"/>
            <h4 class="textT"><br/>การเปลี่ยนแปลงกะทันหัน การทะเลาะเบาะแว้ง ต้องเตรียมใจให้ดี เพราะอาจเจอเรื่องไม่คาดฝัน ได้รับข่าวสารที่ไม่ทันได้เตรียมใจ หรือเกิดเรื่องบาดหมางใหญ่โตกับคนรอบตัว</h4></div>
            );
      }
      else if (num == 17) 
      {
          return (<div><br></br><h3>The Star </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970343851593819/The_Star_Tarot_Card_Meaning__Love_Reversed__More.jpg?ex=655756ca&is=6544e1ca&hm=abb254bb084472ce8b77994c3132c76e8e06eb61b8b6f77aee4ffb3b1f868df2&" class ="center"/>
            <h4 class="textT"><br/>ความหวัง ความสงบ แม้ฟ้าจะมืดมิด แต่หากไพ่ใบนี้โผล่ขึ้นมาก็เหมือนกับมีความหวังจากดวงดาวปรากฏขึ้น ควรทำตัวให้สงบเยือกเย็นเอาไว้</h4></div>
            );
      }
      else if (num == 18) 
      {
          return (<div><br></br><h3>The Moon </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970428228423770/-9.jpg?ex=655756df&is=6544e1df&hm=27ca11f98895a010027b7e9ac248b6e33aa66a77f889df2d365c583057f5bcea&" class ="center"/>
            <h4 class="textT"><br/>ความกลัว ภาพลวงตา บางครั้งความกลัวก็อาจคืบคลานเข้ามาหาเพื่อน ๆ แบบไม่รู้ตัว แต่ไพ่อาจบอกให้พิจารณาให้ดีว่าสิ่งนั้นน่ากลัวจริง ๆ หรือเป็นเพียงภาพลวงตา</h4></div>
            );
      }
      else if (num == 19) 
      {
          return (<div><br></br><h3>The Sun </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970453738168360/Occult_following__tarot_cards_through_the_ages_in_pictures.jpg?ex=655756e5&is=6544e1e5&hm=3e6b5b152fdbb9fe16053fb4ea036c1d7c501546b2cdebc3777c189e63c0ab64&" class ="center"/>
            <h4 class="textT"><br/>การเติบโต แสงสว่าง มีชีวิตชีวา ไพ่ที่เป็นตัวแทนของความร้อนแรงและสดใส และเร็ว ๆ นี้อาจมีเรื่องดี ๆ เข้ามาเซอร์ไพรส์ก็เป็นได้</h4></div>
            );
      } 
      else if (num ==20) 
      {
          return (<div><br></br><h3>Judgement </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970527520178206/Personalized_Consultation.jpg?ex=655756f6&is=6544e1f6&hm=54c7ae31ae4ca5ae394942e6090d105c6aa402d952c11620ba62812a75b3bedd&" class ="center"/>
            <h4 class="textT"><br/>การตัดสินใจ โอกาสครั้งที่สอง จะมีเรื่องสำคัญมาก ๆ เข้ามาให้ต้องตัดสินใจ ต้องปล่อยอดีตให้ผ่านไปเพื่อให้สิ่งใหม่ ๆ ได้เข้ามาแทน</h4></div>
            );
      }
      else if (num ==21) 
      {
          return (<div><br></br><h3>The World </h3>
            <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970804671385713/21_The_Smith-Waite_Tarot_Centennial_Edition_________.jpg?ex=65575738&is=6544e238&hm=b65eaf3eaa9d93c5ce5fbed723ed0908affe5d17ab976c75674f524949bdd789&" class ="center"/>
            <h4 class="textT"><br/>ความสำเร็จ ความสมบูรณ์ ถือเป็นอีกหนึ่งใบดี ๆ อีกหนึ่งใบ มีความสำเร็จเกิดขึ้น ชีวิตเติมเต็มมาก ๆ ด้วย</h4></div>
            );
      }else
      { return (<div><br></br><h3>The World </h3>
        <img src= "https://cdn.discordapp.com/attachments/950320636436312064/1169970804671385713/21_The_Smith-Waite_Tarot_Centennial_Edition_________.jpg?ex=65575738&is=6544e238&hm=b65eaf3eaa9d93c5ce5fbed723ed0908affe5d17ab976c75674f524949bdd789&" class ="center"/>
        <h4 class="textT"><br/>ความสำเร็จ ความสมบูรณ์ ถือเป็นอีกหนึ่งใบดี ๆ อีกหนึ่งใบ มีความสำเร็จเกิดขึ้น ชีวิตเติมเต็มมาก ๆ ด้วย</h4></div>
      )
      }
        
      };
      //<h2>Major Arcana number: {num}</h2>
    return ( 
        <div className="wrapper"> 
            <br/>
            <button onClick={handleClick}> 
                Get Your Free Daily Tarot Card Reading 
            </button> 
            <h3>{getTarot(num)}</h3>
           
        </div> 
    ); 
};

export default Page1;

