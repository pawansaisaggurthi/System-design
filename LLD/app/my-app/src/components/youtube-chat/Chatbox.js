const ChatBox = ({ name, comment }) => {
    return (
        <div className="flex ms-2 mt-2">
            <img alt="hello" className="rounded-lg" src="https://yt4.ggpht.com/W3P_Q-CMvfvaQbNCndJ-zGVuDq-K4UP4_qZZ2h1NusW4JWh8Imr4l0l56BWjqvNEaq9MoSsr=s32-c-k-c0x00ffffff-no-rj" />
            <div className="mx-2">
                <p className="font-bold">{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default ChatBox;