import ChannelList from "../components/ChannelList/ChannelList";
import ChatWindow from "../components/ChatWindow/ChatWindow";
export default function HomeView() {
    return (
        <section className="chat">
            <ChannelList />
            <ChatWindow />
        </section>
    );
}
