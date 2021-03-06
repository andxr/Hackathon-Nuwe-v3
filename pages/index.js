import Login from "components/Login";
import Register from "components/Register";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [register, setRegister] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (document.cookie) {
      router.push("/main");
    }
  }, []);
  return (
    <>
      <div>
        <Head>
          <title>Hackathon Nuwe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="content">
            <div className="imageSection">
              <div className="image">
                <img
                  src="/nuwe.jpeg"
                  alt=" Logo Nuwe "
                  width="100%"
                  height="100%"
                />
              </div>
            </div>

            <div className="loginContainer">
              {!register ? (
                <Login setRegister={setRegister} />
              ) : (
                <Register setRegister={setRegister} />
              )}
            </div>
          </div>
        </main>
      </div>
      <style jsx>
        {`
          main {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .content {
            background: white;
            padding: 20px 40px;
            border-radius: 10px;
            box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 30px;
            margin: 0px 20px;
            z-index: 0;
          }

          main h1,
          h3 {
            margin: 0px;
            margin-top: 10px;
            text-align: center;
          }

          main h1 {
            margin-top: 30px;
          }

          main h3 {
            margin-bottom: 30px;
          }

          .image {
            max-width: 100px;
            max-height: 100px;
          }

          .imageSection {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media (max-width: 830px) {
            .content {
              display: flex;
              flex-direction: column;
              width: 100%;
              min-height: 100vh;
              margin: 0;
              box-shadow: none;
              padding: 10px;
            }

            main {
              height: 100%;
              padding: 0px;
            }

            .searchSection {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              max-width: 100%;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          @media (max-width: 830px) {
            body {
              background: white;
            }
          }
        `}
      </style>
    </>
  );
}
