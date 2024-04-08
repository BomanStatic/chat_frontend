export default function ChannelList() {
    return (
        <aside className="font-semibo h-[calc(100dvh-4rem)] px-3 text-lg">
            <ul className="flex h-full flex-col gap-2 overflow-y-auto py-4">
                <li className="rounded-lg bg-accent px-3 py-2 text-background">Broadcast</li>
                <li className="rounded-lg px-3 py-2 transition-colors hover:bg-secondary/50">This_channel</li>
                <li className="rounded-lg px-3 py-2 transition-colors hover:bg-secondary/50">Viktigt</li>
            </ul>
        </aside>
    );
}
