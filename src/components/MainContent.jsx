import Post from "./Post";
import Statusbar from "./Statusbar";

function MainContent({ className }) {
  return (
    <main className={className}>
      <Statusbar className="statusBar" />
      <Post className="post" userId="Sam" content="See you space cowboy" />
      <Post className="post" userId="Sophie" content="Party Party Party" />
      <Post className="post" userId="Dipper" content="Let's play ball" />
    </main>
  );
}

export default MainContent;
