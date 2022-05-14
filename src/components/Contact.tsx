import '../styles/Contact.css';
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
export default function Contact() {

  return (
    <section className="contact" id="contact">
     <h2>Entre em contato comigo</h2>
     <h4>
     Se você viu o meu potencial ou quer conversar comigo, não hesite em me mandar uma mensagem.
    </h4>
    <div className="phone">
     <BsFillTelephoneFill className="icon-cont"/>
     <BsWhatsapp className="icon-cont"/>
     <h3>
       +55 (31) 99914-6175
     </h3>
    </div>
     <div className="mail">
     <GrMail className="icon-cont"/>
     <h3>
       zimttu@gmail.com
     </h3>
     </div>

    </section>
  );
}