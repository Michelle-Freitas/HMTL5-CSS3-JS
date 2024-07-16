import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from "./pages/DeafultPage";
import { Videos } from "./pages/Videos";
import { Form } from "./pages/Form";
import VideosProvider from "./context/Videos";

function App() {
  return (
    <BrowserRouter>
      <VideosProvider>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Videos />} />
            <Route path="/newvideo" element={<Form />} />
            <Route path="*" element={""} />
          </Route>
        </Routes>
      </VideosProvider>
    </BrowserRouter>
  );
}

export default App;
