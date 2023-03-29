import { PropsMessageLoading } from "../../models/movies";

const Loading = ({ messageLoading }: PropsMessageLoading) => {
    return (
        <>
            <div className="flex items-center justify-center flex-col h-full">
                <div style={{ borderTopColor: "transparent" }} className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin">

                </div>
                <p className="mt-3 font-bold text-2xl">{messageLoading}</p>
            </div>
        </>
    );
}

export default Loading;