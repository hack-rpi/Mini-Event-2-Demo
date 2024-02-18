import styles from "./contact.module.css";
import Newsletter from "@/components/newsletter/newsletter";
import React from "react";

export default function Contact() {
  return (
    <div className={styles["contact-me-container"]} id="contact">
      <h1 className={styles["contact-me-title"]}>Contact Me</h1>
      <h2 className={styles["contact-me-text"]}>
        If you're interested in learning more about me, connect with me via my
        social media links below or sign up for my newsletter! I'd love to hear from you!
      </h2>
      <Newsletter></Newsletter>
      <div className={styles["links-container"]}>
        <a className={styles["link"]} href="https://www.youtube.com/@MrBeast">
          <img src="youtube.png" alt="YouTube" />
        </a>
        <a className={styles["link"]} href="https://twitter.com/MrBeast">
          <img src="x.webp" alt="X (Twitter)" />
        </a>
        <a className={styles["link"]} href="https://www.instagram.com/mrbeast/">
          <img src="instagram.png" alt="Instagram" />
        </a>
        <a className={styles["link"]} href="https://www.tiktok.com/@mrbeast">
          <img src="tiktok.png" alt="TikTok" />
        </a>
        <a className={styles["link"]} href="mailto:contact@mrbeastbusiness.com">
          <img src="email.png" alt="Email" />
        </a>
      </div>
    </div>
  );
}
