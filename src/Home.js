import './Home.css';
import React from "react";
import {Helmet} from "react-helmet";
//Router

//import Component and pages


function Home() {
    return (
      <div className="Home">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Horoscope</title>
                <meta name="description" content="teasting and title" />
            </Helmet>
            
        <header className="Home-header">
          <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169584808872116234/tarot_.jpeg?ex=6555efbc&is=65437abc&hm=e6440973c675864c076cf50c4f283e2087d67e5dac1e75e0c9cb50c08ba58817&"  alt="torot" />
          <br/>
          <hr></hr>
          <p class ="topicH">
          <span className="heart">♥️</span> รวมคำถามดูดวงไพ่ทาโรต์ อยากรู้อะไร ควรตั้งแบบไหนดี <span className="heart">♥️</span> 
          </p>

          <p class= "textH">กลุ้มใจ อยากดูดวง ถ้าดูดวงไพ่ทาโรต์ ไพ่ยิปซี ต้องตั้งคำถามอย่างไร มีคำถามอะไรบ้างที่ห้ามถาม อยากรู้เรื่องนี้จะเปิดไพ่ทาโรต์ต้องตั้งคำถามอย่างไรบ้าง มาดูกันค่ะ 
          </p>
            <p class ="topicH">คำถามเวลาดูดวงเรื่องความรัก-ความสัมพันธ์</p>
            <p class="textH">เวลาดูดวง คำถามอันดับหนึ่งคงหนีไม่พ้นเรื่องความรักความสัมพันธ์ อารมณ์ว่าอยากรู้แต่ไม่อยากถาม ความสัมพันธ์ของคนเราซับซ้อนมาก ยิ่งในสมัยนี้มีความสัมพันธ์ที่หลากหลายกว่าเดิม ทั้งคุยแต่ไม่ยอมคบ ทั้ง FWB เหมือนจะชอบ แต่ก็เหมือนจะไม่ชอบ งง ๆ จนไม่รู้จะวางตัวยังไง หรือคบมานาน แต่อีกฝ่ายเปลี่ยนไปไม่เหมือนเดิม มูฟออนยังไม่ได้ อยากจะเคลียร์ตรง ๆ แต่ก็กลัวมีปัญหาทะเลาะกัน ถ้าจะถามเรื่องความสัมพันธ์กับไพ่ หรือเปรียบเทียบคนที่เข้ามาจีบว่าคนไหนเวิร์คสุด เทียบหลาย ๆ คนได้เลย เทียบ 1 คน นับเป็น 1 คำถาม เวลาดูดวงถามอะไรดี อย่างเช่น </p>
            <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169631540758708236/torot_.jpeg?ex=65561b42&is=6543a642&hm=6e1c44973be3299a3ca008dfa94a11ed99e43642f0bbaa8f17c37f9d5489521f&"  alt="torotสัมพันธ์" />
            <br/>
            <p class = "textli"><ul>
                <li>ลักษณะนิสัย คนที่มาจีบเป็นอย่างไร </li>
                <li>คนที่เข้ามาจีบคนไหนดีกว่ากัน</li>
                <li>เขาคิดอย่างไรกับเรา รู้สึกยังไงกับเรา</li>
                <li>จะได้เจอกันไหม </li>
                <li>เขาคุยกับเราคนเดียวหรือเปล่า</li>
                <li>ทำยังไงถึงจะชนะใจเขาได้</li>
                <li>เขาจริงจังกับเราแค่ไหน </li>
                <li>จะมีโอกาสได้เจอคนในสเป็ดหรือยัง</li>
                <li>คนที่ใช่จะเป็นคนแบบไหน</li>
                <li>จะได้เจอคนคนนั้นที่ไหน</li>
                <li>ทำยังไงถึงจะเจอเนื้อคู่</li>
            </ul></p>
            <p class ="topicH">คำถามเวลาดูดวงความสัมพันธ์คนมีคู่ - ยังไม่มูฟออน</p>
            <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169635019355070464/tarot_.jpeg?ex=65561e7f&is=6543a97f&hm=150f0550cc896104c0ec3ab942127213590112f3ebd66b1d45a0e1bad732a6de&"  alt="torotมูฟออน" />
            <br/>
            <p class = "textli"><ul>
                <li>คนที่คบด้วยตอนนี้เขารู้สึกยังไงกับเรา</li>
                <li>ความรักตอนนี้เป็นอย่างไร</li>
                <li>แฟนเราแอบคุยกับใครไหม</li>
                <li>ความสัมพันธ์ของแฟนเรากับผู้หญิงคนนั้นเป็นอย่างไร </li>
                <li>แฟนเก่ามาคุยกับแฟนเราหรือเปล่า</li>
                <li>ปัญหาในความสัมพันธ์คืออะไร</li>
                <li>ควรแก้ปัญหายังไง หรือวางตัวยังไงถ้ารู้แล้วว่าแฟนมีกิ๊ก </li>
                <li>ควรไปต่อหรือพอแค่นี้</li>
                <li>แฟนอยากแต่งงานไหม จะได้แต่งงานกันเมื่อไหร่</li>
                <li>วางแผนครอบครัวยังไง</li>
                <li>ทำไมแฟนถึงไม่พูดด้วย มีเรื่องอะไรหรือเปล่า</li>
                <li>ทำไมแฟนทำตัวเปลี่ยนไป</li>
                <li>แฟนเก่าจะติดต่อกลับมาไหม</li>
                <li>จะได้กลับไปคบกับแฟนเก่ามั้ย</li>
                <li>ถ้ากลับมาคบกันใหม่ แล้วจะดีขึ้นไหม</li>
                <li>ถ้าฝืนคบกันต่อจะเป็นอย่างไร</li>
            </ul></p>
            <br/>
            <p class ="topicH">คำถามเวลาเรื่องงาน</p>
            <p class="textH">นอกจากเรื่องความสัมพันธ์แล้ว เรื่องงานก็เป็นอีกหนึ่งเรื่องยอดฮิตที่หลาย ๆ คนมักจะซอบไป
                ดูดวงไพ่ทาโรต์ ทั้งคนที่จะไปสัมภาษณ์งาน และรอสัมภาษณ์ว่าจะผ่านไหม ถ้ามีตัวเลือก
                มากกว่า 1 บริษัทควรเลือกบริษัทไหนดี ควรเปลี่ยนงานดีไหม เพราะบางคนก็กลัวหนีเสือปะ
                จระเข้ เวลาดูดวงถามอะไรดี คำถามเรื่องงานที่ควรถามไพ่ทาโรต์คือ</p>
                <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169641183073533972/tarot_.jpeg?ex=6556243c&is=6543af3c&hm=823954fa6689670449b07cee2d8890882bc2f73cf1303411668d043570906694&"  alt="torotงาน" />
                <br/>
                <p class = "textli"><ul>
                <li>เปลี่ยนที่ทำงานใหม่ดีไหม</li>
                <li>ถ้าเปลี่ยนงานแล้วจะเป็นอย่างไร</li>
                <li>ถ้ายื่นสมัครงานที่บริษัทนี้ จะได้งานไหม</li>
                <li>ยื่นสมัครบริษัทไหนตี ระหว่าง 1, 2, 3, 4</li>
                <li>สัมภาษณ์ผ่านหลายบริษัท ควรเลือกทำที่ไหนดี ระหว่าง 1, 2, 3, 4</li>
                <li>ลาออกไปทำธุรกิจส่วนตัวดีไหม</li>
                <li>ระหว่างทำงานราซการกับเอกชนเลือกอะไรดี</li>
                <li>ทำอาชีพเสริมอะไรดี</li>
                <li>ทำของขายจะขายดีไหม</li>
                <li>โปรเจกต์ที่เสนอไปเป็นอย่างไร</li>
                <li>เจ้านายเอ็นดูเราไหม เขาคิดอย่างไรกับเรา</li>
                <li>ทำธุรกิจกับเพื่อนจะดีไหม จะมีปัญหาอะไรหรือเปล่า</li>
                <li>งานที่มีปัญหา ควรทำอย่างไร</li>
                <li>สิ่งที่ต้องระวังในการทำงานนี้มีอะไรบ้าง</li>
                <li>เพื่อนร่วมงานที่แผนกใหม่ดีไหม</li>
                <li>มีสิทธิ์ที่จะได้เลื่อนขั้นไหม</li>
                <li>ทำอย่างไรถึงจะได้เลื่อนขั้น</li>
                <li>จะได้ย้ายที่ทำงานไหม</li>
                <li>เพื่อนร่วมงานคิดอย่างไรกับเรา</li>
                <li>ทำงานด้านไหนถึงจะรวย</li>
                <li>มีโอกาสได้ไปทำงานที่ต่างประเทศไหม</li>
            </ul></p><br/>
            <p class ="topicH">คำถามเวลาเรื่องเงิน</p>
            <p class= "textH">นอกจากเรื่องความรักและการงานแล้ว การเงินก็เป็นอีกเรื่องที่ต้องวางแผน และเป็นปัญหาหนักใจสำหรับหลาย ๆ คน อย่าง
                            เรื่องการกู้ซื้อบ้าน ซื้อรถ ว่าจะผ่านไหม หรือการเตรียมรายจ่ายให้พอ จะได้ไม่นั่งปวดหัวทีหลัง การหารายได้เสริม หรือตั้ง
                            คำถามเพื่อจะได้ดึงสติว่าเงินที่ทำงานมาตั้งนาน หายไปไหนหมด ควรตัดรายจ่ายอะไรที่ไม่จำเป็นออกไปบ้าง หรือควรวางแผน
                            ยังไง ให้ไม่ติดขัดด้านการเงิน ลูกหนี้ที่ยืมไป มีเกณฑ์จะคืนเงินไหม คำถามที่ถามไพ่ทาโรด์ก็อย่างเช่น</p>
                            <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169823217452584960/tarot_.jpeg?ex=6556cdc5&is=654458c5&hm=c24420ef8a6ec432dfa581e8537e6d7f62418699218600594aa90ec7757de895&"  alt="torotเงิน" />
                            <br/>
                            <p class = "textli"><ul>
                <li>การเงินช่วงนี้มีอะไรต้องระวังบ้าง</li>
                <li>การเงินช่วง 3 เดือนนี้จะเป็นอย่างไรบ้าง</li>
                <li>ลูกหนี้จะคืนเงินไหม เมื่อไหร่</li>
                <li>ทำไมลูกหนี้ไม่ยอมคืนเงินซักที</li>
                <li>ต้องทำอย่างไรถึงจะให้ลูกหนี้คืนเงิน</li>
                <li>หารายได้เสริมยังไงดี</li>
                <li>ควรลงทุนทางไหนดี ระหว่างหุ้นกับบิตคอยน์</li>
                <li>เงินกู้ที่ยื่นไปจะผ่านไหม</li>
                <li>ยื่นกู้ที่ไหนจะผ่านง่ายกว่ากัน (เทียบ 1, 2, 3, 4)</li>
                <li>ทำยังไงถึงจะเก็บเงินอยู่</li>
                <li>จะได้ซื้อบ้าน ซื้อรถ ภายในปีนี้ไหม</li>
                <li>โบนัสที่หวังไว้จะได้หรือเปล่า</li>
                <li>จะได้เงินจากการเสี่ยงโชคบ้างไหม</li>
                <li>หนี้สินที่มีจะใช้หมดเมื่อไหร่</li>
                <li>ปล่อยเซ่าหรือขายดีกว่ากัน</li>
                <li>จะขาย/ปล่อยเช่า ทรัพย์สินที่มีได้เมื่อไหร่</li>
            </ul></p>
            <p class ="topicH">คำถามเวลาดูดวงเรื่องการเรียน</p>
            <p class="textH">เพื่อน ๆ ที่ทำงานแล้ว อยากจะเรียนต่อ รอผลสอบข้าราชการ หรือสอบเลื่อนขั้น หรือน้อง ๆ ที่อยากไปเรียนต่างประเทศ ก็อาจจะ
                กังวลในขั้นตอนของการทำวีซ่า หรือเรื่องอื่น ๆ ที่ทำให้กลุ้มใจในการเรียน อย่างการเลือกสาขาเรียนที่ดีที่สุด หรือควรเรียน
                มหาวิทยาลัยใกล้บ้านหรือไกลบ้านดี ควรเลือกมหาลัยที่ชอบ หรือเลือกมหาลัยที่มีชื่อเสียงมากกว่า คำถามที่ควรถามไพ่ทาโรต์
                ก็อย่างเช่น</p>
                
                <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169839706989678643/tarot_.jpeg?ex=6556dd20&is=65446820&hm=bc4804fbbb65ec97c649305f8f2aec23c8af3936a79da6d05ecac3f3c4e5e4b5&"  alt="torotการเรียน" />
                <br/>
                <p class = "textli"><ul>
                <li>ไปเรียนต่างประเทศดีไหม</li>
                <li>วีซ่าเรื่องเรียนที่ยื่นไปจะผ่านไหม</li>
                <li>ควรเลือกเรียนสาขาไหนดี</li>
                <li>ควรเลือกมหาวิทยาลัยไหนดีระหว่าง 1,2, 3, 4</li>
                <li>เรียนภาษาที่ 3 ภาษาไหนดี</li>
                <li>หัวข้อธีสิสที่ยื่นไปจะผ่านไหม</li>
                <li>ถ้าเลือกเรียนที่นี่จะเป็นอย่างไร</li>
                <li>ถ้าขอพ่อกับแม่ไปเรียนที่ ๆ อยากเรียน จะอนุญาตไหม</li>
                <li>ผลสอบที่หวังไว้ จะสอบผ่านไหม</li>
                <li>ต้องระวังอะไรในการเรียนบ้าง</li>
            </ul></p>
            <p class="topicH">คำถามเวลาดูดวงเรื่องสุขภาพหรืออื่นๆ</p>
            <p class="textH">เรื่องสุดท้าย ที่หลาย ๆ คนชอบถาม ก็คงจะเป็นเรื่องสุขภาพ ทั้งสุขภาพของตัวเอง และสุขภาพของคนในครอบครัว เรื่องเล็กน้อยทั่วไปอื่น ๆ ที่เป็นเรื่องกลุ้มใจ หรือเรื่องที่อยากจะพัฒนาตัวเองให้ดีขึ้น อย่างการดูแลสุขภาพ การไดเอท หรือถ้าฝันแปลก ๆ หลายวันติด หมายถึงอะไร มีอะไรที่สิ่งศักดิ์สิทธ์อยากจะบอกเรา คำถามที่ควรถามไพ่ทาโรต์ก็อย่างเช่น</p>
            <img src= "https://cdn.discordapp.com/attachments/868556764537294961/1169841329136742430/tarot_.jpeg?ex=6556dea3&is=654469a3&hm=19271850aad40e9aa4bfc4ff9acdc2bbb33c88946b0294a5b9686c75e592a9a7&" alt="torotสุขภาพ"/>
            <br/>
            <p class = "textli"><ul>
                <li>เรื่องสุขภาพมีอะไรที่ต้องระวังบ้าง</li>
                <li>แนวโน้มในการรักษา</li>
                <li>ควรย้ายโรงพยาบาลดีไหม</li>
                <li>ถ้าผ่าตัดแล้วแนว โน้มจะเป็นอย่างไร</li>
                <li>ใช้วิธีการลดน้ำหนักแบบไหนดี</li>
                <li>ปัญหาในการลดน้ำหนักคืออะไร</li>
                <li>ควรออกกำลังกายแบบไหนที่จะทำให้ลดน้ำหนักสำเร็จ</li>
                <li>ฝันแบบนี้หมายถึงอะไร</li>
                <li>เจ้าที่เจ้าทางต้องการให้เราทำอะไรไหม</li>
                <li>ฮวงจุ้ยที่บ้านดีแล้วหรือยัง ควรแก้ยังไง</li>
                <li>เคยไปลบหลู่หรือทำอะไรไว้หรือเปล่า</li>
                <li>เคยไปบนไว้ที่ไหนแล้วไม่เคยแก้ไหม</li>
                <li>สิ่งศักดิ์สิทธ์อยากบอกอะไรกับเรา</li>
                <li>พัฒนาตัวเองยังไงให้ดีขึ้น</li>
            </ul></p>
            <p class="topic">ข้อห้ามการดูดวงไพ่ยิปซี มีอะไรบ้างและคำถามที่ห้ามถามเวลาดูดวง</p>
            <img src="https://cdn.discordapp.com/attachments/868556764537294961/1169843260500484156/tarot_.jpeg?ex=6556e06f&is=65446b6f&hm=1de77bd3f8e0ce31eada44d53c6d98c09f3b9c3a3b067ca91a0b5302bd96a3e3&"alt="tarotอย่าถาม "/>
            <p class="textH">ห้ามเรื่องความเป็นความตาย ถามว่าจะตายเมื่อไหร่ หรือตายเพราะอะไร ถ้าถามถึงคนที่เสียชีวิตไปแล้วเพราะคิดถึง อย่างปู่ย่า
                ตายาย พ่อแม่ เพื่อน คนรัก หรืออยากสื่อสารกับเจ้าที่เจ้าทางก็อาจจะได้ ถ้าเป็นญาติหรือคนข้างตัวที่เกี่ยวข้องกับตัวเรา อยู่ที่
                หมอดูแต่ละคนว่าขอบเขตสามารถถามได้แค่ไหน แต่ไม่ควรถามเกี่ยวกับคนที่ไม่เกี่ยวข้อง อย่างเช่น ดาราคนนั้นเสียชีวิตเพราะ
                อะไร หรือถ้าอยู่ในความสัมพันธ์หรือมือที่สามของคนอื่น ไม่ควรถามว่าควรทำอย่างไรถึงจะแย่งมาได้ ไม่ควรถามอนาคตเด็กที่
                ยังเด็กมาก ๆ อย่างทารก หรือเต็กประถม ว่าโตขึ้นมาจะเป็นอย่างไร เพราะขึ้นอยู่กับสภาพแวดล้อมในการเลี้ยงดู ไม่ควรถาม
                คำถามที่ไม่เกิดประโยชน์แก่ตัวเอง อย่างคำถามที่ว่าคนที่คบอยู่คือเนื้อคู่หรือเปล่า</p>
            <p class="topicH">ดูไพ่ยิปซีและไพ่ทาโรต์ ดูได้บ่อยแค่ไหน</p>
            <p class="textH">สามารถดูได้บ่อย ๆ ไม่จำกัด จะเปลี่ยนหมอดูหลาย ๆ คนแล้วเทียบผลลัพธ์ก็ได้ แต่ถ้าจิตใจฟุ้งซ่านมาก ๆ และคาดหวังจะให้ผลออกเป็นแบบที่หวัง 100% จะทำให้ผลไม่แม่น และทำให้ผลลัพธ์ต่างจากสิ่งที่หวังไปเรื่อย ๆ เพราะไพ่สะท้อนจิตสำนึกที่เราอยากให้เป็นออกมา ถ้าดูจนจิตใจฟุ้งซ่านแล้วควรหยุดดู เพราะนอกจากจะไม่เกิดประโยชน์แล้ว ยังทำให้เสียเงินดูไพ่ทาโรต์โดยใช่เหตุอีกด้วย 
                        นอกจากนี้การดูดวงไพ่ทาโรต์หรือไพ่ยิปซี ยังสามารถตั้งคำถามแบบ ใช่/ไม่ใช่ ได้ด้วย และถ้าไพ่ออกมาไม่ดี จะไม่มีพิธีกรรมการแก้กรรม หรือพิธีอื่น ๆ เข้ามาเกี่ยวข้อง เป็นศาสตร์ที่ใคร ๆ ก็สามารถเรียนรู้ได้ ควรเลือกหมอดูไพ่ทาโรต์ที่น่าไว้ใจ ถ้าหมอดูคนไหนที่ทำนายแบบไม่มีจรรยาบรรณ หรือให้แก้กรรม เรียกเงินอื่น ๆ นอกจากค่าครู ก็ไม่ควรไปดูอีก และผลลัพธ์ที่ทายออกมาสามารถเปลี่ยนแปลงได้เสมอ อยู่ที่การกระทำของเรา เชื่อได้ แต่ควรใช้วิจารณญาณกันด้วยนะ เพราะสุดท้ายแล้ว คนที่จะตัดสินใจเลือกทำ หรือไม่ทำตามที่ไพ่ทาโรต์บอก ก็คือตัวของเราเอง</p><br></br>

                            

          
          
        </header>
      </div>
    );
  }
  
  export default Home;
  
