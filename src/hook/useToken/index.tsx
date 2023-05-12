// import { Messaging } from "firebase-admin/lib/messaging/messaging";
import { initializeApp } from "firebase/app";
import { MessagePayload, getMessaging, getToken, isSupported, onMessage } from "firebase/messaging";
import React from "react";
import { onBackgroundMessage } from "firebase/messaging/sw";
import { firebaseConfig } from "../../utils/lib/firebass";
import { ShowToastify } from "../../utils";
import { setCookie } from 'cookies-next';

interface StateUseToken {
  tokenFCM: string;
  messaging: any;
}
function useToken() {
  const [tokenFCM, setTokenFCM] = React.useState<StateUseToken>();
  const [commingMessage, setCommingMessage] = React.useState<boolean>(false)
  const HandleMessageIncoming = async function (messageVar: MessagePayload) {
    try {

      return true;
    } catch (error) {
      ShowToastify("Got Some Error When Get Nofication , Please Try To Refresh ")
      throw error;
    }
  };

  React.useEffect(() => {
    const app = initializeApp(firebaseConfig);
    
    Notification.requestPermission(async (permission) => {
      if (permission == "granted") {
        const isSupportedBrowser = await isSupported();
        if (isSupportedBrowser) {
          const messaging = getMessaging(app);
          getToken(messaging, {
            vapidKey:
              process.env.NEXT_PUBLIC_APIKEY_MESSAGING,
          })
            .then((currentToken) => {
              if (currentToken) {
                setCookie(
                  'additionalAuthParams',
                  JSON.stringify({
                    appPublicKey: currentToken,
                  })
                );
                console.log("TOKEN", currentToken);
                localStorage.setItem("token_sal_stream", currentToken)
                onMessage(messaging, (payload) => {
                  HandleMessageIncoming(payload)
                  setCommingMessage(true)
                  console.log("Message received. 123123 ", payload.notification);
                  // idTimeOut = setTimeout(() => {
                  //   setCommingMessage(false)
                  // }, 3000)
                  ShowToastify("")
                  // ...
                });
                setTokenFCM({
                  tokenFCM: currentToken,
                  messaging: messaging,
                });
                // Send the token to your server and update the UI if necessary
                // ...
              } else {
                // Show permission request UI
                console.log(
                  "No registration token available. Request permission to generate one."
                );
                // ...
              }
            })
            .catch((err) => {
              console.log("An error occurred while retrieving token. ", err);
              throw err;
              // ...
            });
        }
        else {
          ShowToastify("Unsupported Browser ")
        }
      } else {
      }
    });

  }, []);

  return { tokenFCM, HandleMessageIncoming, commingMessage, setCommingMessage };
}

export default useToken;
