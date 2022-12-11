import "./index.css";

function App() {
  return (
    <div>
      <div className="flex my-16 mx-32 flex-col">
        <h1 className="font-semibold text-slate-50 text-5xl mx-8">
          Nikita Drako
        </h1>
        <h1 className="font-semibold text-slate-100 text-4xl mx-8">
          Web-developer
        </h1>
        <div className="flex gap-6 mx-8 my-6 w-80 min-w-fit text-slate-50">
          <img src="picture.png" alt="Nikita Drako" width={320} />
          <div className="flex flex-col mx-8 gap-6 min-w-[200px]">
            <h1 className="font-semibold  text-3xl">About me</h1>
            <h2 className=" font-semibold text-xl">
              Hello! I am a second course student of Belarusian State University
              of Faculty of Mechanics and Mathematics for web-developer and
              mathematician. My main programming languages are С++ and
              JavaScript and its library React. Also have knowledge of other
              languages like: Bash and Transact SQL. Can work in applications
              like Figma, Adobe Illustrator and Adobe Photoshop.
              <br />
              Also have base knowledge of 3D modelling in zBrush, substance
              painter and Autodesk 3ds Max.
            </h2>
            <div className="flex my-2 gap-16">
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-2xl gap-2">Contacts:</h1>
                <div className="flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    width={35}
                  />
                  <h2 className="text-xl">GitHub</h2>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968940.png"
                    width={35}
                  />
                  <h2 className="text-xl">Telegram</h2>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-2xl gap-2">Main skills:</h1>
                <div className="flex gap-2">
                  <img
                    src="https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png"
                    width={35}
                  />
                  <h2 className="text-xl">C++</h2>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://img.icons8.com/ios-filled/500/javascript-logo.png"
                    width={35}
                  />
                  <h2 className="text-xl">JavaScript</h2>
                </div>
                <div className="flex gap-2">
                  <img
                    src="https://www.svgrepo.com/show/327388/logo-react.svg"
                    width={35}
                  />
                  <h2 className="text-xl">React</h2>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-2xl">languages:</h1>
                <h2 className="text-xl">Russian - native</h2>
                <h2 className="text-xl">English - B2</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-slate-50 my-6 mx-8 gap-9">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="flex">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Todos</h1>
              <img src="todos.gif" width={320} alt="todos" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">API & SPA</h1>
              <img src="router.gif" width={320} alt="router" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">Notes</h1>
              <img src="notes.gif" width={320} alt="notes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
