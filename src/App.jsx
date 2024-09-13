import AppLayout from "./ui/AppLayout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";
import Languages from "./pages/Languages.jsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import UploadVideo from "./pages/UploadVideo.jsx";
import {LanguageProvider} from "./context/LanguageContext.jsx";
import Homepage from "./pages/Homepage.jsx";
import {Toaster} from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound.jsx";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";

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
                <LanguageProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"}
                                   element={<AppLayout/>}>
                                <Route index
                                       element={<Homepage/>}/>
                                <Route path={"/languages"}
                                       element={<Languages/>}/>
                                <Route path={"/upload-video"}
                                       element={<ProtectedRoute><UploadVideo/></ProtectedRoute>}/>
                                <Route path={"/login"}
                                       element={<Login/>}/>
                                <Route path={"/signup"}
                                       element={<Signup/>}/>
                            </Route>
                            <Route path={"*"}
                                   element={<PageNotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </LanguageProvider>

                <Toaster position={"top-center"}
                         gutter={12}
                         toastOptions={{
                             success: {
                                 duration: 3000
                             },
                             error: {
                                 duration: 5000
                             },
                             style: {
                                 fontSize: "18px",
                                 maxWidth: "500px",
                                 padding: "16px 24px",
                                 backgroundColor: "var(--color-grey-0)",
                                 color: "var(--color-grey-700)",
                                 border: "1px solid var(--color-grey-300)",
                                 borderRadius: "20px"
                             }
                         }}
                />
            </QueryClientProvider>
        </DarkModeProvider>
    )
}

export default App
