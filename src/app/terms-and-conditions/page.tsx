import React from 'react';
import style from "./styles.module.scss";

export default function TermsAndConditions () {
  return (
    <div className={style.wrapper}>
      <section className={style.section}>
        <h1>Terms and Conditions</h1>
        <h3>Welcome! These terms and conditions outline the rules and regulations for the use of our website.</h3>
        <h2>1. Usage of the Website</h2>
        <p>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.</p>
        <h2>2. Cookies</h2>
        <p>We employ the use of cookies. By accessing, you agreed to use cookies in agreement with our Cookie Policy.</p>
        <h2>3. License</h2>
        <p>Unless otherwise stated, [Your Website Name] and/or its licensors own the intellectual property rights for all material on this website.</p>
        <h2>4. Limitations of Liability</h2>
        <p>We shall not be held responsible for any damages arising out of or in connection with your use of this website.</p>
        <h2>5. Changes to Terms</h2>
        <p>We may revise these terms and conditions at any time. By continuing to use this website, you agree to the updated terms.</p>
        <p>If you have any questions about these Terms and Conditions, please contact us at support.</p>
      </section>
    </div>
  );
};
