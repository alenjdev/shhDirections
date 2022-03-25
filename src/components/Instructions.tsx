import { Authentication, Device, Fleet } from "@formant/data-sdk";
import { useEffect, useState } from "react";
import styles from "./Instructions.module.scss";

export const Instructions = () => {
  const [user, setUser] = useState("");
  const [host, setHost] = useState("");

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    if (await Authentication.waitTilAuthenticated()) {
      const device = await Fleet.getCurrentDevice();
      setUser(Authentication.currentUser!.firstName);
      setHost(device.name);
    }
  };

  return (
    <div className={styles.instructions}>
      <ul className={styles["instructions-list"]}>
        <li>
          <a
            className={styles["instructions-link"]}
            target="_blank"
            href="https://docs.formant.io/reference/fctl"
          >
            Install fctl
          </a>
        </li>
        <li>
          <span>Make sure you fctl init and type in username + password</span>
        </li>
        <li>
          <span>{`ssh ${"<user-on-computer>"}@${
            host || "<device-name>"
          }.formant`}</span>
        </li>
      </ul>
    </div>
  );
};
