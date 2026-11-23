/* Quiet Space — Linen House: routed pages share a warm paper palette and gentle editorial navigation. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import AreaHampshire from "./pages/AreaHampshire";
import AreaSouthSurrey from "./pages/AreaSouthSurrey";
import Contact from "./pages/Contact";
import Decluttering from "./pages/Decluttering";
import DownsizingBereavement from "./pages/DownsizingBereavement";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import MoveInUnpacking from "./pages/MoveInUnpacking";
import Organising from "./pages/Organising";
import Services from "./pages/Services";
import Staging from "./pages/Staging";
import { useRouteSeo } from "./seo/useRouteSeo";

const rawBase = import.meta.env.BASE_URL || "/";
const basePath = rawBase === "./" ? "" : rawBase.replace(/\/$/, "");

function PageRoutes() {
  useRouteSeo();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/" component={Services} />
      <Route path="/services/organising" component={Organising} />
      <Route path="/services/organising/" component={Organising} />
      <Route path="/services/decluttering" component={Decluttering} />
      <Route path="/services/decluttering/" component={Decluttering} />
      <Route path="/services/staging" component={Staging} />
      <Route path="/services/staging/" component={Staging} />
      <Route path="/services/move-in-unpacking" component={MoveInUnpacking} />
      <Route path="/services/move-in-unpacking/" component={MoveInUnpacking} />
      <Route path="/services/downsizing-bereavement" component={DownsizingBereavement} />
      <Route path="/services/downsizing-bereavement/" component={DownsizingBereavement} />
      <Route path="/areas/hampshire" component={AreaHampshire} />
      <Route path="/areas/hampshire/" component={AreaHampshire} />
      <Route path="/areas/south-surrey" component={AreaSouthSurrey} />
      <Route path="/areas/south-surrey/" component={AreaSouthSurrey} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/gallery/" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact/" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={basePath} ssrPath={ssrPath}>
            <PageRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
