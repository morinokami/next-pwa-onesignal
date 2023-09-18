"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function Register() {
  useEffect(() => {
    OneSignal.init({
      appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID as string,
      safari_web_id: process.env.NEXT_PUBLIC_ONESIGNAL_SAFARI_WEB_ID,
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true,
    });
  }, []);
  return null;
}
