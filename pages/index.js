import Head from "next/head";
import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kōdan</title>
        <meta name="description" content="Kōdan is a tool to help dreamers storyboard their dream anime" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display: "flex", margin: 0, height: "100vh", fontFamily: "Inter, 'Helvetica Neue', sans-serif", flexDirection: "column", width: "100vw", alignItems: "center"}}>
      <div style={{width: "100%", display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center",  background: "linear-gradient(180deg, #5653B2 0%, rgba(255, 255, 255, 0.00) 69.5%)"}}>
        <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img style={{width: 72, height: 72, marginTop: 24, borderRadius: 12, border: "1px solid #000"}} src="./KodanFlowerLogo.png"/><br/>
        </div>
        <img style={{maxWidth: "calc(100% - 32px)", borderRadius: 12, border:"1px solid #000000", marginTop: 24, marginBottom: 24, width: 700}} src="./KodanAnime.png"/>
        <h1 style={{fontSize: 52, margin: 0, textAlign: "center"}}>Storyboard<span id="HideYourOnMobile">{' '}Your</span><br/> Dream Anime</h1>
        <div style={{display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 16}}>
          <button style={{ fontSize: 20, border: "0px", backgroundColor: "#5653B2", color: "#fff", borderRadius: 12, cursor: "pointer", padding: "8px 16px"}}>Try Demo</button>
          <button style={{ fontSize: 20, border: "0px", backgroundColor: "#fff", border: "1px solid #5653B2", color: "#5653B2", borderRadius: 12, cursor: "pointer", padding: "8px 16px"}}>Download</button>
        </div>
      </div>
      <div style={{width: 700, marginTop: 32, paddingLeft: 16, paddingRight: 16, flexDirection: "column", display: "flex", maxWidth: "calc(100% - 32px)"}}>
        <h2>Kickstart Your Anime</h2>

        <div style={{display: "flex", width: 700, flexWrap: "wrap", maxWidth: "100%", gap: 16, flexDirection: "row"}}>
  <div style={{display: "flex", flex: "1 1 292px", borderRadius: 12, border: "1px solid #5653B2", padding: 24, flexDirection: "column"}}>
    <img style={{width: 42}} src="./StoryBook.svg"/>
    <h3>Make your anime storyboard<br/>with a virtual artist</h3>
    <a href="kodan.app" style={{color: "#5653B2"}}>Try Now</a>
  </div>
  <div style={{display: "flex", flex: "1 1 292px", borderRadius: 12, border: "1px solid #5653B2", padding: 24, flexDirection: "column"}}>
    <img style={{width: 42}} src="./Character.svg"/>
    <h3>Design consistent characters<br/>your audience will love</h3>
    <a style={{color:"#5653B2"}}>coming soon...</a>
  </div>
</div>

      <div style={{maxWidth: "100%", padding: 24, border: "1px solid #5653B2", marginTop: 16, borderRadius: 12}}>
      <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16}}>
  <div style={{flex: "1 1 292px", minWidth: 250}}>
    <img style={{width: 42}} src="./Brush.svg"/>
    <h3>Give your anime a unique feel<br/>with custom style modules</h3>
    <p><a style={{color:"#5653B2"}} href="">Try Now</a></p>
  </div>
  <a  style={{flex: "1 1 292px", maxWidth: "100%", borderRadius: "12px", overflow: "hidden", width: 400, minWidth: 300}} href="https://huggingface.co/alvdansen/phantasma-anime"><img style={{flex: "1 1 292px", maxWidth: "100%", borderRadius: "12px", overflow: "hidden", width: 400, minWidth: 300}} src="./LoraSample.png"/></a>
</div>

      </div>
      </div>

      {/* <div style={{width: 700, maxWidth: "100%"}}>
        <h3>Animate Your Story Boards...<br/>
        Coming December 17th</h3>
        <img style={{maxWidth: "100%", width: 400}} src="./Imagination.png"/>
      </div> */}
      
      <div style={{width: "100vw", backgroundImage: "url(./KeepDreaming.png)", alignItems: "center", justifyContent :"center", display: "flex", color: "#fff", marginTop: 32, marginBottom: 32}}>
      <div style={{width: 700, maxWidth: "100%"}}>
        
        <h2 style={{width: "100%", marginTop: 32, textAlign: "center"}}>Hobbyists starting<br/>
        their first anime...</h2>

        {/* <div>
          <p>Shinichi Mine met Thomas & Dieter at a cafe in Japan when they were building the initial versions of Kōdan. He grew to love it. He is currently interested in turning his book about his childhood growing up in the Dominician Republic for a few years into a video story..</p>
          <p>Shinichi Mine, Saitama Japan</p>
        </div> */}
        {/* <div>
          <p>I’m building Kōdan with my best friend Dieter because we love making videos together and have always wanted to make our anime. Kōdan makes that dream possible.</p>
          <p>Thomas Stubblefield, San Francisco</p>
        </div> */}
        <video autoplay controls style={{width: "calc(100% - 32px)", marginLeft: 16, marginRight: 16, borderRadius: 16, marginBottom: 32}} src="./KodanVideo.mp4"/>
      </div>
      </div>
      <div style={{width: 700, maxWidth: "calc(100% - 32px)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16,}}>
        <h2 style={{margin: 0, width: "100%", textAlign: "center"}}>Dream Your<br/>
        Anime Today
        </h2>
        <div style={{display: "flex", gap: 16,}}>
          <button style={{padding: "8px 16px", color: "#fff", border: "0px", borderRadius: 8, fontSize: 16, backgroundColor: "#5653B2"}}>Try Demo</button>
          <button style={{padding: "8px 16px", backgroundColor: "#fff", border: "0px", borderRadius: 8, fontSize: 16, color: "#5653B2", border: "1px solid #5653B2"}}>Download</button>
        </div>
      </div>
      <div style={{width: "100vw", borderTop: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 32,}}>      
        <div style={{width: 700, paddingTop: 16, paddingBottom: 16, display: "flex", flexDirection: "row", justifyContent: "space-between", maxWidth: "100%"}}>
     <div style={{width: "100%", padding: 16, color: "#000", display: "flex", flexDirection: "column", gap: 12}}>
     <a>Kōdan</a>
     <a style={{color: "#000"}} href="https://kodan.app">Kodan Web</a>
     <a  style={{color: "#000"}} href="https://kodan.app/download">Kodan Desktop</a>
     </div>
     <div style={{width: "100%", padding: 16, display: "flex", flexDirection: "column", gap: 12}}>
     <a style={{color: "#000"}} href="https://x.com/kodanapp">X</a>
     <a style={{color: "#000"}} href="https://instagram.com/kodanapp">Instagram</a>
     <a style={{color: "#000"}} href="mailto:contact@serenidad.app">contact@serenidad.app</a>
     </div>
      </div>
      </div>
      </div>

    </>
  );
}
