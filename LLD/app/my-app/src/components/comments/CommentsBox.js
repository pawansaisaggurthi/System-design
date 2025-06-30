

const CommentsBox = ({ data }) => {

    return (
        <div className="mx-2">
            {data.map((item, index) =>
                <div key={index}>
                    <div className="flex mt-2">
                        <div>
                            <img className="h-10" alt="img" src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_p6kb2m6b185b1.png" />
                        </div>
                        <div className="px-2">
                            <p className="font-bold"> {item.userName}</p>
                            <p> {item.comment}</p>
                        </div>
                    </div>
                    {/* Nested replies required only one thing just recursion mind it */}
                    {item.replies && <div className="border-l-2 border-black px-2">{<CommentsBox data={item.replies} />}</div>}
                </div>
            )}
        </div>
    )

}

export default CommentsBox;