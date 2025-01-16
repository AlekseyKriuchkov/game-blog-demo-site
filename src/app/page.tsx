import {InfoBlock} from "@/shared/info-block/info-block";
import Link from "next/link";
import style from "./styles.module.scss";
import React from "react";

export default function Home() {
  return (
    <div className={style.wrapper}>
      <section className={style.section}>
        <h1>
          Dive into the world of fishing with Fish Slot: try your luck right now!
        </h1>
        <p>
          Dive into the exciting world of the ocean depths with our new game Fish Slot. Join a team of experienced fishermen and go hunting for big fish. The game impresses with beautiful 3D graphics, exciting bonus rounds and many completely free game options.
        </p>
          <nav>
            <Link className={style.link} href={"/game"}>
              Free game
            </Link>
          </nav>
      </section>
      <InfoBlock/>
    </div>
  );
}
