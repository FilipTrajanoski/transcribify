import AppLayout from "./ui/AppLayout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";
import Languages from "./pages/Languages.jsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import UploadVideo from "./pages/UploadVideo.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0
        }
    }
})

function App() {
    return (
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"}
                               element={<AppLayout/>}>
                            <Route path={"/languages"}
                                   element={<Languages/>}/>
                            <Route path={"/upload-video"}
                                   element={<UploadVideo/>}/>
                            <Route path={"/login"}
                                   element={<Login/>}/>
                            <Route path={"/signup"}
                                   element={<Signup/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </DarkModeProvider>
    )
}

export default App
