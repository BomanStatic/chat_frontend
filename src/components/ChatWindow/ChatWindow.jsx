import { IoIosSend } from "react-icons/io";
export default function ChatWindow() {
    return (
        <div className="grid h-[calc(100dvh-4rem)] grid-rows-[1fr_auto]  ">
            <ul className="flex flex-col gap-2 overflow-y-auto pl-3 pr-6">
                <li className="flex flex-row-reverse gap-2">
                    <div className="aspect-square h-10 rounded-full bg-emerald-500"></div>
                    <div className="max-w-[50%] ">
                        <p className="w-fit rounded-lg bg-accent px-3 py-2">Detta är ett test meddelande!</p>
                        <p className="text-sm">Today 10:52</p>
                    </div>
                </li>
                <li className="flex flex-row-reverse gap-2">
                    <div className="aspect-square h-10 rounded-full bg-emerald-500"></div>
                    <div className="max-w-[50%] ">
                        <p className="w-fit rounded-lg bg-accent px-3 py-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit consequuntur, laboriosam
                            quae voluptatum aliquid dicta fugiat officia non provident harum, ut quisquam quasi tempore
                            eveniet. Saepe ut reiciendis dolorum vero. Blanditiis, sint voluptatum? Dolorem quaerat iste
                            suscipit quo adipisci possimus libero reiciendis, sunt excepturi magnam eum odio illo unde
                            earum ab atque nemo? Delectus, recusandae ad laboriosam distinctio fugit dolores!
                            Repudiandae dolores beatae tempora expedita deserunt excepturi quaerat quis cumque doloribus
                            qui ad minima accusamus nobis, animi hic cum? Labore voluptatum ut dolores molestias cumque
                            deserunt! Voluptatum blanditiis neque quaerat. Corrupti dicta eaque ad nesciunt, officiis
                            incidunt fugit animi sed ipsum iure laudantium, consectetur doloribus? Quasi architecto cum
                            deleniti esse porro quia accusamus saepe quos doloribus, assumenda itaque ut a.
                        </p>
                        <p className="text-sm">Today 10:52</p>
                    </div>
                </li>
                <li className="flex gap-2">
                    <div className="aspect-square h-10 rounded-full bg-emerald-500"></div>
                    <div className="max-w-[50%] ">
                        <p className="w-fit rounded-lg bg-secondary px-3 py-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas perspiciatis sapiente
                            deserunt ratione doloremque repellendus quisquam praesentium a consequatur, illo cupiditate
                            soluta ullam sunt fuga aut possimus dolorum labore pariatur!
                        </p>
                        <p className="text-sm">Today 10:52</p>
                    </div>
                </li>
                <li className="flex gap-2">
                    <div className="aspect-square h-10 rounded-full bg-emerald-500"></div>
                    <div className="max-w-[50%] ">
                        <p className="w-fit rounded-lg bg-secondary px-3 py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore possimus veniam,
                            at quis accusantium repudiandae voluptates? Nobis iste recusandae repellendus atque tempore
                            iusto blanditiis, eum fugiat, consequatur aliquid ut! Fugit, nemo quis expedita rem
                            architecto dolore libero! Nihil distinctio culpa ad eius fugiat nostrum ducimus est, minima
                            odio aliquid assumenda ex aliquam molestias ipsa illum officiis dolorem corporis
                            consequatur. Enim, modi impedit laborum eaque nesciunt est accusamus asperiores molestiae
                            soluta assumenda nam vel at quae itaque natus labore! Mollitia commodi repellendus saepe
                            reprehenderit explicabo officia, odio aspernatur exercitationem numquam. Necessitatibus
                            voluptates iste cupiditate iure ipsa eligendi doloremque esse atque repellendus accusantium.
                            Corrupti aliquid obcaecati laborum quidem neque maxime alias nihil quos dolorem, totam
                            reiciendis iure quaerat doloremque labore soluta?
                        </p>
                        <p className="text-sm">Today 10:52</p>
                    </div>
                </li>
                <li className="flex gap-2">
                    <div className="aspect-square h-10 rounded-full bg-emerald-500"></div>
                    <div className="max-w-[50%] ">
                        <p className="w-fit rounded-lg bg-secondary px-3 py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempore possimus veniam,
                            at quis accusantium repudiandae voluptates? Nobis iste recusandae repellendus atque tempore
                            iusto blanditiis, eum fugiat, consequatur aliquid ut! Fugit, nemo quis expedita rem
                            architecto dolore libero! Nihil distinctio culpa ad eius fugiat nostrum ducimus est, minima
                            odio aliquid assumenda ex aliquam molestias ipsa illum officiis dolorem corporis
                            consequatur. Enim, modi impedit laborum eaque nesciunt est accusamus asperiores molestiae
                            soluta assumenda nam vel at quae itaque natus labore! Mollitia commodi repellendus saepe
                            reprehenderit explicabo officia, odio aspernatur exercitationem numquam. Necessitatibus
                            voluptates iste cupiditate iure ipsa eligendi doloremque esse atque repellendus accusantium.
                            Corrupti aliquid obcaecati laborum quidem neque maxime alias nihil quos dolorem, totam
                            reiciendis iure quaerat doloremque labore soluta?
                        </p>
                        <p className="text-sm">Today 10:52</p>
                    </div>
                </li>
            </ul>

            <form className="flex gap-4 px-4 py-2 text-lg" action="">
                <input
                    className="grow rounded-lg bg-accent px-4 py-2 text-background outline-none outline outline-offset-0 outline-transparent placeholder:text-background focus:outline-text"
                    type="text"
                    placeholder="Type a message..."
                />
                <button className="rounded-lg bg-secondary px-4 py-2 text-2xl font-semibold" type="submit" title="Send">
                    <IoIosSend />
                </button>
            </form>
        </div>
    );
}
